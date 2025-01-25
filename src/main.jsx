import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import '@/assets/css/bootstrap.min.css';
import '@/assets/css/all.min.css';
import '@/assets/css/animate.css';
import '@/assets/css/icomoon.css';
import '@/assets/css/magnific-popup.css';
import '@/assets/css/meanmenu.css';
import '@/assets/css/swiper-bundle.min.css';
import '@/assets/css/nice-select.css';
import '@/assets/css/color.css';
import '@/assets/css/main.css';



 

import '@/assets/js/jquery-3.7.1.min.js'  ;  
 import '@/assets/js/bootstrap.bundle.min.js';   
import '@/assets/js/swiper-bundle.min.js';
import '@/assets/js/main.js';   
import '@/assets/js/circle-progress.js';
import '@/assets/js/jquery.waypoints.js';
import '@/assets/js/jquery.counterup.min.js';
import '@/assets/js/jquery.meanmenu.min.js';
import '@/assets/js/jquery.magnific-popup.min.js';
import '@/assets/js/jquery.nice-select.min.js';
import '@/assets/js/viewport.jquery.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
