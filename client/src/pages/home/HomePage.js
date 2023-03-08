import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navBar/Navbar'
import './home.css'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
      </div>
    </div>
  )
}

export default HomePage
