import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navBar/Navbar'
import ServicesList from "../../components/servicesList/servicesList"
import Staffs from '../../components/staffs/Staffs'
import './home.css'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by Services</h1>
        <ServicesList />
        <h1 className='homeTitle'>Meet Our Staffs</h1>
        <Staffs />
      </div>
    </div>
  )
}

export default HomePage
