import './App.css';
import Signinpage from './components/Pages/Signinpage';
import Signuppage from './components/Pages/Signuppage';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Pages/Home';


function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route  path="/"element={<Home/>}></Route> 
     <Route path="signin" element={<Signinpage/>}/>
     <Route path="signup" element={<Signuppage/>}/>
     <Route path="*" element={<div><h2>Page not found</h2></div>}/>
  </Routes>
  </BrowserRouter>)
 
  
}
// 
export default App;
