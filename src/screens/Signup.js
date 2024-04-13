import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="" alt="LOGO" width="45" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#">PRODUCTS</a>
              <a className="nav-link" href="#">INVESTORS</a>
              <a className="nav-link" href="#">FOUNDERS</a>
              <a className="nav-link" href="#">RESOURCES</a>
              <a className="nav-link" href="#">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="heading">
        <h1>Personal Details</h1>
    </div>
      <div className="mainsignup1">
        <div className="mainsignup">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">First Name</label>
              <input type="text" className="form-control" id="inputEmail4" placeholder="Enter First Name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Last Name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Enter E-Mail" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Enter Password" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Mobile No.</label>
              <input type="tel" className="form-control" id="inputEmail4" placeholder="Enter Phone" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Linkedin Profile URL</label>
              <input type="url" className="form-control" id="inputPassword4" placeholder="Enter Linkedin URL" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" placeholder="Enter City" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option>Madhya Pradesh</option>
                <option selected>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Bihar</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" placeholder="Enter Zip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="bnt">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;