import React from 'react'
import "./servicesList.css"
import Pedi from "../../assets/images/serviceListImages/pedi.jpg"
import Mani from "../../assets/images/serviceListImages/mani.jpg"
import Waxing from "../../assets/images/serviceListImages/waxing.jpg"
import Facial from "../../assets/images/serviceListImages/facial.jpg"
import Eyelash from "../../assets/images/serviceListImages/eyelash.jpg"





const servicesList = () => {
  return (
    <div className='sList'>
      <div className='sListItem'>
        <img src={Pedi} alt="pedi" className='sListImg'/>
        <div className='sListTitles'>
          <h1>Pedicures</h1>
          <h2>9 services</h2>
        </div>
      </div>

      <div className='sListItem'>
        <img src={Mani} alt="mani" className='sListImg'/>
        <div className='sListTitles'>
          <h1>Manicures</h1>
          <h2>8 services</h2>
        </div>
      </div>

      <div className='sListItem'>
        <img src={Waxing} alt="Waxing" className='sListImg'/>
        <div className='sListTitles'>
          <h1>Waxing</h1>
          <h2>15 services</h2>
        </div>
      </div>

      <div className='sListItem'>
        <img src={Facial} alt="Facial" className='sListImg'/>
        <div className='sListTitles'>
          <h1>Facial</h1>
          <h2>5 services</h2>
        </div>
      </div>

      <div className='sListItem'>
        <img src={Eyelash} alt="Eyelash" className='sListImg'/>
        <div className='sListTitles'>
          <h1>Lash</h1>
          <h2>8 services</h2>
        </div>
      </div>
    </div>
  )
}

export default servicesList
