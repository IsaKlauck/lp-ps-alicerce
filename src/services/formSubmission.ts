
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
    // Convert the data to a proper JSON string
    const jsonData = JSON.stringify(formattedData);
    
    // Create a FormData object and append the JSON data
    const formData = new FormData();
    formData.append('data', jsonData);
    
    // Use fetch to send the data
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Use no-cors mode since this is a cross-domain request
    });
    
    // Note: With no-cors mode, we can't access the response content
    console.log('Form submitted successfully');
    
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
