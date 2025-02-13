import React, { Component } from 'react'

import question from './images/question.png'
import logo3 from './images/logo3.png'

export class Pricing extends Component {
  render() {
    return (
      <>
       
        <div>
          <h1 style={{ textAlign: "center" }}>Pricing</h1>
          <p style={{ textAlign: "center", color: "gray" }}>
            Our pricing is not expensive, but it's not<br /> cheap either, it's exactly what it should be
          </p>
          {/* card section start here */}
          <div style={{ display: "flex", margin: "5%", justifyContent: "space-around" }}>
            {/* card 1 start here */}
            <div style={{ borderRadius: "10px", margin: "50px", padding: "30px", boxShadow: "5px 5px 5px gray", backgroundColor: "white", width: "200px" }}>
              <p style={{ position: "relative", top: "-35px", left: "-15px", fontSize: "20px", fontWeight: "1000" }}>Basic</p>
              <span style={{ position: "relative", top: "-22px", fontSize: "25px", fontWeight: '700' }}>$</span><span style={{ fontSize: "35px", fontWeight: "1000" }}>9</span>/Month
              <p>For individuals and<br /> small teams </p>
              <button style={{cursor:"pointer", width: "100%", height: "30px", borderRadius: "110px", fontSize: "15px", fontWeight: "500" }} >Get Started with Basic</button>
            </div>
            {/* card 1 end here */}
            {/* card 2  */}
            <div style={{ borderRadius: "10px", margin: "50px", padding: "30px", boxShadow: "5px 5px 5px gray", backgroundColor: "white", width: "200px" }}>
              <p style={{ position: "relative", top: "-35px", left: "-15px", fontSize: "20px", fontWeight: "1000" }}>Pro</p>
              <span style={{ position: "relative", top: "-22px", fontSize: "25px", fontWeight: '700' }}>$</span><span style={{ fontSize: "35px", fontWeight: "1000" }}>19</span>/Month
              <p>For startups and<br /> growing businesses </p>
              <button style={{ cursor:"pointer",width: "100%", height: "30px", borderRadius: "10px", fontSize: "15px", fontWeight: "500", backgroundColor: "blue", color: "white" }}>Get Started with Pro </button>

            </div>
            {/* end card 2 */}
            {/* card 3 */}
            <div style={{ borderRadius: "10px", margin: "50px", padding: "30px", boxShadow: "5px 5px 5px gray", backgroundColor: "white", width: "200px" }}>
              <p style={{ position: "relative", top: "-35px", left: "-15px", fontSize: "20px", fontWeight: "1000" }}>Business</p>
              <span style={{ position: "relative", top: "-22px", fontSize: "25px", fontWeight: '700' }}>$</span><span style={{ fontSize: "35px", fontWeight: "1000" }}>99</span>/Year
              <p>For organizations with<br /> advanced needs </p>
              <button style={{cursor:"pointer",width: "100%", height: "30px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Get Started with Business </button>
            </div>
            {/* end card 3 */}

          </div>

          <h1 style={{ marginLeft: "80px" }}>Compare Features</h1>
          <div style={{ display: "flex", justifyContent: 'space-between', margin: "150px" ,position:"relative",top:"-100px" ,width:"80%" }}>
            <h1>Basic</h1>
            <h1>Pro</h1>
            <h1>Business</h1>
          </div>
          <hr style={{ height: "1px", backgroundColor: "gray" ,position:"relative",top:"-240px" ,width:"80%"}} />
          <div style={{ display: "flex", justifyContent: 'space-between', margin: "150px" }}>
            <div style={{position:"relative",top:"-400px",cursor:"pointer"}}>
              <p>➡️ Process Analysis</p>
              <p>➡️Task Management</p>
              <p>➡️Time Tracking</p>
              <p>➡️Performance Metrics</p>
              <p>➡️Customizable Reports</p>
              <p>➡️Email Integration</p>

            </div>
            <div style={{position:"relative",top:"-400px",cursor:"Pointer"}}>
              <p>➡️Process Analysis</p>
              <p>➡️Task Management</p>
              <p>➡️Time Tracking</p>
              <p>➡️Performance Metrics</p>
              <p>➡️Customizable Reports</p>
              <p>➡️Email Integration</p>
              <p>➡️Real-time Collaboration</p>
              <p>➡️Automated Workflows</p>
            </div>
            <div style={{position:"relative",top:"-400px",cursor:"pointer"}}>
              <p>➡️Process Analysis</p>
              <p>➡️Task Management</p>
              <p>➡️Time Tracking</p>
              <p>➡️Performance Metrics</p>
              <p>➡️Customizable Reports</p>
              <p>➡️Email Integration</p>
              <p>➡️Real-time Collaboration</p>
              <p>➡️Automated Workflows</p>
              <p>➡️Analytics Dashboard</p>
              <p>➡️SLA Management</p>

            </div>
          </div>
          <div style={{marginLeft:"250px", position:"relative",top:"-380px"}}>
          <img style={{width:"400px"}} src={question} />
          <h1 style={{marginLeft:"300px"}}>Frequently Asked<br/>Questions</h1>
          <h3 style={{marginLeft:"280px",}}>How Does this Work? <span style={{marginLeft:"200px",cursor:"pointer"}}>⬇</span></h3>
          <hr style={{width:"40%",height:"1px",marginRight:"380px",backgroundColor:"gray"}}/>
          <h3 style={{marginLeft:"280px",}}>What Are The Benefits? <span style={{marginLeft:"185px",cursor:"pointer"}}>⬇</span></h3>
          <hr style={{width:"40%",height:"1px",marginRight:"380px",backgroundColor:"gray"}}/>
          <h3 style={{marginLeft:"280px",}}>Is it Difficult to Use? <span style={{marginLeft:"215px",cursor:"pointer"}}>⬇</span></h3>
          <hr style={{width:"40%",height:"1px",marginRight:"380px",backgroundColor:"gray"}}/>
          <h3 style={{marginLeft:"280px",}}>Can i have a custom Pricing?<span style={{marginLeft:"150px",cursor:"pointer"}}>⬇</span></h3>
          <hr style={{width:"40%",height:"1px",marginRight:"380px",backgroundColor:"gray"}}/>
          <h3 style={{marginLeft:"280px",}}>Is There trial version Availabe? <span style={{marginLeft:"125px",cursor:"pointer"}}>⬇</span></h3>
          <hr style={{width:"40%",height:"1px",marginRight:"380px",backgroundColor:"gray"}}/>
          <h3 style={{marginLeft:"280px",}}>Where Do I Sign Up? <span style={{marginLeft:"210px",cursor:"pointer"}}>⬇</span></h3>
          <hr style={{width:"40%",height:"1px",marginRight:"380px",backgroundColor:"gray"}}/>
        </div>

        <div className='middle_content' style={{ margin: '150px', borderRadius: '10px', backgroundColor: 'white', padding: '20px', display: 'flex', height: '300px', boxShadow: '0 0 6px 3px rgba(27, 26, 26, 0.3)' }}>
                <div style={{ padding: '20px' }}>
                  <h1>Get started with <br />Lando today</h1>
                  <p>Start optimizing your processes today</p>
                  <button style={{ padding: "10px", color: "white", borderRadius: "10px", backgroundColor: "#3763e4" }}>Try For Free</button>
                </div>
                <div style={{ position: 'relative', top: '-50px' }}>
                  <img className='logo_two' src={logo3} style={{ width: '500px' }} />
                </div>
              </div>

        </div>
    
      </>
    )
  }
}

export default Pricing