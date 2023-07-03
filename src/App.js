import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Cards from './pages/Cards';
import Profile from './components/Profile_tmp';
import Navbar from './components/Navbar';
import Profile_card from './components/Profile_card';
import { useState } from 'react';


function App() {
  const [colors, setColor] = useState("#9FA7BF");

  return (
    <div style={{background: colors}}>
      {window.location.pathname !== '/' && <Navbar />}
      {/* {(window.location.pathname === '/cards') ? setColor("#233855") : setColor("#9FA7BF")} */}
      {console.log(window.location.pathname)}
      <div className="min-h-full h-screen grid place-items-center justify-center px-4 sm:px-6 lg:px-8 w-full space-y-8 overflow-y-scroll scrollbar-hide">
          <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/signup" element={<SignupPage/>} />
              <Route path="/profile" onClick={() => this.setColor("#darkbg")} element={<Profile/>} />
              <Route path="/cards" onClick={() => this.setColor("#darkbg")} element={<Cards/>} />
              <Route path="/pcards" onClick={() => this.setColor("#darkbg")} element={<Profile_card/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;