import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import Logo from './assets/logo.png'
function Home() {
    const [credentials, setcredentials] = useState({  email: "", password: "" })

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  email: credentials.email, password: credentials.password })
      });
      const json = await response.json()
      console.log(json);
  
      if (!json.success) {
        alert("Enter Valid Credentials")
      }
      else{
        alert("Successfully log in");
      }
    }
    const onChange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

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
                    <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Enter Email" value={credentials.email} 
  onChange={onChange}/>
                    <input type="password" name="password" placeholder="Enter Password" value={credentials.password} 
  onChange={onChange}/>
                    <button className="btnn" type="submit">Login</button>
                    </form>
                    <p className="link">Don't have an account<br />
                        <Link to="/signuppd">Sign up</Link> here
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
