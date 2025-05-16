// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKYcvGclBmr5xh1ZSj8mKSkmAItlb_qRKSVtB12wUzOh7sy4KYeOz15DGeiHDqaWO-/exec";

export type FormattedData = {
  PersonalDataSection: Record<string, string>;
  AccessibilitySection: Record<string, string>;
  RelationshipSection: Record<string, string>;
  EducationSection: Record<string, string>;
  submissionDate: string;
};

export const submitFormData = async (formattedData: FormattedData): Promise<void> => {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(formattedData),
    });
    console.log('Form data sent:', formattedData);
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
