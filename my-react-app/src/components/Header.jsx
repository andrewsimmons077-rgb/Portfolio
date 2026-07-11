import React from 'react';
import './header.css';

function Header() {
    return(
        <div className='header'>
            <img alt='Profile image' src='/logo.png' />
            <span>
                <h1>Andrew Simmons</h1>
                <p>Aspiring Web Developer</p>
            </span>
        </div>
    )
}

export default Header;