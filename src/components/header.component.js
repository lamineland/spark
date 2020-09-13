import React from 'react'

function Header() {
    return (
        <div>
            <header className="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-11 col-xl-3">
                            <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">Spark Numeric<span className="text-primary">.</span> </a></h1>
                        </div>
                        <div className="col-12 col-md-8 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="#home-section" className="nav-link">Accueil</a></li>
                                    <li className="has-children">
                                        <a href="#about-section" className="nav-link">About</a>
                                        <ul className="dropdown">
                                        <li><a href="#about-section">Specialties</a></li>
                                        <li><a href="#team-section">Our Team</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#services-section" className="nav-link">Services</a>
                                    </li>
                                    <li><a href="#blog-section" className="nav-link">Formations</a></li>
                                    <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative', top:'3px'}}><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header
