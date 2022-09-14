import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Welcome from './pages/Welcome'
import { Nav } from './components/Nav'
import BusinessRegister from './pages/BusinessRegister'

import BusinessLogin from './pages/BusinessLogin'
import { CheckSession } from './services/Authorize'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)




  
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
        </Routes>
      </main>
    </div>
  )
}

export default App
