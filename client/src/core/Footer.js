import React, { Component } from "react";

import "../styles.css";

import Logo from "../images/logo1.png";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  We are bridging the gap between the farmers and the society by
                  providing a platform wherein farmers can contact the
                  end-customer directly and vice-versa. We are committed to work
                  for betterment of farmers and improve their economical
                  condition via 'Farmer Friend'. Also, End-constumer will be
                  able to cut down his expenses by buying directly from farmers.
                </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <img src={Logo} alt="nv" className="footer-logo" />
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/shop">Products</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/signin">Log In</a>
                  </li>
                  <li>
                    <a href="/signup">Register</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2020 All Rights Reserved by Pegasus-2020.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
