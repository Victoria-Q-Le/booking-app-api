import React from 'react'
import "./featured.css"
import Featured1 from "../../assets/images/featured1.jpg"
import Featured2 from "../../assets/images/featured2.jpg"
import Featured3 from "../../assets/images/featured3.jpg"

const Featured = () => {
  return (
    <div className='featured'> 
      <div className='featuredItem'>
        <img src={Featured1} alt="featured1" className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Dipping Powder Full Set</h1>
          <h1>Desgined by Victoria </h1>
        </div>
      </div>

      <div className='featuredItem'>
        <img src={Featured2} alt="featured2" className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Lash Extension</h1>
          <h1>Desgined by Amy</h1>
        </div>
      </div>

      <div className='featuredItem'>
        <img src={Featured3} alt="featured3" className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Facial Services</h1>
          <h1>Performed by Our Experienced Aestheticians</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
