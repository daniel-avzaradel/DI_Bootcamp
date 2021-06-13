import React from 'react';

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <h1>My Blog</h1>
            <Navlink exact to='/' activeClassName="selected">Home</Navlink>
            <Navlink to='/about'>About</Navlink>
            <Navlink to='/contact'>Contact</Navlink>
        </nav>
    )
}

export default Navbar;