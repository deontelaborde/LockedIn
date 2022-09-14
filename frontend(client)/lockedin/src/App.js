import './App.css'

import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Welcome from './pages/Welcome'
import { Nav } from './components/Nav'
import BusinessRegister from './pages/BusinessRegister'
import CarForm from './components/CarForm'
import CustomerHome from './pages/CustomerHome'
import CustomerDetails from './pages/CustomerDetails'
import BusinessLogin from './pages/BusinessLogin'
import EditCar from './pages/EditCar'
import {
  CheckSession,
  CreateCar,
  DestroyCar,
  UpdateCar
} from './services/Authorize'
import Profile from './pages/Profile'

import Footer from './components/Footer'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [car, setCar] = useState(null)
  const [editing, setEditing] = useState(false)

  let navigate = useNavigate()
  const getCustomers = async () => {
    const res = await axios.get(`${BASE_URL}/customers`)
    setCustomers(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getCustomers()
  }, [])
  const selectCustomer = (selected) => {
    setSelectedCustomer(selected)
    navigate(`/customers/${selected.id}`)
    console.log(selected)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

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

  const initialCarState = {
    year: '',
    make: '',
    model: '',
    color: '',
    customer_id: ''
  }

  const [carFromState, setCarFormState] = useState(initialCarState)

  const handleCarChange = (event) => {
    setCarFormState({
      ...carFromState,
      [event.target.id]: event.target.value,
      customer_id: customers.id
    })
  }
  const handleCarSubmit = async (event) => {
    event.preventDefault()
    if (editing) {
      await UpdateCar(carFromState)
      setCarFormState(initialCarState)
      let modifiedCustomer = selectedCustomer
      navigate('/')
      window.location.reload()
    } else {
      await CreateCar({
        year: carFromState.year,
        make: carFromState.make,
        model: carFromState.model,
        color: carFromState.color,
        customer_id: selectedCustomer.id
      })
      let modifiedCustomer = selectedCustomer
      modifiedCustomer.Cars.push(carFromState)
      navigate('/')
      window.location.reload()
    }
  }
    const editCar = (car, index) => {
      setEditing(true)
      setCar(car)
      setCarFormState(car)
      navigate('/cars/edit', { state: { index: index } })
    }

    const deleteCar = async (car_id) => {
      await DestroyCar(car_id)
      navigate('/')
      window.location.reload()
    }

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
                  customers={customers}
                  selectCustomer={selectCustomer}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route
              path="/customers/:customer_id"
              element={
                <CustomerDetails
                  selectedCustomer={selectedCustomer}
                  authenticated={authenticated}
                  user={user}
                  handleCarChange={handleCarChange}
                  handleCarSubmit={handleCarSubmit}
                  carFromState={carFromState}
                  deleteCar={deleteCar}
                  editCar={editCar}
                />
              }
            />
           <Route path="/car" element={<CarForm />} />
            <Route
              path="/cars/edit"
              element={
                <EditCar
                  car={car}
                  reviewFromState={carFromState}
                  onChange={handleCarChange}
                  onSubmit={handleCarSubmit}
                />
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }

export default App
