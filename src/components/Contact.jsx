import React from 'react'
import contact from '@/assets/img/contact-img.png'
import bc from '@/assets/img/cta-contact-bg.jpg'
const Contact = () => {
  return (
 
    <section className="cta-contact-section fix section-padding">
     <div className="container">
         <div className="cta-contact-wrapper bg-cover" style={{backgroundImage: `url(${bc})`}}>
             <div className="cta-image wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                 <img src={contact} alt="img"/>
             </div>
             <div className="section-title mb-0">
                 <div className="sub-title bg-color-3 wow fadeInUp">
                     <span>Contact US</span>
                 </div>
                 <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                     Layanan Support 24/7<br/> Siap  Membantu Anda Kapan Saja!  
                 </h2>
             </div>
             <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                 <a href="contact.html"> <span className="theme-btn">Hubungi Kami</span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></a>
             </div>
         </div>
     </div>
 </section>
  )
}

export default Contact