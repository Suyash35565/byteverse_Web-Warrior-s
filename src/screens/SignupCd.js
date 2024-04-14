import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Logo from './assets/logo.png'; 
function SignupCd() {
  const [credentials, setcredentials] = useState({
    email:"",
    namestartup: "",
    regstartup: "",
    websiteurl: "",
    sector_of_startup:"",
    stage_of_startup: "",
    incorporation: "",
    company_type: "",
    city_of_operation: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/updateuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:credentials.email,
        namestartup: credentials.namestartup,
        regstartup: credentials.regstartup,
        websiteurl: credentials.websiteurl,
        sector_of_startup:credentials.sector_of_startup,
        stage_of_startup: credentials.stage_of_startup,
        incorporation: credentials.incorporation,
        company_type: credentials.company_type,
        city_of_operation: credentials.city_of_operation
      })
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    else {
      alert("User Registered");
    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }




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
      <div className="mainsignup1">
        <div className="mainsignup">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Name of Startup</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Enter the name of your Startup" name="namestartup" value={credentials.namestartup} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Registered name of Startup </label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Enter the registered name of your startup" name="regstartup" value={credentials.regstartup} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Website URL</label>
              <input type="url" className="form-control" id="inputEmail4" placeholder="Enter Website URL" name="websiteurl" value={credentials.websiteurl} onChange={onChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Sector of Startup</label>
              <input type="text" className="form-control" id="inputPassword4" placeholder="Enter sector" name="sector_of_startup" value={credentials.sector_of_startup} onChange={onChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Stage of Startup</label>
              <input type="text" className="form-control" id="inputEmail4" placeholder="Enter stage" name="stage_of_startup" value={credentials.stage_of_startup} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Month & Year of incorporation </label>
              <input type="date" className="form-control" id="inputPassword4" name="incorporation" value={credentials.incorporation} onChange={onChange} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Company Type</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Enter Type" name="company_type" value={credentials.company_type} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City of Operation </label>
              <input type="text" className="form-control" id="inputCity" placeholder="Enter City" name="city_of_operation" value={credentials.city_of_operation} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Enter E-Mail" name="email" value={credentials.email} onChange={onChange} />
            </div>
            {/* <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City of Operation </label>
              <input type="text" className="form-control" id="inputCity" placeholder="Enter City" name="city_of_operation" value={credentials.city_of_operation} onChange={onChange} />
            </div> */}
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02" />
              <label className="input-group-text deck" htmlFor="inputGroupFile02">Please Share your Pitch Deck</label>
            </div>
            <div className="col-12">
              <button type="submit" className="bnt">Submit & Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupCd;