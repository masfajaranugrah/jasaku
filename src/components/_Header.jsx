import React from 'react'

const _Header = () => {
  return (
 
   <>
   <header id="header-sticky" className="header-1 style-2">
    <div className="container-fluid">
        <div className="mega-menu-wrapper">
            <div className="header-main">
                <div className="logo">
                <h1 className="header-logo" style={{ fontSize: '40px', color: 'black' }}>JWN</h1>

                </div>
                <div className="mean__menu-wrapper">
                    <div className="main-menu">
                        <nav id="mobile-menu">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>

                          <li>
                            <a href="/layanan">Layanan</a>
                          </li>
                          <li>
                            <a href="/portfolio">Portfolio </a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                    <a href="#0" className="search-trigger search-icon"><i className="fa-regular fa-magnifying-glass"></i></a>
                    <div className="main-button">
                        <a href="contact.html"> <span className="theme-btn"> konsultasi gratis</span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></a>
                    </div>
                    <div className="header__hamburger d-xl-none my-auto">
                        <div className="sidebar__toggle">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
 
 
 <div className="fix-area">
 <div className="offcanvas__info">
     <div className="offcanvas__wrapper">
         <div className="offcanvas__content">
             <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                 <div className="offcanvas__logo">
                 <h1 className="header-logo-2" style={{ fontSize: '40px', color: 'white' }}>JWN</h1>

                 </div>
                 <div className="offcanvas__close">
                     <button>
                     <i className="fas fa-times"></i>
                     </button>
                 </div>
             </div>
             <p className="text d-none d-xl-block">
                 Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
             </p>
             <div className="mobile-menu fix mb-3"></div>
             <div className="offcanvas__contact">
                 <h4>Contact Info</h4>
                 <ul>
                     <li className="d-flex align-items-center">
                         <div className="offcanvas__contact-icon">
                             <i className="fal fa-map-marker-alt"></i>
                         </div>
                         <div className="offcanvas__contact-text">
                             <a target="_blank" href="#">Indonesia</a>
                         </div>
                     </li>
                     <li className="d-flex align-items-center">
                         <div className="offcanvas__contact-icon mr-15">
                             <i className="fal fa-envelope"></i>
                         </div>
                         <div className="offcanvas__contact-text">
                             <a href="mailto:info@example.com"><span className="mailto:info@example.com">admin@jasa.com</span></a>
                         </div>
                     </li>
                     <li className="d-flex align-items-center">
                         <div className="offcanvas__contact-icon mr-15">
                             <i className="fal fa-clock"></i>
                         </div>
                         <div className="offcanvas__contact-text">
                             <a target="_blank" href="#">senin-sabtu, 08.00 - 21.00</a>
                         </div>
                     </li>
                     <li className="d-flex align-items-center">
                         <div className="offcanvas__contact-icon mr-15">
                             <i className="far fa-phone"></i>
                         </div>
                         <div className="offcanvas__contact-text">
                             <a href="tel:+11002345909">+62 87836167585</a>
                         </div>
                     </li>
                 </ul>
                 <div className="header-button mt-4">
                     
                 </div>
                  
                 <div className="social-icon d-flex align-items-center">
                     <a href="#"><i className="fab fa-facebook-f"></i></a>
                     <a href="#"><i className="fab fa-twitter"></i></a>
                     <a href="#"><i className="fab fa-youtube"></i></a>
                     <a href="#"><i className="fab fa-linkedin-in"></i></a>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>
<div className="offcanvas__overlay"></div></>
  )
}

export default _Header