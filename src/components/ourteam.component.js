import React from 'react'
import person_2 from '../images/person_2.jpg'
import person_3 from '../images/person_3.jpg'
import person_4 from '../images/person_4.jpg'

function OurTeam() {
    return (
        <div>
            <div className="site-section border-bottom" id="team-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center">
                        <h2 className="text-black h1 site-section-heading">Notre équipe</h2>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                            <div className="person text-center">
                            <img src={person_2} alt="person2" className="img-fluid rounded-circle w-50 mb-5"/>
                            <h3>Lamine Sané</h3>
                            <p className="position text-muted">Co-Founder, Responsable développement</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            {/* <ul className="ul-social-circle">
                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                <li><a href="#"><span className="icon-twitter"></span></a></li>
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                            </ul> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                            <div className="person text-center">
                            <img src={person_3} alt="person3" className="img-fluid rounded-circle w-50 mb-5"/>
                            <h3>Abdoullah Diallo</h3>
                            <p className="position text-muted">CEO</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            
                            
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
                            <div className="person text-center">
                            <img src={person_4} alt="person4" className="img-fluid rounded-circle w-50 mb-5"/>
                            <h3>Cheikh Sall</h3>
                            <p className="position text-muted">Technicien réseau</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
