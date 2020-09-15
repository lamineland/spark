import React from 'react'

function Contact() {
    return (
        <div>
            <section className="site-section bg-light" id="contact-section">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="text-black h1 site-section-heading">Contactez-nous</h2>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 mb-5">
                            <form action="#" className="p-5 bg-white">
                                <h2 className="h4 text-black mb-5">Contact Form</h2> 
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">Prénom</label>
                                        <input type="text" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-black" htmlFor="lname">Nom</label>
                                        <input type="text" id="lname" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                    <label className="text-black" htmlFor="email">Email</label> 
                                    <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    
                                    <div className="col-md-12">
                                    <label className="text-black" htmlFor="subject">Object</label> 
                                    <input type="subject" id="subject" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                    <label className="text-black" htmlFor="message">Message</label> 
                                    <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Ecrivez votre message ici"></textarea>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                    <input type="submit" value="Envoyer" className="btn btn-primary btn-md text-white" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-5">
                            
                            <div className="p-4 mb-3 bg-white">
                            <p className="mb-0 font-weight-bold">Adresse</p>
                            <p className="mb-4">Cité keur Damel, en face cité Mixta</p>

                            <p className="mb-0 font-weight-bold">Téléphone</p>
                            <p className=" mb-4"><a href="tel:221778281667">+221 77 828 16 67</a></p>

                            <p className="mb-0 font-weight-bold">Adresse Email</p>
                            <p className="mb-0"><a href="mailto:contact@spark-numeric.com">contact@spark-numeric.com</a></p>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
