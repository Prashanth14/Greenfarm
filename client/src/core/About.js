import React, { Component } from 'react'
import '../styles.css'

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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien sit amet justo cursus vulputate. Suspendisse imperdiet aliquam urna quis rhoncus. Donec semper placerat efficitur. Sed non fermentum lorem. Vivamus accumsan lectus ac ex rhoncus, sit amet rhoncus dolor dapibus. Nam iaculis neque nunc, non elementum enim maximus non. Vestibulum rhoncus tincidunt enim sed maximus. Praesent euismod dolor eget nisi elementum, quis consequat mauris sagittis. Donec ligula augue, facilisis ut diam vitae, auctor cursus mauris. Maecenas pretium nec enim eget viverra. Etiam posuere pharetra auctor.
                                    </p>
                                    <a href="#a">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
