const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/independent?status=true`);
  if (!response.ok) throw new Error('Nuk u morën të dhënat e shteteve');
  return await response.json();
};
