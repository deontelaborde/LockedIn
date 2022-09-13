import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBusiness } from '../services/Authorize';
import { Link } from 'react-router-dom';

const BusinessLogin = (props) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await LoginBusiness(formValues);
    setFormValues({ email: '', password: '' });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="login-form-container">
      <form className="login-form form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="email"
          value={formValues.email}
          required
        ></input>
        <label htmlFor="password"></label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
          value={formValues.password}
          required
        ></input>

        <button
          className="login-button button"
          disabled={!formValues.email || !formValues.password}
        >
          Login
        </button>
      </form>
      <h2>
        Don't have an account?
        <div className="signup-button-container">
          <Link to="/businesses/register" className="link">
            <button className="signup-button button"> Sign Up </button>
          </Link>
        </div>
      </h2>
    </div>
  );
};

export default BusinessLogin;
