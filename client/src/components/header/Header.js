import "./header.css"
import {faCalendar, faClock, faEye, faFaceSmile, faSprayCanSparkles} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useState } from "react"

const Header = () => {
  const [date, setDate] = useState(null)

  console.log(date);

  return (
    <div className="header">
      <div className="headerContainer">
        {/* HEADER LIST ITEMS */}
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faSprayCanSparkles} />
            <span>Manicures and Pedicures</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faEye} />
            <span>Lashes</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faFaceSmile} />
            <span>Facial</span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="headerTitle">Want to get pampered? Come visit us!</h1>
        <p className="headerDesc">Come to us with all your beauty needs, from taking care of your nails, to lashes, or just simply a facial to refresh to skin</p>
        <button className="headerBtn">Login / Register</button>

        {/* SEARCH BOX */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faSprayCanSparkles} className="headerIcon" />
            <input type="text" placeholder="Find by service" className="headerSearchInput"></input>
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
            <span className="headerSearchText">Date</span>
            <Calendar onChange={item => setDate(item)} date={date} />
          </div>
          
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faClock} className="headerIcon" />
            <span className="headerSearchText">Time</span>
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
