import {Routes, Route} from 'react-router-dom'
import Layout from './Components/shared/Layout'
import NavBar from './Components/Header/NavBar'
import Home from './Pages/1.Home/Home'
import About from './Pages/2.About/About'
import GivingBack from './Pages/3.GivingBack/GivingBack'
import Faq from './Pages/4.Faq/Faq'

function App() {


  return (
    <>
    <div>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/givingback' element={<GivingBack />}/>
            <Route path='/faq' element={<Faq />}/>   
          </Route>
        </Routes>
    </div>
    </>
  )
}

export default App
