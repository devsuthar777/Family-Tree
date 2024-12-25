import React from 'react'
import '../assets/styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logoTitleDiv'>
            <Link to="/"><img src={require('../assets/images/familyTreeLogo.jpg')}  width={50} height={50} className='logo'></img></Link>
            <span>Family Tree</span>
        </div>

        <div>
            <ul className='linksList'>
                <li><Link to="people">People</Link></li>
                <li><Link to="lineage">Gotras</Link></li>
                <li><Link to="village">Villages</Link></li>
            </ul>
        </div>
        
        <div className='loginDiv'>
            <Link to={"/user/login"}>Sign In</Link>
            <Link to={"/user/register"}>Register</Link>
        </div>

    </div>
  )
}

export default Navbar