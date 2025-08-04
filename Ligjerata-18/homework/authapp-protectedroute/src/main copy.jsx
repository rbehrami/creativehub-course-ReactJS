
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ojklsbnisj7dy1qx.us.auth0.com"
      clientId="ZE623ckSXIPXfVvkGcTqkxHAfKItnVPh"
      authorizationParams={{
        redirect_uri: window.location.origin +'/dashboard'
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          {/* <Route path='/profile' element={<h2>Test</h2>} /> 
          //vetem per test */}
          <Route 
                path='/profile' 
                element={
                  <ProtectedRoute>
                      <Profile />
                  </ProtectedRoute>
              } 
          />
          
          <Route path='/dashboard' element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          } 
          />
        </Routes>  
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
)
