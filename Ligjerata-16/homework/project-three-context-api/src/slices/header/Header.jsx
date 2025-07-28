import {useContext} from 'react'
import CountriesContext from "../../context/CountriesContext";

function Header (){
    const {allCountries} = useContext(CountriesContext);
    return (
        <>
            <header className="container mx-auto rounded-b-lg">
                <div className="bg-orange-500 py-10 text-center">
                <div>
                    <h2 className="font-bold text-2xl text-white">Shtetet e Botes</h2>
                </div>
                <div>
                    <p className="text-gray-600 px-3 py-1 rounded-full text-sm sm:text-base">
                            Në botë ekzistojnë gjithesej <span className="font-semibold text-blue-600">{allCountries.length}</span> shtete
                    </p>
                </div>
            </div>
            </header>
        </>
    )
}
export default Header;