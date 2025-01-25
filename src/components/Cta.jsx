import React from 'react'

const Cta = () => {
  return (
    <section className="cta-counter-section fix section-padding pt-0">
        <div className="bg-shape">
            <img src="assets/img/bg-shape.png" alt="img"/>
        </div>
        <div className="container">
            <div className="cta-counter-wrapper bg-cover" style={{
                backgroundImage : `url('/assets/img/counter-bg.jpg')`
            }}>
                <div className="shape-img">
                    <img src="assets/img/counter-shape.png" alt="img"/>
                </div>
                <div className="counter-box-area">
                    <div className="counter-text wow fadeInUp" data-wow-delay=".3s">
                        <h2>
                            <span className="count">20.5</span>K
                        </h2>
                        <p>Projects Done</p>
                    </div>
                    <div className="counter-text wow fadeInUp" data-wow-delay=".5s">
                        <h2>
                            <span className="count">100.5</span>K
                        </h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="counter-text wow fadeInUp" data-wow-delay=".7s">
                        <h2>
                            <span className="count">150.5</span>K
                        </h2>
                        <p>Team Members</p>
                    </div>
                    <a href="about.html" className="circle-button">
                        <i className="fa-regular fa-arrow-up-right"></i>
                        <span className="text-circle">
                            <img src="assets/img/text-circlw.png" alt=""/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta