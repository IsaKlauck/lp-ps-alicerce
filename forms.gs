/**
 * Recebe dados do formulário Lovable e armazena na planilha.
 */
function doPost(e) {
  try {
    /* 1 — parse JSON body */
    if (e.postData && e.postData.contents) {
      var data = JSON.parse(e.postData.contents);
    } else if (e.parameter && e.parameter.data) {
      var data = JSON.parse(e.parameter.data);
    } else {
      throw new Error('Sem corpo na requisição');
    }

    /* 2 — calculate derived fields */
    const age = (() => {
      if (!data.birthDate) return '';
      const [dd, mm, yyyy] = data.birthDate.split('/');
      const birth = new Date(+yyyy, +mm - 1, +dd);
      const today = new Date();
      let a = today.getFullYear() - birth.getFullYear();
      if (
        today.getMonth()  < birth.getMonth() ||
        (today.getMonth() === birth.getMonth() &&
         today.getDate()  < birth.getDate())
      ) a--;
      return a;
    })();

    const submissionDateFmt = data.submissionDate
      ? Utilities.formatDate(
          new Date(data.submissionDate),
          'GMT-3',
          'dd/MM/yyyy HH:mm:ss')
      : '';

    /* 3 — append to sheet (atomic) */
    const ssId = PropertiesService.getScriptProperties().getProperty('id_da_planilha');
    const sh   = SpreadsheetApp.openById(ssId).getSheetByName('FormsInscricao');
    if (!sh) throw new Error("Aba 'FormsInscricao' não encontrada");

    const newRow = [
      '',                     // A
      data.name || '',        // B
      data.email || '',       // C
      data.cpf ? data.cpf.replace(/[^\d]/g, '') : '', // D
      data.birthDate || '',   // E
      age || '',              // F
      data.phone ? data.phone.replace(/[^\d]/g, '') : '', // G
      data.state || '',       // H
      data.city || '',        // I
      data.neighborhood || '',// J
      data.gender || '',      // K
      data.ethnicity || '',   // L
      data.hasDisability || '',      // M
      data.disabilityDetails || '',  // N
      data.howDidYouKnow || '',      // O
      data.projectInterest || '',    // P
      data.education || '',          // Q
      data.course || '',             // R
      data.courseType || '',         // S
      data.completionYear || '',     // T
      data.institutionType || '',    // U
      '',                            // V
      submissionDateFmt,             // W
      Utilities.getUuid(),           // X  – Submission ID
      '', '', '', '', '', '', '', '' // Y – AF
    ];

    sh.appendRow(newRow);

    /* 4 — post-processing */
    try {
      gerarMapasPendentes();
    } catch (_) {}

    return json({ status: 'success', message: 'Dados inseridos' });
  } catch (err) {
    return json({ status: 'error', message: err.message });
  }
}

/**
 * Endpoint de teste para checar se o serviço está ativo e verificar a estrutura da planilha.
 */
function doGet() {
  try {
    const ssId = PropertiesService.getScriptProperties().getProperty('id_da_planilha');
    const sh   = SpreadsheetApp.openById(ssId).getSheetByName('FormsInscricao');
    if (!sh) throw new Error("Aba 'FormsInscricao' não encontrada");

    return json({
      status:   'success',
      sheetId:  ssId,
      sheetName: sh.getName(),
      lastRow:  sh.getLastRow(),
    });
  } catch (err) {
    return json({ status: 'error', message: err.message });
  }
}

function enviarEmailProva(nome, email, telefone, linkProvas) {
  // Carrega o template HTML do arquivo
  var htmlTemplate = HtmlService.createHtmlOutputFromFile('email-prova').getContent();

  // Substitui os marcadores pelos dados do candidato
  htmlTemplate = htmlTemplate
    .replace('<!--NOME_DO_CANDIDATO-->', nome)
    .replace('<!--EMAIL-->', email)
    .replace('<!--TELEFONE-->', telefone)
    .replace('<!--ANO-->', new Date().getFullYear())
    .replace('<!--LINK_PROVAS-->', linkProvas);

  // Envia o e-mail
  MailApp.sendEmail({
    to: email,
    subject: "Confirmação de inscrição e MAPA - Alicerce",
    htmlBody: htmlTemplate
  });
}

/**
 * Envia e-mails MAPA para candidatos elegíveis e registra a data de envio.
 * Percorre a planilha, monta o HTML, substitui marcadores e envia o e-mail.
 */
function enviarEmailsMapaPendentes() {
  const id_da_planilha = PropertiesService.getScriptProperties().getProperty('id_da_planilha');
  const ss = SpreadsheetApp.openById(id_da_planilha);
  const sheet = ss.getSheetByName("FormsInscricao");
  const data = sheet.getDataRange().getValues();

  // Índices das colunas (0-based)
  const COL_NOME = 1;      // B
  const COL_EMAIL = 2;     // C
  const COL_TELEFONE = 6;  // G
  const COL_LINK_MAPA = 23; // X
  const COL_DATA_ENVIO = 27; // AB

  // Carrega o template HTML uma vez
  let htmlBase = HtmlService.createHtmlOutputFromFile('email-prova').getContent();

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const nome = row[COL_NOME];
    const email = row[COL_EMAIL];
    const telefone = row[COL_TELEFONE];
    const linkMapa = row[COL_LINK_MAPA];
    const dataEnvio = row[COL_DATA_ENVIO];

    // Validação: só envia se houver link, e-mail e ainda não enviado
    if (linkMapa && !dataEnvio && email) {
      // Substitui todas as ocorrências dos marcadores
      let htmlBody = htmlBase
        .replace(/\{\{NOME\}\}/g, nome)
        .replace(/\{\{EMAIL\}\}/g, email)
        .replace(/\{\{TELEFONE\}\}/g, telefone)
        .replace(/\{\{ANO\}\}/g, new Date().getFullYear())
        .replace(/\{\{LINK_PROVAS\}\}/g, linkMapa);

      MailApp.sendEmail({
        to: email,
        subject: "Confirmação de inscrição e MAPA - Alicerce",
        htmlBody: htmlBody
      });

      const dataAtual = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy HH:mm:ss");
      sheet.getRange(i + 1, COL_DATA_ENVIO + 1).setValue(dataAtual);

      Logger.log(`E-mail enviado para ${nome} (${email}) - linha ${i + 1}`);
    }
  }
}

function json(obj) {
  var out = ContentService.createTextOutput(JSON.stringify(obj));
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

/**
 * CORS pre-flight handler.
 */
function doOptions() {
  return json({ status: 'ok' });
}
