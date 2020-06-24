import React, { Component } from "react";
import "../styles.css";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="about-section">
          <div className="inner-width">
            <h1>About us</h1>
            <div className="border"></div>
            <div className="about-section-row">
              <div className="about-section-col">
                <div className="about">
                  <p>
                    We are bridging the gap between the farmers and the society
                    by providing a platform wherein farmers can contact the
                    end-customer directly.
                    <br /> We are committed to work for betterment of farmers
                    and improve their economical condition via 'GreenFarm'.
                    Also, End-constumer will be able to cut down his expenses by
                    buying directly from farmers.
                  </p>
                  <a href="#a">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
