import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import FAQ from './Pages/FAQ.jsx';
import Membership from './Pages/Membership.jsx';
import History from './Pages/History.jsx';
import Sponsors from './Pages/Sponsors.jsx';
import Gallery from './Pages/Gallery.jsx'
import Team from './Pages/Team.jsx';
import Topbar from './Components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CopyrightTag from "./Components/CopyrightTag";
import logo from './Assets/hps_logo1.png';
import { Link } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="title-container">
          <Link to="/" className="title-link">
            <h1 className="website-title">Human Powered Submarine Team at Virginia Tech</h1>
          </Link>
        </div>
        <div></div> {/* Empty right cell */}
        </div>
        <div>
          <Topbar/>
        </div>
        <div style={{ display: 'flex' }}></div>
        <Routes> {/* Paths from root to different pages */}
          <Route path="/" element={<Home />}/> { }
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/sponsors" element={<Sponsors/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <CopyrightTag />
      </BrowserRouter>
    </div>
  );
};

export default App;