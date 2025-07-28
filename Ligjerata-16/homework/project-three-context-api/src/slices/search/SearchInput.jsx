import {useContext} from 'react'
import CountriesContext from '../../context/CountriesContext'

function SearchInput(){
    const {search, setSearch}=useContext(CountriesContext);

    return(
        <>
            <input 
                type="text" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder='Kerko shtet...'
                className='bg-white rounded-2xl py-2 px-5 outline: none'
            />
        </>
    )
}
export default SearchInput;