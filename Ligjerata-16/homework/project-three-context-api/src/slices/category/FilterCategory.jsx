import { useContext } from 'react';
import CountriesContext from '../../context/CountriesContext';

function FilterContinent() {
  const { continent, setContinent, continentsList } = useContext(CountriesContext);

  return (
    <>
    <main className='flex items-center gap-2'>
    <label htmlFor="">Zgjedh Kontinentin</label>
      <select
      value={continent}
      onChange={(e) => setContinent(e.target.value)}
      className="border border-gray-300 rounded-full px-3 py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white"
    >   
      <option value="">Të gjitha...</option>
      {continentsList.map(cont => (
        <option key={cont} value={cont}>{cont}</option>
      ))}
    </select>
    </main>
    </>
    
  );
}

export default FilterContinent;