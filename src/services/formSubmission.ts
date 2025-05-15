
// Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKYcvGclBmr5xh1ZSj8mKCkmAItlb_qRKSVtB12wUzOh7sy4KYeOz15DGeiHDqaWO-/exec";

export type FormattedData = {
  PersonalDataSection: Record<string, string>;
  AccessibilitySection: Record<string, string>;
  RelationshipSection: Record<string, string>;
  EducationSection: Record<string, string>;
  submissionDate: string;
};

export const submitFormData = async (formattedData: FormattedData): Promise<void> => {
  try {
    // Send data as JSON directly
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
      mode: 'no-cors' // Use no-cors mode since this is a cross-domain request
    });
    
    // Note: With no-cors mode, we can't access the response content
    console.log('Form submitted successfully');
    
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
