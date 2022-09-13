import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="home-page">
   
      <h4>Need more automotive customers?</h4>
      <h4> Need more automotive experts?</h4>
      <h3>Lock in an appointment with</h3>
      <h2>LockedIn</h2>
      <div className="home-grid">
        <div class="row">
          <div class="column">
            <h2>For Customers</h2>
            <Link to="customers/register">
            <button >ENTER</button>
            </Link>
          </div>
          <div class="column">
            <h2> For Businesses</h2>
            <button>ENTER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
