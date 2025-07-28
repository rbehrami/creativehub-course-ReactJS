import { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';
import {Link } from 'react-router-dom'

function Countries() {
  const { countries, loading, continent } = useContext(CountriesContext);

  if (loading) return <p>Loading...</p>;

  return (
    <section className='container mx-auto'>
      {continent && (
        <p className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm sm:text-base mt-5">
          Kontinenti {continent} ka gjithsej {countries.length} shtete
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {countries.map((country) => (
                            <div key={country.cca3} className="shadow-xl rounded-lg overflow-hidden">
                                <Link 
                                to={`/detajet-e-shtetit/${country.cca3}`}
                                state={{country}}>
                                    <div className="h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] p-4">
                                        <img
                                        src={country.flags.png}
                                        alt={`Flag of ${country.name.common}`}
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold">{country.name.common}</h3>
                                        <p>{country.region}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div> 
    </section>
  );
}
export default Countries;