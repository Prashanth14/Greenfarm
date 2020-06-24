import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import "../styles.css";

import Logo from "../images/logo1.png";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#000" };
  }
};

const Menu = ({ history }) => (
  <div className="navbar1">
    <div className="container1">
      <div className="logo_div">
        <Link style={isActive(history, "/")} to="/">
          <img className="logo1" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar_links">
        <ul className="menu1">
          <li>
            <Link className="link1" style={isActive(history, "/")} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              className="link1"
              style={isActive(history, "/shop")}
              to="/shop"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              className="link1"
              style={isActive(history, "/cart")}
              to="/cart"
            >
              Cart{" "}
              <sup>
                <small className="cart-badge">{itemTotal()}</small>
              </sup>
            </Link>
          </li>

          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li>
              <Link
                className="link1"
                style={isActive(history, "/user/dashboard")}
                to="/user/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <li>
              <Link
                className="link1"
                style={isActive(history, "/admin/dashboard")}
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {!isAuthenticated() && (
            <Fragment>
              <li>
                <Link
                  className="link1"
                  style={isActive(history, "/signin")}
                  to="/signin"
                >
                  Signin
                </Link>
              </li>

              <li>
                <Link
                  className="link1"
                  style={isActive(history, "/signup")}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <li>
              <span
                className="link1"
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Signout
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  </div>
);

export default withRouter(Menu);
