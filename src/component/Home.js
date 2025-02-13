import React from 'react'
import image from "./images/first.png"

import logo from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'


function Home() {
  return (
    <>
    
      <div id="container"style={{ display: 'flex', margin: '100px', justifyContent: 'space-between' }}>
        <div style={{ padding: '20px' }}>
          <h4 style={{ color: 'gray', textTransform: 'uppercase' }}>-FREE 30 DAYS TRAil</h4>
          <h1 style={{ fontSize: '45px' }}>
            The Best Way<br />
            To Showcase<br />
            your Project
          </h1>
          <h4>Here you can put a short description about your project</h4>
          <button style={{ padding: "10px", color: "white", borderRadius: "10px", backgroundColor: "#3763e4" }}>Try For Free</button>
          <button style={{ padding: "10px", color: "white", borderRadius: "10px", backgroundColor: "#3763e4", margin: "10px" }}>See How It Works</button>
        </div>
        <div style={{ alignItems: 'center' }}>
          <img src={image} style={{ height: '450px', width: '100%', paddingTop: '0', marginLeft:"30px"}} />
        </div>
      </div>

      {/* //part 1 end */}

      {/* logo section start */}
      <div style={{ textAlign: "center", color: "black", textShadow: "1px 1px gray" }}>
        Trusted by Individual and team At the World's<br />
        Best Companies
      </div>
      <div style={{ display: "flex", alignItems: "center", marginLeft: "580px" }}>
        <img className='logo' style={{ borderRadius: "50%", border: "1px solid black", height: "5%", width: "5%", margin: "2px" }} src={logo} />
        <img className='logo' style={{ borderRadius: "50%", border: "1px solid black", height: "5%", width: "5%", margin: "2px" }} src={logo} />
        <img className='logo' style={{ borderRadius: "50%", border: "1px solid black", height: "5%", width: "5%", margin: "2px" }} src={logo} />
        <img className='logo' style={{ borderRadius: "50%", border: "1px solid black", height: "5%", width: "5%", margin: "2px" }} src={logo} />
        <img className='logo' style={{ borderRadius: "50%", border: "1px solid black", height: "5%", width: "5%", margin: "2px" }} src={logo} />
      </div>
      {/* logo section end */}

      {/* part 2 start */}
      <div style={{ margin: '150px', borderRadius: '10px', backgroundColor: 'white', padding: '20px', display: 'flex', height: '300px', boxShadow: '0 0 6px 3px rgba(27, 26, 26, 0.3)' }}>
        <div style={{ padding: '20px' }}>
          <h1>Introducing Good<br/> Solution</h1>
          <p style={{color:"gray"}}>Join our Community And experience The Benefits Today!</p>
          <button style={{ padding: "10px", color: "white", borderRadius: "10px", backgroundColor: "#3763e4" }}>Try For Free</button>
        </div>
        <div style={{  marginLeft: '-60px' }}>
          <img className='logo_two' src={logo2} style={{ position: 'relative', top: '-120px', width:"500px" }} />
        </div>
      </div>
      {/* part 2 end */}

      {/* part 3 start */}

      <div style={{ display: 'flex', margin: '100px',  padding: '20px', justifyContent:"space-between" }}>
        
        <div>
          <img src={logo3} style={{ height: '450px', width: '100%', marginLeft:"0px" }} />
        </div>
        <div style={{ padding: '20px' }}>
          <h4 style={{ color: 'gray', textTransform: 'uppercase' }}>smartsave</h4>
          <h1 style={{ fontSize: '45px' }}>
            All your work is safe<br /> with us
          </h1>
          <h4 style={{color:"gray"}}>We take your data security seriously, which is<br /> why we use advanced encryption protocols<br /> to protect your files in the cloud. Your data is<br /> safe and secure with us.</h4>
          <button style={{ padding: "10px", color: "black", borderRadius: "10px" }}>Try For Free</button>
        </div>
      </div>
      {/* part 3 end */}

      {/* part 4 start */}

      <div style={{ display: 'flex', margin: '100px', padding: '20px', justifyContent:"space-between"}}>
        <div style={{ padding: '20px' }}>
          <h4 style={{ color: 'gray', textTransform: 'uppercase' }}>COSTSAVER</h4>
          <h1 style={{ fontSize: '45px' }}>
            Cost saving in a <br />smart way
          </h1>
          <h4 style={{color:"gray"}}> Powerful tool that helps you reduce costs and save money<br /> on your business operations. With advanced analytics and<br /> optimization algorithms, Costsaver analyzes your existing<br /> workflows and identifies areas for improvement</h4>
          <button style={{ padding: "10px", color: "black", borderRadius: "10px" }}>Try For Free</button>
        </div>
        <div>
          <img src={logo4}  style={{ height: '450px', width: '100%', paddingTop: '0', marginLeft:"30px"}} />
        </div>
      </div>
      {/* part 4 end */}

      {/* part 5 start */}

      <div className='last_content' style={{ margin: '150px', borderRadius: '10px', backgroundColor: 'white', padding: '20px', display: 'flex', boxShadow: '0 0 6px 3px rgba(27, 26, 26, 0.3)' }}>
        <div style={{display:"inlne", padding:"10px"}} >
          <img className='logo_four' src={logo2} style={{ padding: '10px', position: 'relative', top: '-100px', width:"400px", marginLeft:"0"}} />
          <h1>How To Join Our <br />Community</h1>
          <p>Just 3 simple steps to optimize your company <br />operations.</p>
          <button style={{ padding: "10px", color: "white", borderRadius: "10px", backgroundColor: "#3763e4" }}>Try For Free</button>
        </div>
        <div style={{ position: 'relative', left: '120px', top: '50px' }}>
          <h1>Step 1:</h1>
          <p>Reach out to one of our specialists,<br /> and have short introduction session.</p>
          <hr />
          <h1>Step 2:</h1>
          <p >Our specialist will prepare<br /> personalized package suitable for<br /> your needs.</p>
          <hr />
          <h1>Step 3:</h1>
          <p>Poof! You are ready to work smart<br /> with optimized operations.</p>
          <hr />
        </div>
      </div>

      <div className='testimonials'>
        <h1 style={{ textAlign: "center" }}>Testimonials</h1>
        <h4 style={{ textAlign: "center" }}>People love what we do and we want to let you know</h4>
        <div className='feedback' style={{ display: 'flex', margin: '25px', padding: '25px', justifyContent: 'space-between' }}>
          <div className='card1' style={{ backgroundColor: 'white', padding: '10px', height: '220px', width: '220px', lineHeight: '20px', textAlign: 'center', margin: '5px', borderRadius: '10px', boxShadow: '2px 2px 2px black' }}>
            <h3>"Since implementing<br /> Lando our business has<br /> seen significant growth."</h3>
            <h4 style={{ color: "blue" }}>★ ★ ★ ★ ★</h4>
            <h4>Jack Sibire</h4>
            <h5>Lead Manager, Growio</h5>
          </div>
          <div className='card1' style={{ backgroundColor: 'white', padding: '10px', height: '220px', width: '220px', lineHeight: '20px', textAlign: 'center', margin: '5px', borderRadius: '10px', boxShadow: '2px 2px 2px black' }}>
            <h3>"I recommend Lando<br /> to any business<br /> looking for improvement."</h3>
            <h4 style={{ color: "blue" }}>★ ★ ★ ★</h4>
            <h4>Adele Mouse</h4>
            <h5>Product Manager, Mousio</h5>
          </div>
          <div className='card1' style={{ backgroundColor: 'white', padding: '10px', height: '220px', width: '220px', lineHeight: '20px', textAlign: 'center', margin: '5px', borderRadius: '10px', boxShadow: '2px 2px 2px black' }}>
            <h3>"I can't imagine<br /> running our<br /> company<br /> without it."</h3>
            <h4 style={{ color: "blue" }}>★ ★ ★ ★ ★</h4>
            <h4>Ben Clock</h4>
            <h5>CTO, Clockwork</h5>
          </div>
        </div>
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

export default Home

