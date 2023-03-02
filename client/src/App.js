import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/home/HomePage';
import Index from './pages/index/Index';
import Service from './pages/service/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='/services' element = {<Index />} />
        <Route path='/services/:id' element = {<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
