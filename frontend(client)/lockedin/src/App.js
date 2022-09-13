import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Nav from './components/Nav'
import Welcome from './pages/Welcome'
import CustomerRegister from './pages/CustomerRegister'
import BusinessRegister from './pages/BusinessRegister'
import CustomerLogin from './pages/CustomerLogin'
import BusinessLogin from './pages/BusinessLogin'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="customers/register" element={<CustomerRegister />} />
          <Route path="businesses/register" element={<BusinessRegister />} />
          <Route
            path="/customers/login"
            element={
              <CustomerLogin
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/businesses/login"
            element={
              <BusinessLogin
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
