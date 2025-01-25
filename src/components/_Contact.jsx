import React from 'react'

const _Contact = () => {
  return (
   <>
   
  
        <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage : `url('assets/img/breadcrumb.jpg')`}}>
            <div className="left-shape">
                <img src="assets/img/breadcrumb-shape.png" alt="img"/>
            </div>
            <div className="right-shape">
                <img src="assets/img/breadcrumb-shape-2.png" alt="img"/>
            </div>
            <div className="container">
                <div className="page-heading">
                    <div className="breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">Contact Us</h1>
                    </div>
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <a href="index.html">
                            Home
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>

  
        <section className="contact-info-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-info-items text-center active">
                            <div className="icon">
                               <i className="icon-09"></i>
                            </div>
                            <div className="content">
                                <h3>Alamat</h3>
                                <p>
                                    Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                                <i className="icon-10"></i>
                            </div>
                            <div className="content">
                                <h3><a href="mailto:info@example.com">admin@jasa.com</a></h3>
                                <p>
                                    Anda bisa hubungi kami melalui email di atas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                                <i className="icon-11"></i>
                            </div>
                            <div className="content">
                                <h3><a href="tel:+2086660112">+62 878-3616-7585</a></h3>
                                <p>
                                    Anda bisa hubungi kami melalui nomer di atas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        <section className="contact-section-33 fix section-padding pt-0">
            <div className="container">
                <div className="contact-wrapper-2">
                    <div className=" g-4 align-items-center">
                        <div>
                            <div className="map-items">
                                <div className="googpemap">
                                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.526623535583!2d110.77236652566273!3d-7.5617600674246805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65759b9cd518dd%3A0xc377d19d8fedbc46!2sJawa%20Tengah!5e0!3m2!1sid!2sid!4v1737550397899!5m2!1sid!2sid"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
 
   </>
  )
}

export default _Contact