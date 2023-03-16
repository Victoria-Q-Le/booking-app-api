import "./index.css"
import Navbar from '../../components/navBar/Navbar'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import DatePicker from "react-datepicker"
import SearchItem from "../../components/searchItem/SearchItem"

const Index = () => {

  const location = useLocation()
  const [service, setService] = useState(location.state.service)
  const [date, setDate] = useState(location.state.date)

  console.log(service, typeof(date))
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
              <input type="text" placeholder={service}></input>
            </div>
            
            <div className="lsItem">
              <label>Date</label>
              <span> <DatePicker selected={date} onChange={(date) => setDate(date)}/> </span>
            </div>

            <button>Search</button>
          </div>
          {/* END OF LIST SEARCH */}

          {/* LIST RESULT */}
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />

          </div>
          {/* END OF LIST RESULT */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
