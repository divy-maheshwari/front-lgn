import React from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';


const Navbar = () => {
  
  const data = Cookies.get('token')
  let userInfo;
  if(data) userInfo = JSON.parse(data);

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Home</Link>      
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {userInfo ? <Link className="navbar-brand" to="/profile">{userInfo.name}</Link> :
                <Link className="navbar-brand" to="/profile">Profile</Link>
              }
            </li>
        </ul>
    </div>
  </nav>
  );
}


export default Navbar;