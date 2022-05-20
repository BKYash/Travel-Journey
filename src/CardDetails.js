import React from 'react'


function CardDetails(props) {
    return (
      <>
      
        <div className = "CardDetails">
            <img className='images' src= {props.img} alt='pic' />
            <div className='text'>
            <img className='Pointer' src='./images/Pointer.jpg' alt='Pointer'/>
            <span className='State'>{props.country}</span>
            <span><a className='Link' href={props.map}>View on Google Maps</a></span>
            
            <h2 className='Location'>{props.name}</h2>
            <h3 className='Date'>{props.date}</h3>
            
            <p className='Description'>{props.desc}</p>
            </div>
        </div>
        <hr></hr>
        </>
    );
  }
  
  export default CardDetails;