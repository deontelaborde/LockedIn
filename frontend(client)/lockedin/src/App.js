import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Welcome from './pages/Welcome'
import { Nav } from './components/Nav'
import BusinessRegister from './pages/BusinessRegister'
import CustomerHome from './pages/CustomerHome'
import BusinessLogin from './pages/BusinessLogin'
import { CheckSession } from './services/Authorize'
import Profile from './pages/Profile'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setselectedCustomer] = useState([])


  const getCustomers = async () => {
    const res = await axios.get(`${BASE_URL}/customers`)
    setCustomers(res.data)
    console.log(res.data)
  }
  
  const selectCustomer = (selected) => {
    setSelectedCustomer(selected)
    navigate(`/customer/${selected.id}`)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    getCustomers()
    
  }, [])

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/profile"
            element={<Profile user={user} authenticated={authenticated} />}
          />

          <Route path="/register" element={<BusinessRegister />} />
          <Route
            path="/login"
            element={
              <BusinessLogin
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/customers"
            element={
              <CustomerHome
              customers={customers} cars={selectCustomer}
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
