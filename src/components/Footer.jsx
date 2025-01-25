import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="footer-section footer-bg fix">
       <div className="container">
           <div className="footer-widgets-wrapper">
               <div className="row">
                   <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                       <div className="single-footer-widget">
                           <div className="widget-head">
                               <h1 className="text-white">JWN</h1>
                           </div>
                           <div className="footer-content">
                               <p>
                                   penyedia jasa pembuatan website profesional dengan pengalaman lebih dari 5 tahun. Kami berkomitmen untuk membantu bisnis Anda tampil optimal secara online melalui desain modern, performa terbaik, dan pendekatan yang sesuai kebutuhan.
                               </p>
                               <div className="social-icon d-flex align-items-center">
                                   <a href="#"><i className="fab fa-facebook-f"></i></a>
                                   <a href="#"><i className="fab fa-twitter"></i></a>
                                   <a href="#"><i className="fab fa-youtube"></i></a>
                                   <a href="#"><i className="fab fa-linkedin-in"></i></a>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                       <div className="single-footer-widget">
                           <div className="widget-head">
                               <h3>Quick Links</h3>
                           </div>
                           <ul className="list-area">
                               <li>
                                   <a href="/">
                                       <i className="fa-solid fa-chevrons-right"></i>
                                      Home
                                   </a>
                               </li>
                               <li>
                                   <a href="service">
                                       <i className="fa-solid fa-chevrons-right"></i>
                                       layanan
                                   </a>
                               </li>
                               <li>
                                   <a href="portfolio">
                                       <i className="fa-solid fa-chevrons-right"></i>
                                      Portfolio
                                   </a>
                               </li>
                               <li>
                                   <a href="contact">
                                       <i className="fa-solid fa-chevrons-right"></i>
                                       Contact
                                   </a>
                               </li>
                            
                           </ul>
                       </div>
                   </div>
                   <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                       <div className="single-footer-widget">
                           <div className="widget-head">
                               <h3>Quick Links</h3>
                           </div>
                           <ul className="list-area">
                               <li>
                                   <a href="about.html">
                                       <i className="fa-solid fa-chevrons-right"></i>
                                       Privacy Policy
                                   </a>
                               </li>
                               <li>
                                   <a href="service.html">
                                       <i className="fa-solid fa-chevrons-right"></i>
                                       Diclaimer
                                   </a>
                               </li>
                           
                           </ul>
                       </div>
                   </div>
                   <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                       <div className="single-footer-widget">
                           <div className="widget-head">
                               <h3>Contact Us</h3>
                           </div>
                           <div className="footer-content">
                               <ul className="contact-info">
                                   <li>
                                       <i className="fa-regular fa-envelope"></i>
                                       <a href="mailto:info@example.com">admin@jasa.com</a>
                                   </li>
                                   <li>
                                       <i className="fa-solid fa-phone-volume"></i>
                                       <a href="tel:2086660112">+62 878-3616-7585</a>
                                   </li>
                               </ul>
                               
                             
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="footer-bottom">
           <div className="container">
               <div className="footer-wrapper d-flex align-items-center justify-content-between">
                   <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                       © All Copyright 2024 | JasaWebsiteNow by fajardev
                   </p>
                   <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                       <li>
                           <a href="contact.html">
                               Terms & Condition       
                           </a>
                       </li>
                       <li>
                           <a href="contact.html">
                               Privacy Policy
                           </a>
                       </li>
                   </ul>
               </div>
           </div>
           <a href="#" id="scrollUp" className="scroll-icon">
               <i className="far fa-arrow-up"></i>
           </a>
       </div>
   </section>  
     
   <button id="back-top" className="back-to-top">
       <i className="fa-regular fa-arrow-up"></i>
   </button>
   
   </>
  )
}

export default Footer