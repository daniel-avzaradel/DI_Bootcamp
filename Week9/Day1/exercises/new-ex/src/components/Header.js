import React from 'react';

const Header = ({navigate}) => {
    return(
        <>
            <div onClick={() => navigate('home')}>Home</div>
            <div onClick={() => navigate('about')}>About</div>
            <div onClick={() => navigate('contact')}>Contact</div>
        </>
    )
}

export default Header;