
import React from 'react'
import './card.css'


function Card({name, work, photo}) {
  return (
    <div  style={{display:"inline", textAlign:"center"}}className='cart'>
        <div >
        <img className='id' style={{width:"150px",height:"80px",marginLeft:"0px", }} src={photo} alt="Logo" />  {/* Ensure alt text for accessibility */}
        </div>
        <h3 className='name'>{name}</h3> 
        <h4 className='work'>{work}</h4>  
    </div>
  )
}

export default Card
