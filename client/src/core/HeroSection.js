import React, { Component } from "react";
import "../styles.css";

import BG1 from "../images/bgnew1edit.gif";
import BG2 from "../images/bgnew2edit.gif";
import BG3 from "../images/bgnew3edit.gif";

export class HeroSection extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <h1>
            Green <span className="tagName">Field</span>, Green{" "}
            <span className="tagName">Environment</span>
          </h1>
          <p>
            <b>
              India is a land of 120 million farmers.
              <br /> Farmers work hard year long but their income wiped out due
              to factors beyond their control.
              <br />
              We are giving farmers dependable incomes.
            </b>
          </p>
        </div>
      </header>
    );
  }
}

export default HeroSection;
