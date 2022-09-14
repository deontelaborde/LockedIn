import { Link } from 'react-router-dom'
const Welcome = (props) => {
  return (
    <div className="home-page">
      <h3>Lock in appointments and customers with</h3>
      <h2>LockedIn</h2>
      <div className="home-grid">
        <div className="row">
          <div className="column">
            <h2> Upcoming Appointments</h2>
            <Link to="/appopintments">
              <button>ENTER</button>
            </Link>
          </div>
          <div className="column">
            <h2> View Customers</h2>

            <Link to="/customers">
              <button>ENTER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
