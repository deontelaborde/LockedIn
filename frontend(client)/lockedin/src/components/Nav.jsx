import {NavLink} from 'react-router-dom'

export const Nav = ({ authenticated, user, handleLogOut }) => {

  let userOptions;
  if (user) {
    userOptions = (
      <div>
        <NavLink onClick={handleLogOut} to="/" className='nav-link logout'>Log Out</NavLink>
      </div>
    );
  }

  const publicOptions = (
    <div>
      <NavLink to="/login" className='nav-link login'>Login</NavLink>
    </div>
  );

  return (
    <nav>
      <NavLink to="/" className="nav-logo-link" >
        <div className="logo-wrapper" alt="logo">
          <h1 className='nav-title'>LockedIn</h1>
        </div>
      </NavLink>
      <h1 className="name-display">Welcome{ user&& ` ${user.email}`}!</h1>
      <div className="nav-right-links">
        <NavLink to="/" className='nav-link home'>Home</NavLink>
        {authenticated && user ? userOptions : publicOptions}
      </div>
    </nav>
  );

};

