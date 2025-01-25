import React from 'react'

const Price = () => {
  return (
     <section className="pricing-section fix section-padding">
     <div className="container">
         <div className="section-title-area">
             <div className="section-title">
                 <div className="sub-title bg-color-2 wow fadeInUp">
                     <span>OUR PRICNG PLAN</span>
                 </div>
                 <h2 className="wow fadeInUp" data-wow-delay=".3s">
                     Our awesome <br/> Pricing Plan
                 </h2>
             </div>
             <div className="pricing-content">
                 <div className="pricing-tab-header">
                     <ul className="nav" role="tablist">
                         <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                             <a href="#monthly" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                             Monthly
                             </a>
                         </li>
                         <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                             <a href="#yearly" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex="-1">
                             Yearly
                             </a>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
         <div className="tab-content">
             <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                 <div className="row g-4">
                     <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                         <div className="pricing-box-items">
                             <div className="pricing-header">
                                 <div className="content">
                                     <h4>Free Plans</h4>
                                     <h2>$00 <sub>/ Month</sub></h2>
                                 </div>
                                 <div className="icon">
                                     <img src="assets/img/cloud.png" alt="img"/>
                                 </div>
                             </div>
                             <ul className="price-list">
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Weekly Backups</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 24/7 system Monitoring</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Free Domain ($9.99 value)</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> Dedicated IP Address</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> 20+ Payment Methods</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                             </ul>
                             <div className="price-button">
                                 <a href="pricing.html" className="theme-btn">Get Started Now <i className="fa-regular fa-arrow-right-long"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                         <div className="pricing-box-items style-2">
                             <div className="pricing-header">
                                 <div className="content">
                                     <h4>Premium Plans</h4>
                                     <h2>$149 <sub>/ Month</sub></h2>
                                 </div>
                                 <div className="icon">
                                     <img src="assets/img/cloud.png" alt="img"/>
                                 </div>
                             </div>
                             <ul className="price-list">
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Weekly Backups</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 24/7 system Monitoring</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Free Domain ($9.99 value)</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> Dedicated IP Address</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> 20+ Payment Methods</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                             </ul>
                             <div className="price-button">
                                 <a href="pricing.html" className="theme-btn">Get Started Now <i className="fa-regular fa-arrow-right-long"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                         <div className="pricing-box-items">
                             <div className="pricing-header">
                                 <div className="content">
                                     <h4>Extended Plan</h4>
                                     <h2>$99 <sub>/ Month</sub></h2>
                                 </div>
                                 <div className="icon">
                                     <img src="assets/img/cloud.png" alt="img"/>
                                 </div>
                             </div>
                             <ul className="price-list">
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Weekly Backups</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 24/7 system Monitoring</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Free Domain ($9.99 value)</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> Dedicated IP Address</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> 20+ Payment Methods</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                             </ul>
                             <div className="price-button">
                                 <a href="pricing.html" className="theme-btn">Get Started Now <i className="fa-regular fa-arrow-right-long"></i></a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div id="yearly" className="tab-pane fade" role="tabpanel">
                 <div className="row g-4">
                     <div className="col-xl-4 col-lg-6 col-md-6">
                         <div className="pricing-box-items">
                             <div className="pricing-header">
                                 <div className="content">
                                     <h4>Free Plans</h4>
                                     <h2>$00 <sub>/ Month</sub></h2>
                                 </div>
                                 <div className="icon">
                                     <img src="assets/img/cloud.png" alt="img"/>
                                 </div>
                             </div>
                             <ul className="price-list">
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Weekly Backups</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 24/7 system Monitoring</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Free Domain ($9.99 value)</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> Dedicated IP Address</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> 20+ Payment Methods</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                             </ul>
                             <div className="price-button">
                                 <a href="pricing.html" className="theme-btn">Get Started Now <i className="fa-regular fa-arrow-right-long"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                         <div className="pricing-box-items style-2">
                             <div className="pricing-header">
                                 <div className="content">
                                     <h4>Premium Plans</h4>
                                     <h2>$149 <sub>/ Month</sub></h2>
                                 </div>
                                 <div className="icon">
                                     <img src="assets/img/cloud.png" alt="img"/>
                                 </div>
                             </div>
                             <ul className="price-list">
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Weekly Backups</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 24/7 system Monitoring</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Free Domain ($9.99 value)</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> Dedicated IP Address</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> 20+ Payment Methods</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                             </ul>
                             <div className="price-button">
                                 <a href="pricing.html" className="theme-btn">Get Started Now <i className="fa-regular fa-arrow-right-long"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                         <div className="pricing-box-items">
                             <div className="pricing-header">
                                 <div className="content">
                                     <h4>Extended Plan</h4>
                                     <h2>$99 <sub>/ Month</sub></h2>
                                 </div>
                                 <div className="icon">
                                     <img src="assets/img/cloud.png" alt="img"/>
                                 </div>
                             </div>
                             <ul className="price-list">
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Weekly Backups</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> 24/7 system Monitoring</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1"><i className="fa-regular fa-check"></i> Free Domain ($9.99 value)</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> Dedicated IP Address</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                                 <li>
                                     <span className="price-1 color-2"><i className="fa-solid fa-xmark"></i> 20+ Payment Methods</span>
                                     <span className="icon"><i className="fa-regular fa-circle-question"></i></span>
                                 </li>
                             </ul>
                             <div className="price-button">
                                 <a href="pricing.html" className="theme-btn">Get Started Now <i className="fa-regular fa-arrow-right-long"></i></a>
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

export default Price