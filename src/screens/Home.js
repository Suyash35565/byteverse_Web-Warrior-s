import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

function Home() {
    return (
        <div className="main">
            {/* Navbar */}
            <div className="navbar">
                <div className="icon">
                    <h2 className="logo">Venture Catalyst</h2>
                </div>
                {/* Navbar Links */}
                <div className="menu">
                    <ul>
                        <li><Link to="/products">PRODUCTS</Link></li>
                        <li><Link to="/investors">INVESTORS</Link></li>
                        <li><Link to="/founders">FOUNDERS</Link></li>
                        <li><Link to="/resources">RESOURCES</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
            {/* Content */}
            <div className="content">
                <h1>Connecting Investors with Visionary <br /><span>Pitchers: Empowering Ideas, </span> <br /> Igniting Success</h1>
                <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
                    expedita atque eveniet <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
                    <br /> a quae totam ipsa illum minus laudantium?
                </p>
                {/* Join Us Button */}
                <button className="cn"><Link to="/join">JOIN US</Link></button>
                {/* Login Form */}
                <div className="form">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Email" />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <button className="btnn"><Link to="/login">Login</Link></button>
                    <p className="link">Don't have an account<br />
                        <Link to="/signup">Sign up</Link> here
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
