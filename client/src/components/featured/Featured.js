import React from 'react'
import "./featured.css"
import Featured1 from "../../assets/images/featuredCover/featured1.jpg"
import Featured2 from "../../assets/images/featuredCover/featured2.jpg"
import Featured3 from "../../assets/images/featuredCover/featured3.jpg"

const Featured = () => {
  return (
    <div className='featured'> 
      <div className='featuredItem'>
        <img src={Featured1} alt="featured1" className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Dipping Powder Full Set</h1>
          <h2>Desgined by Victoria </h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img src={Featured2} alt="featured2" className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Classic Full Set</h1>
          <h2>Desgined by Amy</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img src={Featured3} alt="featured3" className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Aqua Peels</h1>
          <h2>Performed by Amy</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured
