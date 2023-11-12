import Link from 'next/link'
import React from 'react'

export const CustomFooter = () => {
    return (<div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <h1 className="text-white mb-4"><img className="img-fluid me-3" style={{ "height": "3rem" }} src="img/business-logo-nobg.png" alt="" /></h1>
                    <span>Our service center is renowned for providing exceptional cooling and heating solutions. With years of experience and expertise in the industry, we have established ourselves as the best in the business. Our team of highly skilled technicians is dedicated to delivering top-notch service to our valued customers.</span>
                </div>
                <div className="col-md-6">
                    <h5 className="text-light mb-4">Newsletter</h5>
                    {/* <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p> */}
                    <p></p>
                    <div className="position-relative">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-light mb-4">Get In Touch</h5>
                    <p><i className="fa fa-map-marker-alt me-3" />258 H Block near Emporium Mall Block H2 phase 2 Johar Town 54782, Punjāb, Lahore, Pakistan</p>
                    <p><i className="fa fa-phone-alt me-3" />+92 326 0838264</p>
                    <p className='d-flex align-items-center'><i className="fa fa-envelope me-3 " />bismillahcoolingcenter45@gmail.com</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-light mb-4">Our Services</h5>
                    <a className="btn btn-link" href="">AC Installation</a>
                    <a className="btn btn-link" href="">Cooling Services</a>
                    <a className="btn btn-link" href="">Heating Services</a>
                    <a className="btn btn-link" href="">Annual Inspections</a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <Link className="btn btn-link" href="/about-us">About Us</Link>
                    <Link className="btn btn-link" href="/contact-us">Contact Us</Link>
                    <Link className="btn btn-link" href="/services">Our Services</Link>
                    <a className="btn btn-link" href="">Terms &amp; Condition</a>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Follow Us</h5>
                    <div className="d-flex">
                        <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-youtube" /></a>
                        <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-linkedin-in" /></a>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="text-center  mb-3 mb-md-0">
                        © <a href="#">Bismillah Cooling Center</a>, All Right Reserved.
                    </div>
                    {/* <div className="col-md-6 text-center text-md-end"> */}
                    {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                    {/* Designed By <a href="https://htmlcodex.com">HTML Codex</a>  Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    )
}
