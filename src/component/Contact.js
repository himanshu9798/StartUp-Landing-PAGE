import React, { Component } from 'react'
import logo5 from './images/logo4.png'
import './contact.css'


export class Contact extends Component {
  render() {
    return (
    <>
  

    <div style={{display:'flex',marginTop:"50px"}}>
        <div className='cont_1'>
            <img style={{width:"600px",margin:"0"}} src={logo5}/>

        </div>
        <div style={{marginLeft:"200px"}}>
            <h1>Contact Us</h1>
            <h4>Explore The Feature With us.<br/>Feel Free to get Touch In.</h4>
            <form>
                <label>Name:</label><br/>

                <input type="text" placeholder='Full Name' readOnly/>
                <br/><br/>
                <label>E-Mail</label>
                <br/>
                <input type="text" placeholder='E-Mail Address' readOnly/>
                <br/><br/>
                <label>Messege</label><br/>
                <input type="text" placeholder='How Can We Get Better?' readOnly/>




            </form>
            <br/>
            <br/>
          <button style={{width:"100%",height:"35px",color:"white" ,backgroundColor:"blue",borderRadius:"5px"}}>Send Message</button>

        </div>
    </div>


    </>
    )
  }
}

export default Contact;