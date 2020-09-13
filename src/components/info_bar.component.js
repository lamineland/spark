import React from 'react'

function InfoBar() {
    return (
        <div>
            <div class="site-mobile-menu site-navbar-target">
                <div class="site-mobile-menu-header">
                    <div class="site-mobile-menu-close mt-3">
                    <span class="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div class="site-mobile-menu-body"></div>
            </div>
        
            <div class="border-bottom top-bar py-2 bg-dark" id="home-section">
                <div class="container">
                    <div class="row">
                    <div class="col-md-6">
                        <p class="mb-0">
                        <span class="mr-3"><strong class="text-white">Phone:</strong> <a href="tel://#">+1 234 5678 9101</a></span>
                        <span><strong class="text-white">Email:</strong> <a href="#">info@yourdomain.com</a></span>
                        </p>
                    </div>
                    <div class="col-md-6">
                        <ul class="social-media">
                        <li><a href="#" class="p-2"><span class="icon-facebook"></span></a></li>
                        <li><a href="#" class="p-2"><span class="icon-twitter"></span></a></li>
                        <li><a href="#" class="p-2"><span class="icon-instagram"></span></a></li>
                        <li><a href="#" class="p-2"><span class="icon-linkedin"></span></a></li>
                        </ul>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default InfoBar
