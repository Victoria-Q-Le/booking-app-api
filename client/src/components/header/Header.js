import "./header.css"
import {faEye, faFaceSmile, faSprayCanSparkles} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
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

        <h1 className="headerTitle">Want to get pampered? Come join us!</h1>
      </div>
    </div>
  )
}

export default Header
