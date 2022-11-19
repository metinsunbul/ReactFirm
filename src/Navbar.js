
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Su Bilgi</h1>
            <div className="links">
                {/* <a href="/">Ana Sayfa</a>
                <a href="/create">New firm</a> */}
                
                {/* allow react to handle the routing only in the browser and to intercept those request for new pages
                we need to replace the above anchor with link instead */}

                <Link to="/">Ana Sayfa</Link>
                <Link to="/create">New firm</Link> 

            </div>
        </nav>
    );
}
 
export default Navbar;