import React from 'react'
import './FooterSection.css'

function FooterSection() {
    return (
        <main className='' >
            <div className='d-flex flex-column flex-md-row black-section rounded-custom-footer py-2 ' >

                <div className='container d-flex flex-column flex-md-row'>

                    <div className='d-flex  col-md-6  pb-2 '>
                        <p className=' mb-0 mt-0 heading-text-footer-section'><span className='text-decoration-underline text-decor' >Get</span> Connected With Us</p>
                    </div>

                    <div className='d-flex icons-section pb-1  col-md-6 align-items-center justify-content-end'>
                        <div className='d-flex col-12 col-lg-9 border border-2 border-success rounded-pill px-1 justify-content-between   '  >
                            <i class="bi bi-facebook fa-2x"></i>
                            <i class="bi bi-instagram fa-2x"></i>
                            <i class="bi bi-twitter-x fa-2x"></i>
                            <i class="bi bi-google fa-2x"></i>
                            <i class="bi bi-youtube fa-2x"></i>
                            <i class="bi bi-linkedin fa-2x"></i>
                            <i class="bi bi-pinterest fa-2x"></i>
                            <i class="bi bi-wordpress fa-2x"></i>
                        </div>
                    </div>

                </div>

            </div>
            <footer >
                <div class="container">
                    <div class="row justify-content-center ">
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="single-box d-flex flex-column ps-sm-4 ">
                                <h2 className='text-decoration-underline text-decoration-danger '>Contact Us</h2>
                                <ul>
                                    <li><a href="#">Web Hosting</a></li>
                                    <li><a href="#">Cloud Hosting</a></li>
                                    <li><a href="#">CMS Hosting</a></li>
                                    <li><a href="#">WordPress Hosting</a></li>
                                    <li><a href="#">Email Hosting</a></li>
                                    <li><a href="#">VPS Hosting</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="single-box">
                                <h2>Useful Links</h2>
                                <ul>
                                    <li><a href="#">Web Hosting</a></li>
                                    <li><a href="#">Cloud Hosting</a></li>
                                    <li><a href="#">CMS Hosting</a></li>
                                    <li><a href="#">WordPress Hosting</a></li>
                                    <li><a href="#">Email Hosting</a></li>
                                    <li><a href="#">VPS Hosting</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="single-box ">
                                <h2>Security Standards</h2>
                                <ul>
                                    <li><a href="#">Web Hosting</a></li>
                                    <li><a href="#">Cloud Hosting</a></li>
                                    <li><a href="#">CMS Hosting</a></li>
                                    <li><a href="#">WordPress Hosting</a></li>
                                    <li><a href="#">Email Hosting</a></li>
                                    <li><a href="#">VPS Hosting</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="single-box ">
                                <h2>We are Authorized</h2>
                                <ul>
                                    <li><a href="#">Web Hosting</a></li>
                                    <li><a href="#">Cloud Hosting</a></li>
                                    <li><a href="#">CMS Hosting</a></li>
                                    <li><a href="#">WordPress Hosting</a></li>
                                    <li><a href="#">Email Hosting</a></li>
                                    <li><a href="#">VPS Hosting</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-sm-3 ms-5">
                            <div class="single-box ">
                                <h2>Our Partners</h2>
                                <ul>
                                    <li><a href="#">Web Hosting</a></li>
                                    <li><a href="#">Cloud Hosting</a></li>
                                    <li><a href="#">CMS Hosting</a></li>
                                    <li><a href="#">WordPress Hosting</a></li>
                                    <li><a href="#">Email Hosting</a></li>
                                    <li><a href="#">VPS Hosting</a></li>
                                </ul>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default FooterSection