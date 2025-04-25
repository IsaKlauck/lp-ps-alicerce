
// Mock API functions to simulate fetching cities and projects
// In a real application, these would call actual APIs

// Simulated API response for cities
export const fetchCities = async (state: string): Promise<{ id: number; name: string }[]> => {
  console.log(`Fetching cities for state: ${state}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data for demonstration
  const citiesByState: Record<string, { id: number; name: string }[]> = {
    'SP': [
      { id: 1, name: 'São Paulo' },
      { id: 2, name: 'Campinas' },
      { id: 3, name: 'Santos' },
      { id: 4, name: 'Ribeirão Preto' }
    ],
    'RJ': [
      { id: 5, name: 'Rio de Janeiro' },
      { id: 6, name: 'Niterói' },
      { id: 7, name: 'Petrópolis' }
    ],
    'MG': [
      { id: 8, name: 'Belo Horizonte' },
      { id: 9, name: 'Uberlândia' },
      { id: 10, name: 'Juiz de Fora' }
    ],
    // Default cities for other states
    'DEFAULT': [
      { id: 11, name: 'Capital' },
      { id: 12, name: 'Cidade Interior 1' },
      { id: 13, name: 'Cidade Interior 2' }
    ]
  };
  
  return citiesByState[state] || citiesByState['DEFAULT'];
};

// Simulated API response for projects
export const fetchProjects = async (state: string): Promise<{ id: number; name: string; state: string }[]> => {
  console.log(`Fetching projects for state: ${state}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Mock data for demonstration
  const projectsByState: Record<string, { id: number; name: string; state: string }[]> = {
    'SP': [
      { id: 1, name: 'Projeto Alicerce SP - Capital', state: 'SP' },
      { id: 2, name: 'Qualifica Campinas', state: 'SP' }
    ],
    'RJ': [
      { id: 3, name: 'Alicerce Rio Centro', state: 'RJ' },
      { id: 4, name: 'Projeto Qualifica Niterói', state: 'RJ' }
    ],
    'MG': [
      { id: 5, name: 'Alicerce BH', state: 'MG' },
      { id: 6, name: 'Qualifica Uberlândia', state: 'MG' }
    ],
    // Default projects for states without specific entries
    'DEFAULT': []
  };
  
  return projectsByState[state] || projectsByState['DEFAULT'];
};
