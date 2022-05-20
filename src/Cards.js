import React from 'react'
import CardDetails from '.CardDetails.js'

const Cards =data.map(item=>{
    return(

        <div className = "CardDetails">
            <img src= {props.imageUrl} alt='pic'/>
            
            <p className='State'>{props.State}</p>
            <a className='Link' href={props.googleMapsUrl}>View on Google Maps</a>
            
            <h2 className='Location'>Location</h2>
            <h4 className='Date'>Date</h4>
            <img className='Pointer' src='./images/Pointer.jpg' alt='Pointer'/>
            <p className='Description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
          <hr></hr>
        </div>
    )
})
  
  export default Cards;