import './App.css'

import {Routes,Route} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {BASE_URL} from './globals'

import Nav from './components/Nav'
import Home from './pages/Home'
import Register from './pages/CustomerRegister'
import Login from './pages/CustomerLogin'


function App() {

  const [authenticated,toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)




  return (
    <div className="App">
      <header>
        <Nav />
      </header>
  
     <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route 
            path="customers/register" element = {<Register />}
          />
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
  );
}

export default App;
