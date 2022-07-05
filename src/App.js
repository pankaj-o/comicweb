import './App.css';
import Signinpage from './components/Pages/Signinpage';
import Signuppage from './components/Pages/Signuppage';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Top_headlines from './components/Pages/Top_headlines';
import Health from './components/Pages/Health';
import Crypto from './components/Pages/Crypto';
import Business from './components/Pages/Business';
import Technolgy from './components/Pages/Technolgy';
import Sports from './components/Pages/Sports';


function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route  path="/"element={<Top_headlines/>}/> 
     <Route path="signin" element={<Signinpage/>}/>
     <Route path="signup" element={<Signuppage/>}/>
     <Route path="health" element={<Health/>}/>
     <Route path="crypto" element={<Crypto/>}/>
     <Route path="business" element={<Business/>}/>
     <Route path="technolgy" element={<Technolgy/>}/>
     <Route path="sports" element={<Sports/>}/>
     <Route path="*" element={<div><h2>Page not found</h2></div>}/>
  </Routes>
  </BrowserRouter>)
 
  
}
// 
export default App;
