import React from 'react'
import "./staffs.css"
import Staff1 from "../../assets/images/staffs/avataaars.png"

const Staffs = () => {
  return (
    <div className='staffs'>
      <img src={Staff1} alt="Staff1" />
      <span className='staffName'>Amy T</span>
    </div>
  )
}

export default Staffs
