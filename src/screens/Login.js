import React from 'react';

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

