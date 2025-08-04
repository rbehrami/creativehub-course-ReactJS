
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ojklsbnisj7dy1qx.us.auth0.com"
      clientId="6SnWL4JHU2BvOCnSghtEcH5wSz2UDbn9"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          {/* <Route path='/profile' element={<h2>Test</h2>} /> 
          //vetem per test */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>  
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
)
