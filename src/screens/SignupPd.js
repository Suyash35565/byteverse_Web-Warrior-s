import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import { Link } from 'react-router-dom';


function SignupPd() {
  const [credentials, setcredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
    linkedin: "",
    address: "",
    city: "",
    state: "",
    zip: "",
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
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        password: credentials.password,
        mobile: credentials.mobile,
        linkedin: credentials.linkedin,
        address: credentials.address,
        city: credentials.city,
        state: credentials.state,
        zip: credentials.zip,
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
      <div className="mainsignup1">
        <div className="mainsignup">
          <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">First Name</label>
              <input type="text" className="form-control" id="inputEmail4" placeholder="Enter First Name" name="firstname" value={credentials.firstname} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Last Name" name="lastname" value={credentials.lastname} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Enter E-Mail" name="email" value={credentials.email} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Enter Password" name="password" value={credentials.password} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Mobile No.</label>
              <input type="tel" className="form-control" id="inputEmail4" placeholder="Enter Phone" name="password" value={credentials.password} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Linkedin Profile URL</label>
              <input type="url" className="form-control" id="inputPassword4" placeholder="Enter Linkedin URL" name="linkedin" value={credentials.linkedin} onChange={onChange} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" name="address" value={credentials.address} onChange={onChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" placeholder="Enter City" name="city" value={credentials.city} onChange={onChange} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" name="state" value={credentials.state} onChange={onChange}>
                <option>Madhya Pradesh</option>
                <option selected>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Bihar</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" placeholder="Enter Zip" name="zip" value={credentials.zip} onChange={onChange} />
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
          <Link to="/signupcd">NEXT</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPd;