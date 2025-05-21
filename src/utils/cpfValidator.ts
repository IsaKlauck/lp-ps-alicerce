
/**
 * CPF (Cadastro de Pessoas Físicas) validation utility
 * This contains functions to validate CPF numbers using the standard algorithm
 * and a simulation of an external API check
 */

/**
 * Calculate the first verification digit of a CPF
 */
const calculateFirstDigit = (digits: number[]): number => {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

/**
 * Calculate the second verification digit of a CPF
 */
const calculateSecondDigit = (digits: number[]): number => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

/**
 * Basic CPF algorithm validation
 * Validates the CPF using the standard verification algorithm
 */
export const validateCpfAlgorithm = (cpf: string): boolean => {
  // Remove non-numeric characters
  const cleanCpf = cpf.replace(/[^\d]/g, '');

  // Check if CPF has 11 digits
  if (cleanCpf.length !== 11) return false;

  // Check if all digits are the same (invalid CPF)
  if (/^(\d)\1+$/.test(cleanCpf)) return false;

  // Convert to array of numbers
  const cpfDigits = cleanCpf.split('').map(Number);

  // Calculate first verification digit
  const firstDigit = calculateFirstDigit(cpfDigits);
  if (firstDigit !== cpfDigits[9]) return false;

  // Calculate second verification digit
  const secondDigit = calculateSecondDigit(cpfDigits);
  if (secondDigit !== cpfDigits[10]) return false;

  // All validations passed
  return true;
};

/**
 * Simulated API check for CPF validation
 * This function simulates an external API call to validate a CPF
 * In a real application, this would be an actual API call to the Brazilian Federal Revenue service
 */
export const validateCpfWithExternalApi = async (cpf: string): Promise<boolean> => {
  // First perform the basic validation
  if (!validateCpfAlgorithm(cpf)) {
    return false;
  }
  
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real scenario, this would be an actual API call
      // Here we're just returning true if the algorithm validation passed
      resolve(true);
    }, 500); // Simulate a 500ms API call delay
  });
};

/**
 * Complete CPF validation
 * Performs both algorithm validation and simulated external API validation
 */
export const validateCpf = async (cpf: string): Promise<boolean> => {
  try {
    // First do the algorithm check
    if (!validateCpfAlgorithm(cpf)) {
      return false;
    }
    
    // Then simulate the API check
    return await validateCpfWithExternalApi(cpf);
  } catch (error) {
    console.error('Error validating CPF:', error);
    return false;
  }
};
