import { ListaMeKategori } from "../Kategorit/KategoriList"
import imageForSale from '../../assets/forsale.jpg'
import { FcRight } from "react-icons/fc";
import Card from './Card'


export const CardContent = ()=>{
    return <article>
        <div className="container mx-auto px-4 mt-8">
        <div className='flex justify-between'>
          <h2 className="text-2xl font-bold mb-6">Shfleto Kategoritë</h2>
          <a href="#" className='flex items-center text-blue-800'>Shfleto te gjitha kategorit<FcRight /></a>
        </div>        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ListaMeKategori.map((item) => (
            <Card
              key={item.id}
              kategoria={item.kategoria}
              image={imageForSale}
              linku={item.linku}
            />
          ))}
        </div>
      </div>
    </article>
}