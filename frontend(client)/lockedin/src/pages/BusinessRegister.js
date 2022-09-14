import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterBusiness } from '../services/Authorize'


const BusinessRegister = () => {
  const initialState = {
    name: '',
    phoneNumber: '',
    email: '',
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
    await RegisterBusiness({
      name: formValues.name,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      password: formValues.password,
      address: formValues.address,
      city: formValues.city,
      stateProvince: formValues.stateProvince,
      country: formValues.country,
      postalCode: formValues.postalCode
    })
    setFormValues(initialState)

    navigate('/businesses/login')
  }
  return (
    <div>
    <div className="register-form-container">
      <form className="register-form form" onSubmit={handleSubmit}>
        <div className="grid">
          <div className="name">
            <div className="name-label-container">
              <label htmlFor="name">Business Name</label>
            </div>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
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
    </div>
  )
}

export default BusinessRegister
