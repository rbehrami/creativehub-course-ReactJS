import { useLocation, Link } from 'react-router-dom';

function CountryDetails() {
  const { state } = useLocation();
  const country = state?.country;

  if (!country) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>No country data available</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to countries list
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Flag Image */}
          <div className="md:w-1/2 bg-gray-100">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Country Details */}
          <div className="p-6 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="mb-2"><span className="font-semibold">Emri Zyrtar:</span> {country.name.official}</p>
                <p className="mb-2"><span className="font-semibold">Kryeqyteti:</span> {country.capital?.join(', ') || 'N/A'}</p>
                <p className="mb-2"><span className="font-semibold">Regjioni:</span> {country.region}</p>
                <p className="mb-2"><span className="font-semibold">Shtrirja:</span> {country.subregion || 'N/A'}</p>
                
                {country.currencies && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Valuta:</h3>
                    <div>
                      {Object.entries(country.currencies).map(([code, currency]) => (
                        <p key={code} className="mb-1">
                          {currency.name} ({currency.symbol || 'No symbol'}) - {code}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <p className="mb-2"><span className="font-semibold">Popullsia:</span> {country.population.toLocaleString()}</p>
                <p className="mb-2"><span className="font-semibold">Siperfaqja:</span> {country.area?.toLocaleString() || 'N/A'} km²</p>
                <p className="mb-2"><span className="font-semibold">Gjuhet qe fliten:</span> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>                
              </div>
            </div>

            {/* Shtetet perreth */}
            {country.borders && (
              <div className="mt-4">
                <h2 className="font-semibold mb-2">Ka si shtete fqinje:</h2>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map((borderCode) => (
                    <span key={borderCode} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {borderCode}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Link 
              to="/" 
              className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Ktheu tek te gjitha Shtetet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;