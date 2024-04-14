import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './dash.css'; // Make sure to import your CSS file

function Dashboard() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="#" className="logo">
              <img src="assets/logo.png" alt="" />
              <span className="nav-item">DashBoard</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="#">
              <i className="fas fa-home"></i>
              <span className="nav-item">Home</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="">
              <i className="fas fa-user"></i>
              <span className="nav-item">Profile</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Analytics</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="">
              <i className="fas fa-tasks"></i>
              <span className="nav-item">Tasks</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Settings</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="">
              <i className="fas fa-question-circle"></i>
              <span className="nav-item">Help</span>
            </Link>
          </li>
          <li>
            {/* Convert anchor tag to Link */}
            <Link to="" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main section */}
      <section className="main">
        <div className="main-top">
          <h1>Details</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="main-skills">
          <div className="card">
            <i className="fas fa-laptop-code"></i>
            <h3>Client</h3>
            <p>Join Over 1 million </p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <i className="fas fa-chart-bar"></i>
            <h3>Stock Price</h3>
            <p>300$</p>
            <button>Get Started</button>
          </div>

          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Profit</h3>
            <p>2B $</p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <i className="fas fa-exchange-alt"></i>
            <h3>Turn Over</h3>
            <p>1M $</p>
            <button>Get Started</button>
          </div>
        </div>

        {/* Second section */} 


        <section className="main-course">
          <h1>Products</h1>
          <div className="course-box">
            <ul>
              <li className="active">In progress</li>
              <li>Financial Projections</li>
              <li>Intellectual Property</li>
              <li>Customer Testimonials</li>
            </ul>
            <div className="course">
              <div className="box">
                <h3>B2C</h3>
                <p>80% - progress</p>
                <button>continue</button>
                <i className="fas fa-store b2c"></i>
              </div>
              <div className="box">
                <h3>C2C</h3>
                <p>50% - progress</p>
                <button>continue</button>
                <i className="fas fa-handshake c2c"></i>
              </div>
              <div className="box">
                <h3>Prototype</h3>
                <p>30% - progress</p>
                <button>continue</button>
                <i className="fas fa-boxes direct"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
