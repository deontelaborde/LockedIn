import {Link} from 'react-router-dom'

export const CustomerNav = () => {
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

export const BusinessNav = () => {
  return (

    <header>
    <nav>
      <h1>LockedIn</h1>
      <Link to="/businesses" className='link'><button className='nav-button'> Home </button></Link>
      <Link to="/businesses/login" className='link'><button className='nav-button'> Login </button></Link>
      <Link to="/businesses/register" className='link'><button className='nav-button'> Sign Up </button></Link>
    </nav>
  </header>
    )
}



