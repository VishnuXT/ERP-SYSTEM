import React, { useState } from "react";
import "./Style.css";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  function onChange(e) {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(form);
  }
  return (
    <div class="container">
      <div class="row g-3">
        <div class="col col-12col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div class="row g-3">
            <div class="col col-0 col-sm-0 col-md-0 col-lg-3 col-xl-4 col-xxl-4"></div>

            <div class="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 login-page">
              <div className="login-header">
                <div className="login-1stheader">Log in to your account</div>
                <div className="login-2ndheader">
                  Welcome back! Please enter your details.
                </div>
              </div>
              <div>
                <div className="login-content">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={onChange}
                      name="email"
                    />
                  </div>
                  <div>
                    <label for="inputPassword5" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="inputPassword5"
                      class="form-control"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Password"
                      value={form.password}
                      onChange={onChange}
                      name="password"
                    ></input>
                  </div>
                  <div className="login-choice">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        Remember me
                      </label>
                    </div>
                    <p>
                      <a class="link-opacity-100" href="#">
                        Forgot password
                      </a>
                    </p>
                  </div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col col-0 col-sm-0 col-md-0 col-lg-3 col-xl-4 col-xxl-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
