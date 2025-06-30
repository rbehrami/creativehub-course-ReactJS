import { useParams, useLocation } from 'react-router-dom';
import {produktet} from '../../data/produktet'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { CiPhone } from "react-icons/ci";

const slugify = (text) => 
  text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

const ProduktDetajet = () => {
  const { emri } = useParams();
  const location = useLocation();

  const produktFromState = location.state?.produkt;
  const produkt = produktFromState || produktet.find(p => slugify(p.emri) === emri);

  if (!produkt) {
    return <p className="text-center mt-10">Produkt nuk u gjet.</p>;
  }

  return (
    <section className="container mx-aut flex justify-center mt-20 gap-10 px-4 py-6">
      <div>
        <img src={produkt.image} alt={produkt.emri} className="w-[500px] h-[300px] max-w-md object-cover rounded mb-4" />
      </div>
      
     <div>
      <div className='flex flex-row items-center gap-1 mb-5'>
        <button className='me-3 bg-blue-100 px-4 py-1 font-bold text-blue-400 rounded-lg'>{produkt.kategoria}</button>
        <MdOutlineRemoveRedEye /><p>{produkt.views}</p><p>Shikues</p>
      </div>
      <h1 className="text-3xl font-bold mb-4">{produkt.emri}</h1>
      {produkt.pershkrimi}
      <div className='block py-8'>
        <div className='py-4'>
              <p>Dhënësi:</p>
        </div> 
        <div className='flex gap-5'>
          <img src="https://merrfal.com/placeholders/no-avatar.png" className='w-12 rounded-4xl' alt="" />
          <div className='block'>
            <p className="text-[15.5px] flex items-center">{produkt.dhensi}</p>
            <span className="text-[13px] font-normal text-gray-500 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1 -ml-[3.5px] h-4 w-4 flex-shrink-0 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg> {produkt.lokacioni}</span>
          </div>
        </div>
      </div>
     
      <div className='flex flex-row gap-4'>
        <button className='flex items-center gap-3 bg-blue-500 px-5 py-3 rounded-lg text-white'><CiPhone />Thirr Dhenesin</button>
        <button className='bg-green-500 px-5 py-3 rounded-xl'><ImWhatsapp /></button>
      </div>
     </div>
    </section>
  );
};


export default ProduktDetajet;
