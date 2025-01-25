import React from 'react'

const Faq = () => {
  return (
     <section className="faq-section section-padding pb-0">
      <div className="faq-overlay">
          <img src="assets/img/faq-overlay.png" alt="img"/>
      </div>
      <div className="faq-shape">
          <img src="assets/img/faq-shape.png" alt="img"/>
      </div>
      <div className="container">
          <div className="faq-wrapper">
              <div className="row g-4 justify-content-between">
                  <div className="col-xl-5 col-lg-6">
                      <div className="faq-content">
                          <div className="section-title">
                              <div className="sub-title bg-color-2 wow fadeInUp">
                                  <span>FAQ's</span>
                              </div>
                              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                  Tanya Jawab Seputar Layanan Pembuatan Website
                              </h2>
                          </div>
                          <p className="wow fadeInUp" data-wow-delay=".5s">
                              Kami lebih dari sekedar agensi pengembang website. Dengan pengalaman bertahun-tahun, kami berkomitmen untuk membantu bisnis Anda tumbuh secara digital melalui website yang efektif, cepat, dan aman. Berikut adalah beberapa pertanyaan yang sering diajukan oleh klien kami.
                          </p>
                          <ul className="faq-list">
                              <li className="wow fadeInUp" data-wow-delay=".3s">
                                  <i className="fa-regular fa-circle-check"></i>
                                  Top quality service
                              </li>
                       
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                      <div className="faq-accordion-items">
                          <div className="faq-accordion">
                              <div className="accordion" id="accordion">
                                  <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                              Berapa biaya pembuatan website?
                                          </button>
                                      </h5>
                                      <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Biaya pembuatan website sangat bervariasi tergantung pada kompleksitas, fitur yang diinginkan, dan kebutuhan spesifik Anda. Kami menawarkan paket yang dapat disesuaikan dengan anggaran dan tujuan bisnis Anda. Untuk mendapatkan penawaran yang tepat, silakan hubungi kami dengan detail kebutuhan Anda. 
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                              Apa saja yang diperlukan untuk memulai pembuatan website?
                                          </button>
                                      </h5>
                                      <div id="faq2" className="accordion-collapse show" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Untuk memulai, kami memerlukan informasi tentang bisnis Anda, tujuan pembuatan website, target audiens, dan fitur-fitur yang diinginkan. Informasi ini membantu kami merancang dan mengembangkan website yang sesuai dengan kebutuhan Anda.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                              Apakah layanan Anda termasuk optimasi SEO?
                                          </button>
                                      </h5>
                                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Kami menawarkan layanan optimasi SEO dasar untuk memastikan website Anda mudah ditemukan di mesin pencari. Untuk strategi SEO yang lebih mendalam, kami juga menyediakan paket layanan tambahan sesuai kebutuhan Anda. 
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                              Berapa lama waktu yang dibutuhkan untuk membuat sebuah website?
                                          </button>
                                      </h5>
                                      <div  id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Durasi pembuatan website bergantung pada kompleksitas dan fitur yang diinginkan. Setelah memahami kebutuhan Anda, kami akan memberikan estimasi waktu pengerjaan yang lebih akurat.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                                              Bagaimana proses pemesanan layanan pembuatan website?
                                          </button>
                                      </h5>
                                      <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Anda dapat menghubungi kami melalui telepon atau mengisi formulir yang tersedia di halaman "Hubungi Kami" dengan informasi lengkap. Tim kami akan segera menghubungi Anda untuk mendiskusikan detail proyek dan memberikan penawaran yang sesuai. 
  
                                          </div>
                                      </div>
                                  </div>
                                  <div id="faq6" className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                                              Apakah ada layanan dukungan setelah website selesai dibuat?
                                          </button>
                                      </h5>
                                      <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Ya, kami menyediakan layanan dukungan dan pemeliharaan untuk memastikan website Anda tetap berjalan optimal. Layanan ini mencakup pembaruan sistem, perbaikan bug, dan bantuan teknis lainnya sesuai perjanjian.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".7s">
                                      <h5 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                                              Apakah saya akan mendapatkan akses penuh ke website setelah selesai?
                                          </button>
                                      </h5>
                                      <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                          <div className="accordion-body">
                                              Ya, setelah proyek selesai, Anda akan mendapatkan akses penuh ke website Anda, termasuk kontrol panel (cPanel) dan hak kepemilikan lainnya. Ini memastikan Anda dapat mengelola dan mengupdate konten sesuai kebutuhan.
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Faq