import React from 'react';
// Impor gambar

import leftShapeImage from '@/assets/img/hero/left-shape.png';
import rightShapeImage from '@/assets/img/hero/right-shape.png';
import rocketShapeImage from '@/assets/img/hero/rocket-2.png';
import heroImage from '@/assets/img/hero/heroku.png';
import bgShapeImage from '@/assets/img/hero/bg-shape-2.png';
import boxShapeImage from '@/assets/img/hero/box-shape.png';
import gapShapeImage from '@/assets/img/hero/gap-box.png';
import cursorShapeImage from '@/assets/img/hero/cursor.png';

const Banner = () => {
  return (
    <section
    className="hero-section hero-2"
      style={{ backgroundImage: `url('/assets/img/hero/hero-bg-2.png')` }}  
  >
    <div className="trophy-shape">
      <img src="/assets/img/hero/trophy-shape.png" alt="img" />
    </div>
    <div className="left-shape">
      <img src={leftShapeImage} alt="img" />
    </div>
    <div className="right-shape">
      <img src={rightShapeImage} alt="img" />
    </div>
    <div className="rocket-shape float-bob-y">
      <img src={rocketShapeImage} alt="img" />
    </div>
    <div className="container-fluid">
      <div className="row g-4 justify-content-between align-items-center">
        <div className="col-lg-6">
          <div className="hero-content">
            <h6 className="wow fadeInUp">#WebDesignExperts</h6>
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              Solusi Website Profesional untuk Meningkatkan Bisnis Anda
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Dapatkan website modern, responsif, dan dirancang khusus untuk
              kebutuhan bisnis Anda. Mulai dari Rp 500.000 dengan gratis hosting
              & domain selama 1 tahun!
            </p>

            <div className="hero-button">
              <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                <a href="about.html">
                  <span className="theme-btn">Konsultasi Gratis</span>
                  <span className="arrow-btn">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
              <a href="about.html" className="link-btn wow fadeInUp" data-wow-delay=".5s">
                Lihat Portofolio Kami
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="hero-image">
            <img
              src={heroImage}
              style={{ width: '100%' }}
              alt="img"
              className="wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            />
            <div className="bg-shape">
              <img src={bgShapeImage} alt="img" />
            </div>
            <div className="box-shape">
              <img src={boxShapeImage} alt="img" />
            </div>
            <div className="gap-shape">
              <img src={gapShapeImage} alt="img" />
            </div>
            <div className="cursor-shape">
              <img src={cursorShapeImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
