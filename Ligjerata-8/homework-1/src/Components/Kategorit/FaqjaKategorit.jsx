import { useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { produktet } from '../../data/produktet'; 

const FaqjaKategorit = () => {
  const { kategoria } = useParams();
  const decodedKategoria = decodeURIComponent(kategoria);

  const produktetFiltruara = produktet.filter(
    p => p.kategoria.toLowerCase().trim() === decodedKategoria.toLowerCase().trim()
  );

  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {decodedKategoria}
      </h1>

      {produktetFiltruara.length === 0 ? (
        <p className="text-gray-500">Asnjë produkt nuk u gjet për këtë kategori.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produktetFiltruara.map((produkt) => (
            <Link
              key={produkt.id}
              to={`/${encodeURIComponent(produkt.emri.toLowerCase().replace(/\s+/g, '-'))}`}
              state={{ produkt }}
              className="block hover:bg-gray-300 bg-opacity-50 h-[350px] shadow-md transition p-4 space-y-3"
            >
              <img src={produkt.image} alt={produkt.emri} className="w-full h-60 object-cover rounded-md" />
              <p className="flex flex-row items-center text-sm text-gray-600">
                <IoLocationOutline className="mr-1" />
                {produkt.lokacioni}
              </p>
              <h2 className="text-base font-bold text-gray-900">{produkt.emri}</h2>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default FaqjaKategorit;
