import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineDown } from "react-icons/ai";
import { ListaMeKategori } from './KategoriList';

const KategoritDropDown = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <div className='relative'>
            <button onClick={()=>setOpen(!open)} className='flex items-center text-sm font-medium text-gray-700 hover:text-black'>Kategoritë<AiOutlineDown /></button>
        
          {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
          <ul className="py-2 text-sm text-gray-700">
            {ListaMeKategori.map((item) => (
              <li key={item.id}>
                <Link 
                  to={`/kategorit/${encodeURIComponent(item.kategoria.toLowerCase())}`} 
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.kategoria}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
    </>
  )
}

export default KategoritDropDown
