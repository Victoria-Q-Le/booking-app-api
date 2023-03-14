import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Pampering yourself is never so easy</h1>
      <span className="mailDesc">Subcribe to be the first to know about our promotions</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Please Enter Your Email"></input>
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default MailList
