
import { useNavigate } from 'react-router-dom';

const CarForm = ({ user, authenticated, reviewFromState, handleReviewChange, handleReviewSubmit }) => {

  let navigate = useNavigate();

  return (user && authenticated) ? (
    <div className="car-form-container">
      <h3 className='car-form-title'>Add a Car</h3>
      <form className='car-form form' onSubmit={handleReviewSubmit}>
        
        <div className="car-form-row">
      
          <button className="submit-button button">Submit</button>
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