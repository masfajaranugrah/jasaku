import React from 'react'

 
const Testimonials = ( ) => {
  return (
    
     <section className="testimonial-section fix section-padding pt-0 bg-cover" style={{
        backgroundImage: `url('assets/img/testimonial/testimonial-bg.jpg')`
     }}>
        <div className="container">
            <div className="testimonial-wrapper-2">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="testimonial-image">
                            <img src="assets/img/testimonial/03.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s"/>
                            <div className="rocket-shape">
                                <img src="assets/img/testimonial/rocket.png" alt="img"/>
                            </div>
                            <div className="msg-shape float-bob-y">
                                <img src="assets/img/testimonial/msg.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>TESTIMONILAS</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Apa Kata Dari Mereka?
                                </h2>
                            </div>
                            <div className="swiper testimonial-slider-3">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-card-items">
                                            <div className="client-info">
                                                <div className="client-img">
                                                    <img src="assets/img/testimonial/04.png" alt="img"/>
                                                </div>
                                                <div className="client-content">
                                                    <h5>Kathryn Murphy</h5>
                                                    <span>Web Designer</span>
                                                </div>
                                            </div>
                                            <p>
                                                Saya sangat puas dengan hasil website yang dibuat oleh tim ini! Desainnya modern, responsif, dan mudah digunakan. Proses pengerjaannya cepat dan tim sangat profesional dalam memberikan solusi sesuai kebutuhan kami. Website kami sekarang lebih menarik dan user-friendly. Terima kasih atas kerja keras dan dedikasinya!
                                            </p>
                                            <div className="icon">
                                                <img src="assets/img/testimonial/icon.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-card-items">
                                            <div className="client-info">
                                                <div className="client-img">
                                                    <img src="assets/img/testimonial/04.png" alt="img"/>
                                                </div>
                                                <div className="client-content">
                                                    <h5>Kathryn Murphy</h5>
                                                    <span>Web Designer</span>
                                                </div>
                                            </div>
                                            <p>
                                                There are many variations of passages of the Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                            <div className="icon">
                                                <img src="assets/img/testimonial/icon.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="array-button">
                                <button className="array-prev"><i className="fa-regular fa-arrow-up-long"></i></button>
                                <button className="array-next"><i className="fa-regular fa-arrow-down-long"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials