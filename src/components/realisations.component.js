import React from 'react'
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpg'
import img_3 from '../images/img_3.jpg'
// import img_4 from '../images/img_4.jpg'
// import img_5 from '../images/img_5.jpg'
// import img_6 from '../images/img_6.jpg'

function Realisations() {
    return (
        <div>
            <section className="site-section" id="work-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="text-black h1 site-section-heading text-center">Réalisations</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <a href="images/img_1.jpg" className="media-1" data-fancybox="gallery">
                        <img src={img_1} alt="Bonzai Tree" className="img-fluid"/>
                        <div className="media-1-content">
                            <h2>Bonzai Tree</h2>
                            <span className="category">Web Application</span>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="images/img_2.jpg" className="media-1" data-fancybox="gallery">
                        <img src={img_2} alt="img2" className="img-fluid"/>
                        <div className="media-1-content">
                            <h2>Simple Woman</h2>
                            <span className="category">Branding</span>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="images/img_3.jpg" className="media-1" data-fancybox="gallery">
                        <img src={img_3} alt="img3" className="img-fluid"/>
                        <div className="media-1-content">
                            <h2>Fruits</h2>
                            <span className="category">Website</span>
                        </div>
                        </a>
                    </div>

                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Realisations
