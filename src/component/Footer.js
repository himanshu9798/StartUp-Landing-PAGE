import React, { Component } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <>
                <hr style={{ color: "gray" }} />
                <div className='footer'>
                    <div style={{ display: "inline" }} className='first'>
                        <p style={{ fontSize: "25px", fontWeight: "1000", paddingTop: "8px" }}>Lando</p>
                        2021@ pndo<br />
                        ALL Rights Reversed.

                    </div>
                    <div style={{ display: "inline" }} className='second'>
                        <p style={{ color: "black" }}><Link to="/home">Home</Link></p>
                        <p><Link to="/price">Price</Link></p>
                        <p><Link to="/about">About</Link></p>
                        <p><Link to="/contact">Contact</Link></p>


                    </div>
                    <div style={{ display: "inline" }} className='third'>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twiteer</p>
                        <p>LinkedIn</p>

                    </div>
                    <div style={{ display: "inline" }} className='fourth'>
                        <p>Privacy Policy</p>
                        <p>Terms Of Services</p>

                        -
                    </div>
                </div>
                <div className='footer_last'>

                </div>

            </>
        )
    }
}

export default Footer