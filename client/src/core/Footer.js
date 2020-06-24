import React, { Component } from "react";

import "../styles.css";

import Logo from '../images/logo1.png'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien sit amet justo cursus vulputate. Suspendisse imperdiet aliquam urna quis rhoncus. Donec semper placerat efficitur. Sed non fermentum lorem. Vivamus accumsan lectus ac ex rhoncus, sit amet rhoncus dolor dapibus. Nam iaculis neque nunc, non elementum enim maximus non.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <img src={Logo} alt="nv" className="footer-logo" />
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#1">Home</a></li>
              <li><a href="#1">Products</a></li>
              <li><a href="#1">About Us</a></li>
              <li><a href="#1">Log In</a></li>
              <li><a href="#1">Register</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Pegasus-2020.
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
