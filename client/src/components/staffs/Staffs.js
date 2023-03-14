import React from 'react'
import "./staffs.css"
import Staff1 from "../../assets/images/staffs/avataaars.png"
import Staff2 from "../../assets/images/staffs/avataaars (1).png"
import Staff3 from "../../assets/images/staffs/avataaars (2).png"

const Staffs = () => {
  return (
    <div className='staffs'>
      <div className='staffItem'>
        <img className="staffImg" src={Staff1} alt="Staff1" />
        <span className='staffName'>Amy</span>
        <span className='staffServices'>Specialties: Manicure & Pedicure, Waxing, Lash</span>
        <div className='booking'>
          <button>Book with Amy</button>
        </div>
      </div>

      <div className='staffItem'>
        <img className="staffImg" src={Staff2} alt="Staff2" />
        <span className='staffName'>Bill</span>
        <span className='staffServices'>Specialties: Design, Acrylic</span>
        <div className='booking'>
          <button>Book with Bill</button>
        </div>
      </div>

      <div className='staffItem'>
        <img className="staffImg" src={Staff3} alt="Staff3" />
        <span className='staffName'>Cathy</span>
        <span className='staffServices'>Specialties: Facial, Waxing</span>
        <div className='booking'>
          <button>Book with Cathy</button>
        </div>
      </div>
    </div>
  )
}

export default Staffs
