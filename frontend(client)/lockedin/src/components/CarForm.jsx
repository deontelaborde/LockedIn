
import { useNavigate } from 'react-router-dom';

const CarForm = ({ user, authenticated, carFromState, handleCarChange, handleCarSubmit }) => {

  let navigate = useNavigate();

  return (user && authenticated) ? (
    <div className="car-form-container">
      <h3 className='car-form-title'>Add a Car</h3>
      <form className='car-form form' onSubmit={handleCarSubmit}>
      <input id= 'year' value ={carFromState.year} onChange={handleCarChange} name="year" placeholder='Year'/>
           <input id= 'make' value ={carFromState.make} onChange={handleCarChange} name="make" placeholder='Make'/>
           <input id= 'model' value ={carFromState.model} onChange={handleCarChange} name="model" placeholder='Model'/>
           <input id= 'color' value ={carFromState.color} onChange={handleCarChange} name="color" placeholder='Color'/>
        
        <div className="car-form-row">
      
          <button className="submit-button button">Add</button>
        </div>
      </form>
    </div>
  ) : (
    <div className="Protected">
      <h3 className="please-login">Please login to edit list of cars.</h3>
      <button className="login-button button" onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default CarForm;