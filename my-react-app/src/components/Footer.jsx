import React from 'react';
import './footer.css';
import { Outlet, Link } from "react-router-dom";

function Footer() {

    const year = new Date().getFullYear();

    return(
        <div className='footer'>
            <p>© copyright {year}</p>
            <p>
                <nav>
                    <Link className='homeLink' to='/'>Home</Link> 
                    <Link className='contactLink' to="/contact">Contact Me</Link>
                </nav>
            </p>
        </div>
    );
}

export default Footer;