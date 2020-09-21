import React from 'react'
import hero_1 from '../images/hero_1.jpg'

function Home() {
    return (
        <div>
            <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${hero_1})` }} data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                                        
                            <div className="row justify-content-center mb-4">
                            <div className="col-md-8 text-center">
                                <h1>We Love To Build <span className="typed-words">Sparkly</span></h1>
                                {/* <p className="lead mb-5">Free Web Template by <a href="#" target="_blank">Colorlib</a></p> */}
                                <div><a data-fancybox data-ratio="2" href="https://vimeo.com/317571768" className="btn btn-primary btn-md">Watch Video</a></div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Home