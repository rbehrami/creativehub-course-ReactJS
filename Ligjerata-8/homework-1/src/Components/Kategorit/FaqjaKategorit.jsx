import { useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import imageForProduct from '../../assets/jeans.jpg'
import imageFustan from '../../assets/fustan.jpg'
import imageMobilje from '../../assets/tavolinbuke.png'
import { Link } from 'react-router-dom';

const produktet = [
  {
    id: 1,
    emri: 'Tavolin Buke',
    pershkrimi: 'e perdorur',
    kategoria: 'mobilje',
    dhensi: 'Albana Bajraliu',
    lokacioni: 'Fshati zhilivod, Vushtrri',
    image: imageMobilje,
    views: 409,
  },
  {
    id: 2,
    emri: 'Jakne Per Meshkuj',
    pershkrimi: 'Jakne dimerore per meshkuj. Nr L/XL',
    kategoria: 'Veshje',
    dhensi: 'Dhënës Anonim',
    lokacioni: 'Rr.Bajram Kelmendi, Prishtine',
    image: imageForProduct,
    views: 212,
  },
  {
    id: 3,
    emri: 'Veshje Per Femra Nr. 36 -38',
    pershkrimi: 'Dhurohet fustani dy pjesë nr. 38 Ngjyre te kaltert',
    kategoria: 'Veshje',
    dhensi: 'Dhënës Anonim',
    lokacioni: 'Ulpiane, Prishtine',
    image: imageFustan,
    views: 88,
  },
  {
    id: 4,
    emri: 'Pantollona Për Meshkuj',
    pershkrimi: 'Jepen pantollonat, 6 palë, për meshkuj. Numer 31, 33',
    kategoria: 'Veshje',
    dhensi: 'Dhënës Anonim',
    lokacioni: 'Lipjan,Furra Beni,',
    image: imageForProduct,
    views: 88,
  },
  {
    id: 5,
    emri: 'Televizor Samsung',
    pershkrimi: 'i perdorur',
    kategoria: 'elektronike',
    dhensi: 'Rina Gashi',
    lokacioni: 'Gjakovë',
    image: 'https://via.placeholder.com/500x300/ccc',
    views: 88,
  }
];


const FaqjaKategorit = () => {
  
  const { kategoria } = useParams();
  const decodedKategoria = decodeURIComponent(kategoria);

   console.log('Kategoria nga URL:', decodedKategoria);
    produktet.forEach((p) => {
    console.log(`Produkt: ${p.emri}, Kategoria: "${p.kategoria}"`);
  });

  const produktetFiltruara = produktet.filter(
    p => p.kategoria.toLowerCase().trim() === decodedKategoria.toLowerCase().trim()
  );
console.log('Produktet që kalojnë filtrin:', produktetFiltruara);
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
    <img src={produkt.image} alt={produkt.emri} className="w-full h-60 object-cover rounded-md " />
    <p className="flex flex-row items-center text-sm text-gray-600"><IoLocationOutline />{produkt.lokacioni}</p>
    <h2 className="text-base font-bold text-gray-900">{produkt.emri}</h2>
  </Link>
))}
        </div>
      )}
    </section>
  );
};

export default FaqjaKategorit;
