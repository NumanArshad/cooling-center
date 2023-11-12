import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const CustomHeader = () => {
    const route = useRouter()
    return (
        <>
            {/* Spinner start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status" />
            </div>
            {/* Spinner End */}

            {/* TopBar */}
            <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-phone-alt me-2"></small>
                            <small>+92 326 0838264</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="far fa-envelope-open me-2"></small>
                            <small>bismillahcoolingcenter45@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <ol className="breadcrumb justify-content-end mb-0">
                            <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Terms</a></li>
                            <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Privacy</a></li>
                            <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Support</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* Top Bar */}

            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0"><img className="img-fluid me-3" src="img/business-logo-nobg.png" alt="" /></h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
                        <Link href="/" className={`nav-item nav-link ${route.pathname === "/" ? `active` : ``}`}>Home</Link>
                        <Link href="/about-us" className={`nav-item nav-link ${route.pathname === "/about-us" ? `active` : ``}`}>About Us</Link>
                        <Link href="/services" className={`nav-item nav-link ${route.pathname === "/services" ? `active` : ``}`}>Our Services</Link>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light border-0 m-0">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="quote.html" className="dropdown-item">Free Quote</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                        <Link href="/contact-us" className={`nav-item nav-link ${route.pathname === "/contact-us" ? `active` : ``}`}>Contact Us</Link>
                    </div>
                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}</>
    )
}
