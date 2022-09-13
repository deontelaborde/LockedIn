import { Link } from "react-router-dom"
const Welcome = () => {
  return (
    <div className="home-page">
   
      <h4>Need more automotive customers?</h4>
      <h4> Need more automotive experts?</h4>
      <h3>Lock in an appointment with</h3>
      <h2>LockedIn</h2>
      <div className="home-grid">
        <div className="row">
          <div className="column">
            <h2>For Customers</h2>
            <Link to="customers/">
            <button >ENTER</button>
            </Link>
          </div>
          <div className="column">
            <h2> For Businesses</h2>
            <Link to="businesses/">
            <button>ENTER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
