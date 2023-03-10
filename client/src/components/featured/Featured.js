import React from 'react'
import "./featured.css"
import Featured1 from "../../assets/images/featured1.jpg"

const Featured = () => {
  return (
    <div className='featured'> 
      <div className='featuredItem'>
        <img src={Featured1} alt="featured1" />
      </div>
    </div>
  )
}

export default Featured
