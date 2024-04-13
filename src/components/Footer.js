import React from 'react';
import './footer.css';
import Logo1 from './assets/logo.jpg'
import Logo2 from './assets/facebook.svg'
import Logo3 from './assets/insta.svg'
import Logo4 from './assets/linkedin.svg'
import Logo5 from './assets/twitter.svg'
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>
                    <img className="flogo" src={Logo1} alt="logo" />
                    <br />
                    Venture Catalyst
                </h3>
                <div className="socials">
                    <ul className="socials">
                        <li><a href="https://www.google.com"><i className="facebook"> <img className="scon" src={Logo2} alt="facebook" /></i></a></li>
                        <li><a href="https://www.google.com"><i className="twitter"> <img className="scon" src={Logo5} alt="twitter" /></i></a></li>
                        <li><a href="https://www.google.com"><i className="insta"> <img className="scon" src={Logo3} alt="instagram" /></i></a></li>
                        <li><a href="https://www.google.com"><i className="linkedin"> <img className="scon" src={Logo4} alt="linkedin" /></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Venture Catalyst | Privacy Policy | Terms & Conditions</p>
            </div>
        </footer>
    );
}

export default Footer
