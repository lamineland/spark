import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                        <div className="col-md-5">
                            <h2 className="footer-heading mb-4">A propos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h2 className="footer-heading mb-4">Features</h2>
                            <ul className="list-unstyled">
                            <li><a href="#">A propos</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2 className="footer-heading mb-4">Follow Us</h2>
                            <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="footer-heading mb-4">Inscrivez-vous à la Newsletter</h2>
                        <form action="#" method="post">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                <button className="btn btn-primary text-white" type="button" id="button-addon2">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <div className="border-top pt-5">
                        <p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Fait <i className="icon-heart text-danger" aria-hidden="true"></i> par <a href="https://colorlib.com" target="_blank" >Spark Numeric</a>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
