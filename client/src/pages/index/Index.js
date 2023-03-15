import "./index.css"
import Navbar from '../../components/navBar/Navbar'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"
import { useLocation } from "react-router-dom"

const Index = () => {

  const location = useLocation()

  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          {/* LIST SEARCH */}
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text"></input>
            </div>
            <div className="lsItem">
              <label>Date</label>
              <input type="text"></input>
            </div>
          </div>
          {/* END OF LIST SEARCH */}

          {/* LIST RESULT */}
          <div className="listResult">Result</div>
          {/* END OF LIST RESULT */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
