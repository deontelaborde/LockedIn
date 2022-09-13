import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Nav from './components/Nav'
import Welcome from './pages/Home'
import CustomerRegister from './pages/CustomerRegister'
import BusinessRegister from './pages/BusinessRegister'
import Login from './pages/CustomerLogin'

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
              <Login
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
