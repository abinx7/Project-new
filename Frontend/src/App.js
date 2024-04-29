import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import Chinese from './components/Chinese';
import Home from './components/Home';
import { Dashboard } from '@mui/icons-material';
import Promotions from './components/Promotions';
import SpecialOffers from './components/SpecialOffers';
import Contact from './components/Contact';
import Menu from './components/Menu';
import FeedbackForm from './components/Feedback/feedback';

// import '../styles/HomeStyles.css';
function App() {
  return (
    <div className="App">
      
      <Routes>
        &nbsp; &nbsp;
        <Route path="/" element={<Homepage/>} />
      <Route path='/Homepage' element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/> 
      <Route path='/Chinese' element={<Chinese/>}/>    
      <Route path='/Menu' element={<Menu/>}/>  
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Promotions' element={<Promotions/>}/>
      <Route path='/SpecialOffers' element={<SpecialOffers/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Feedback' element={<FeedbackForm/>}/>
      
      </Routes>
    </div>
  )
}
   

export default App;
