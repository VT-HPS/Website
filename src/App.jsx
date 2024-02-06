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
import NotFound from './Pages/NotFound.jsx';
import SponsorRegistration from './Pages/SponsorsRegistration.jsx';
import Topbar from './Components/Topbar/Topbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageFooter from './Components/FooterCard/FooterCard.jsx';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Topbar/>
        </div>
        <div style={{ display: 'flex' }}></div>
        <Routes> {/* Paths from root to different pages */}
          <Route path="/" element={<Home />}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/sponsors" element={<Sponsors/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/become_a_sponsor" element={<SponsorRegistration/>} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;