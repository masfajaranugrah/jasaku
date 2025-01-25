import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, LayananPage, PortfolioPage, ContactPage} from '@/pages/Index'
function Homes() {
  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<LayananPage />} />
       <Route path="/portfolio" element={<PortfolioPage />} />
         <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
  
    </Router>
  );
}

export default Homes;
