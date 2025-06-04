
// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoggMPtk0cnGUzeD97sncp_iMVhxAExOcB5pyaheUiKEQnGpCw7Ax0PulTyrmR7mVP/exec";

export type FormattedData = any; // Simplified type for Google Apps Script structure

export const submitFormData = async (formattedData: FormattedData): Promise<void> => {
  try {
    // Using no-cors mode, essential for working with public Google Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Essential for Google Apps Script
      body: JSON.stringify(formattedData),
    });
    
    // We can't read the response due to CORS restrictions with no-cors mode
    // But we log that the data was sent
    console.log('Form data sent:', formattedData);
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
