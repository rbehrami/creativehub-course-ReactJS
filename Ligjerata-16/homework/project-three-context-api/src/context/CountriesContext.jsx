import { createContext, useEffect, useState, useMemo } from 'react';
import { getAllCountries } from '../api/APICountries';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [continent, setContinent] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [continentsList, setContinentsList] = useState([]);

  // Get filtered countries based on search and continent
  const countries = useMemo(() => {
    return allCountries.filter(country => {
      const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
      const matchesContinent = !continent || country.region === continent;
      return matchesSearch && matchesContinent;
    });
  }, [allCountries, search, continent]);

  // Fetch countries and extract unique continents
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setAllCountries(data);
        
        // Extract unique continents
        const uniqueContinents = [...new Set(data.map(c => c.region))].filter(Boolean);
        setContinentsList(uniqueContinents);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ 
      countries, 
      allCountries,
      continentsList,
      continent,
      setContinent,
      search, 
      setSearch, 
      loading 
    }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;