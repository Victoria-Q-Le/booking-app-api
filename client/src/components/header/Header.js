import "./header.css"
import {faCalendar, faClock, faEye, faFaceSmile, faSprayCanSparkles} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [date, setDate] = useState(new Date())
  const [service, setService] = useState("")

  const navigate = useNavigate()

  const handleSearch = () => {
    navigate("/services", {state: {service, date}})
  }

  return (
    <div className="header">
      <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
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

        {type !== "list" &&
        <>
          {/* TITLE */}
          <h1 className="headerTitle">Want to get pampered? Come visit us!</h1>
          <p className="headerDesc">Come to us with all your beauty needs, from taking care of your nails, to lashes, or just simply a facial to refresh to skin</p>
          <button className="headerBtn">Login / Register</button>

          {/* SEARCH BOX */}
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faSprayCanSparkles} className="headerIcon" />
              <input 
                type="text" 
                placeholder="Find by service" 
                className="headerSearchInput"
                onChange={e => setService(e.target.value)}
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
              <DatePicker className="date" selected={date} onChange={(date) => setDate(date)} closeOnScroll={true}/>

            </div>
            
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faClock} className="headerIcon" />
              <span className="headerSearchText">Time</span>
            </div>

            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </>}

      </div>
    </div>
  )
}

export default Header


//performing for searching: store the workdays in the table, queries everything table that the day is monday. Does this appear in the blackout date. an availablity table. more ideal for big company. *** Optimizing. Foreign keys to the tech and query 
//business table, info regarding the 