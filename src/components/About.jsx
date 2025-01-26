import React from 'react'
import bgshape2 from '@/assets/img/about/bg-shape-2.png'
import rightshaape from '@/assets/img/case-studies/right-shaape.png'
import img3 from '@/assets/img/about/03.png'
import boxshpe from '@/assets/img/about/box-shape-2.png'
import grape  from '@/assets/img/about/grap-2.png'
import text from '@/assets/img/about/white-text.png'

const About = () => {
  return (
    <section className="about-section-2 fix section-padding pt-0">
            <div className="bg-shape">
                <img src={bgshape2} alt="img"/>
            </div>
            <div className="right-shape float-bob-x">
                <img src={rightshaape} alt="img"/>
            </div>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={img3} alt="img" className="wow w-2 img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s"/>
                                <div className="box-shape float-bob-y">
                                    <img src={boxshpe} alt="img"/>
                                </div>
                                <div className="gap-shape float-bob-x">
                                    <img src={grape} alt="img"/>
                                </div>
                                <a href="about.html" className="circle-button">
                                    <i className="fa-regular fa-arrow-up-right"></i>
                                    <span className="text-circle">
                                        <img src={text} alt="img"/>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>About</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Tentang Kami
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    JasaWebsiteNow adalah penyedia jasa pembuatan website profesional dengan pengalaman lebih dari 5 tahun. Kami berkomitmen untuk membantu bisnis Anda tampil optimal secara online melalui desain modern, performa terbaik, dan pendekatan yang sesuai kebutuhan.
                                </p>
                                <div className="icon-items-area">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <i className="icon-01"></i>
                                        </div>
                                        <div className="content">
                                            <h3>Profesional dan Berpengalaman
                                            </h3>
                                            <p>Tim kami terdiri dari profesional yang berdedikasi dalam menciptakan website berkualitas tinggi.</p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <i className="icon-02"></i>
                                        </div>
                                        <div className="content"> 
                                            <h3>Kepuasan Pelanggan Prioritas Kami</h3>
                                            <p>Dengan fokus pada kebutuhan Anda, kami terus memberikan layanan yang terbaik.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-button">
                                    <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                        <a href="about.html"> <span className="theme-btn">Konsultasi Gratis</span><span className="arrow-btn"><i className="fa-regular fa-arrow-up-right"></i></span></a>
                                    </div>
                                    {/* <a href="about.html" className="link-btn wow fadeInUp" data-wow-delay=".5s">Jelajahi Portofolio Kami</a>   */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About