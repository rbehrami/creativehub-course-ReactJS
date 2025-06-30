import {Router, Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Navbar'
import Hero from './Components/Hero/Hero'
import { ListaMeKategori } from './Components/KategoriList'
import { CardContent } from './Components/cards/CardContent'
import FaqjaKategorit from './Components/Kategorit/FaqjaKategorit'
import ProduktDetajet from './Components/Produktet/ProduktDetajet'

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
       {/* Show Hero only on homepage */}
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/" element={<CardContent />} />
        <Route path="/kategorit/:kategoria" element={<FaqjaKategorit />} />
        <Route path="/:emri" element={<ProduktDetajet />} />
      </Routes>
    </>
  )
}

export default App
