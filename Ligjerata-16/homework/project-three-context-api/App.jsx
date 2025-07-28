import {Routes, Route} from 'react-router-dom'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Countries />}/>
      <Route path='/detajet-e-shtetit/:country' element={<CountryDetails />}/>
    </Routes>
    </>
  )
}

export default App
