import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Login Page</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Enter Your Password"
                        />
                        <label className="form-label" for="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          onClick={navigateToRegister}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a Academy</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        onClick={navigateToRegister}
      </Routes>
    </section>
  );
};

export default Login;
