
import { Routes, Route } from 'react-router-dom'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Header from './slices/header/Header'
import SearchInput from './slices/search/SearchInput'
import NavBar from './components/NavBar'

function App() {
  return (
    <Routes>
      {/* Route with header and navbar */}
      <Route path='/' element={
        <>
          <Header />
          <NavBar />
          <Countries />
        </>
      }/>      
      {/* Route without header and navbar */}
      <Route path='/detajet-e-shtetit/:country' element={<CountryDetails />}/>
    </Routes>
  )
}

export default App