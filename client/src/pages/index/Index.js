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
          <div className="listSearch"></div>
          <div className="listResult"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
