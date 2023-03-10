import React from 'react'
import "./servicesList.css"
import Pedi from "../../assets/images/serviceListImages/pedi.jpg"

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
    </div>
  )
}

export default servicesList
