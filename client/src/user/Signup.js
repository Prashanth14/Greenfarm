import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth";
import "../styles.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    error: "",
    success: false,
  });

  const { name, email, password, role, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, role }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          role: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <div id="register">
      <h3 class="text-center text-white pt-5">Register form</h3>
      <div class="container">
        <div
          id="register-row"
          class="row justify-content-center align-items-center"
        >
          <div id="register-column" class="col-md-6">
            <div id="register-box" class="col-md-12">
              <form id="register-form" class="form" action="" method="post">
                <h3 class="text-center text-info">Register</h3>
                <div class="form-group">
                  <label for="name" class="text-info">
                    Name:
                  </label>
                  <br></br>
                  <input
                    onChange={handleChange("name")}
                    type="name"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="text-info">
                    Email:
                  </label>
                  <br></br>
                  <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    placeholder="Enter Valid Email"
                    value={email}
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">
                    Password:
                  </label>
                  <br></br>
                  <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    placeholder="Enter Valid Password"
                    value={password}
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="text-info">
                    Pick Type:
                  </label>
                  <br></br>
                  <select
                    className="form-control"
                    onChange={handleChange("role")}
                    type="role"
                    value={role}
                  >
                    <option value="" disabled className="text-hide">
                      Please select
                    </option>
                    <option value="0">User</option>
                    <option value="1">Admin</option>
                  </select>
                </div>
                <br />
                <button onClick={clickSubmit} className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <Layout
      title="Signup"
      description="Signup to GreenFarm App"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
