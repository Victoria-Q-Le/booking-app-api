import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import Index from './pages/Index';
import Service from './pages/Service';

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
