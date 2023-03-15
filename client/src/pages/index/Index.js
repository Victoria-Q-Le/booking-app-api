import "./index.css"
import Navbar from '../../components/navBar/Navbar'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          {/* LIST SEARCH */}
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
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
