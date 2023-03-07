import "./header.css"
import {faEye, faFaceSmile, faSprayCanSparkles} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className='headerList'>
          <div className='headerListItem'>
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
      </div>
    </div>
  )
}

export default Header
