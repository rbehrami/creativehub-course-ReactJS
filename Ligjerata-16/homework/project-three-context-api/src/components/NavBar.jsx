import SearchInput from '../slices/search/SearchInput'
import FilterCategory from '../slices/category/FilterCategory'

function NavBar(){

    return(

        <>
            <div className='container mx-auto flex bg-blue-400 py-5 px-5 mt-2 rounded-2xl gap-10 '>
                <SearchInput />
                <FilterCategory />
            </div>           
        </>
    )
}

export default NavBar;