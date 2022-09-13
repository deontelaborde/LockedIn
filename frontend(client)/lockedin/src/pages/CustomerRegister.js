import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterCustomer } from '../services/Authorize';

const Register = () => {
  const initialState = {
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    stateProvince: '',
    country: '',
    postalCode: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterCustomer({
      lastName: formValues.lastName,
      firstName: formValues.firstName,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
      address: formValues.address,
      city: formValues.city,
      stateProvince: formValues.stateProvince,
      country: formValues.country,
      postalCode: formValues.postalCode
    })
    setFormValues(initialState)

    navigate('/login')
  }
  return (
    <div className="register-form-container">
      <form className="register-form form" onSubmit={handleSubmit}>
        <div className="grid">
          <div className="first-name">
            <div className="firstName-label-container">
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              required
            />
          </div>
          <div className="last-name">
            <div className="lastName-label-container">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="email">
            <div className="email-label-container">
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="phoneNumber">
            <div className="phoneNumber-label-container">
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <input
              onChange={handleChange}
              name="phoneNumber"
              type="phoneNumber"
              placeholder="Phone Number"
              value={formValues.phoneNumber}
              required
            />
          </div>

          <div className="username">
            <div className="username-label-container">
              <label htmlFor="username">Username</label>
            </div>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="username"
              value={formValues.username}
              required
            />
          </div>
          <div className="password">
            <div className="password-label-container">
              <label htmlFor="password">Password</label>
            </div>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="confirm-password">
            <div className="confirmPassword-label-container">
              <label htmlFor="confirmPassword">Password Confirmation</label>
            </div>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="address">
            <div className="address-label-container">
              <label htmlFor="address">Address</label>
            </div>
            <input
              onChange={handleChange}
              name="address"
              type="address"
              placeholder="Address"
              value={formValues.address}
              required
            />
          </div>
          <div className="stateProvince">
            <div className="stateprovince-label-container">
              <label htmlFor="stateprovince">State/Province</label>
            </div>
            <input
              onChange={handleChange}
              name="stateProvince"
              type="stateProvince"
              placeholder="State/Province"
              value={formValues.stateProvince}
              required
            />
          </div>
          <div className="country">
            <div className="country-label-container">
              <label htmlFor="country">State/Province</label>
            </div>
            <input
              onChange={handleChange}
              name="country"
              type="country"
              placeholder="Country"
              value={formValues.country}
              required
            />
          </div>
          <div className="postalCode">
            <div className="postalCode-label-container">
              <label htmlFor="postalCode">Postal Code</label>
            </div>
            <input
              onChange={handleChange}
              name="postalCode"
              type="postalCode"
              placeholder="postalCode"
              value={formValues.postalCode}
              required
            />
          </div>

        </div>
        <div className="submit-button-container">
          <button
            className="submit-button button"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
