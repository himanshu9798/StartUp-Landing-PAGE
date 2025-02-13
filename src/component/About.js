import React, { Component } from 'react'
import loabout from './images/about.png'
import './about.css'
import firs from './images/first.png'
import Card from './Card'
import team from './images/team.jpg'
import logo3 from './images/logo3.png'
import user2 from './images/team2.jpg'
import user3 from './images/team3.jpg'
import user4 from './images/team4.jpg'
import user5 from './images/team5.jpg'
import Header from './Header'
import Footer from './Footer'


export class About extends Component {
  render() {
    return (
    <>
    <div className='abt'>
        <h1 style={{textAlign:"center"}}>About us </h1>
        <h4 style={{textAlign:"center",color:"gray"}}>We offer revolutionary solution to industry<br/> problems. Join Lando community and experience<br/> the benefits of company optimization today!</h4>
 
   
     <img src={loabout}/>

     <h1 style={{textAlign:"center"}}>Our Mission </h1>
     <h4 style={{textAlign:"center",color:"gray"}}>At Lando, we are committed to providing excellent services to our customers<br/> and clients and to help them achieve the best outcomes. We believe that we can<br/> make a positive impact on our community, industry and the world. Our Lando<br/> team is dedicated to providing the best possible service and support, and we<br/> are always looking for ways to improve and innovate

     </h4>
     <hr style={{align:"center",color:"gray",width:"50%", marginLeft:"340px",backgroundColor:"gray"}}/>

    </div>
    <br/><br/>
    <div style={{display:"flex", margin:"50px",justifyContent:"space-between"}}>
        <div style={{marginLeft:"180px",marginTop:"100px"}}>
         <h1>
            Let's Start<br/>Working<br/>More<br/>Effiecently<br/>Today!
         </h1>
        </div>
        <div style={{marginLeft:"-40px"}}>
        <img  style={{width:"500px",marginTop:"-20px"}} src={firs}/>
        </div>
    </div>
    <h1 style={{textAlign:"center"}}>Team </h1>
    <h4 style={{textAlign:"center"}}>Meet The People Behind Us Our Magical</h4>
    <div style={{display:"flex", margin:"80px", justifyContent:"space-between" }}>
        <Card photo={team} name="Hannah Mika" work="CEO"></Card>
        <Card  photo={user2} name="Deial Peter" work="CTO"></Card>
        <Card photo={user3} name="lars Mikkel" work="Head Of Product"></Card>
        <Card  photo={user4}name="Denis Forner" work="Head of operations"></Card>
        
    </div>
    <div style={{display:"flex", margin:"80px",justifyContent:"space-between"}}>
        <Card  photo={user4}name="Edward Finch" work="Head Of Development"></Card>
        <Card photo={user3} name="Mathew Low" work="Tech Support"></Card>
        <Card photo={user2} name="lucas Bell" work="Key Account Manager"></Card>
        <Card  photo={user5}name="Michasela Hands" work="Platform Development"></Card>
        
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




    
    </>
    )
  }
}

export default About