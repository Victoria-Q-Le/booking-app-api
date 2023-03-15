import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
            <li className="fListItem">Company</li>
            <li className="fListItem">About</li>
            <li className="fListItem">Jobs</li>
        </ul>

        <ul className="fList">
            <li className="fListItem">Policy</li>
            <li className="fListItem">Terms of use</li>
            <li className="fListItem">Rewards</li>
            <li className="fListItem">Accessibility</li>
            <li className="fListItem">Your Privacy Choices</li>
        </ul>

        <ul className="fList">
            <li className="fListItem">Help</li>
            <li className="fListItem">Support</li>
            <li className="fListItem">Cancel/Rechedule your appointment</li>
        </ul>
      </div>

      <div className="fText">Coryright © 2023 Victoria</div>
    </div>
  )
}

export default Footer
