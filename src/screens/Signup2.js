import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Logo from './assets/logo.png'; 
function Signup2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="assets/logo.png" alt="LOGO" width="45" className="d-inline-block align-text-top" />
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
        <h1>Company Details</h1>
    </div>
      <div className="mainsignup1">
        <div className="mainsignup">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Name of Startup</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Enter the name of your Startup" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Registered name of Startup </label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Enter the registered name of your startup" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Website URL</label>
              <input type="url" className="form-control" id="inputEmail4" placeholder="Enter Website URL" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Sector of Startup</label>
              <input type="text" className="form-control" id="inputPassword4" placeholder="Enter sector" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Stage of Startup</label>
              <input type="text" className="form-control" id="inputEmail4" placeholder="Enter stage" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Month & Year of incorporation </label>
              <input type="date" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Company Type</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Enter Type" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City of Operation </label>
              <input type="text" className="form-control" id="inputCity" placeholder="Enter City" />
            </div>
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02" />
              <label className="input-group-text deck" htmlFor="inputGroupFile02">Please Share your Pitch Deck</label>
            </div>
            <div className="sub_go">
              <div className="col-12">
                <button type="submit" className="bnt">Go Back</button>
              </div>
              <div className="col-12">
                <button type="submit" className="bnt">Submit & Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup2;