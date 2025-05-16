
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
    // Format the data as a regular form submission - Google Apps Script often handles this better
    const formData = new FormData();
    
    // Add the JSON data as a single parameter
    formData.append('data', JSON.stringify(formattedData));
    
    // Use a hybrid approach - send data as FormData but with JSON inside
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header - let the browser set it with the boundary
    });
    
    console.log('Form submission response status:', response.status);
    console.log('Form data sent:', formattedData);
    
    // Even though we can't see the response content with CORS limitations,
    // we can at least check if the request was sent
    if (!response.ok && response.status !== 0) {
      throw new Error(`Form submission failed with status: ${response.status}`);
    }
    
    console.log('Form submitted successfully');
    
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
