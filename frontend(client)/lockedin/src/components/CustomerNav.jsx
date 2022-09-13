import {Link} from 'react-router-dom'

const CustomerNav = () => {
return (
  <header>
    <nav>
      <h1>LockedIn</h1>
      <Link to="/customers" className='link'><button className='nav-button'> Home </button></Link>
      <Link to="/customers/login" className='link'><button className='nav-button'> Login </button></Link>
      <Link to="/customers/register" className='link'><button className='nav-button'> Sign Up </button></Link>
    </nav>
  </header>
)


}

export default CustomerNav

