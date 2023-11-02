import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2"></small>
              <small>info@example.com</small>
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
          <h1 className="m-0"><img className="img-fluid me-3" src="img/icon/icon-02-primary.png" alt="" />AirCon</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.html" className="nav-item nav-link">About Us</a>
            <a href="service.html" className="nav-item nav-link">Our Services</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="feature.html" className="dropdown-item">Features</a>
                <a href="quote.html" className="dropdown-item">Free Quote</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact Us</a>
          </div>
          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}


      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">We Provide Best AC Repair Services</h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">Quality Heating & Air Condition Services</h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">We Provide Best AC Repair Services</h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">Welcome To Best Cooling &amp; Heating Service Center</h1>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 me-3" src="img/icon/icon-07-primary.png" alt="" />
                      <h5 className="mb-0">Expert Technician</h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 me-3" src="img/icon/icon-09-primary.png" alt="" />
                      <h5 className="mb-0">Best Quality Services</h5>
                    </div>
                  </div>
                </div>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="border-top mt-4 pt-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                          <i className="fa fa-phone-alt text-white" />
                        </div>
                        <h5 className="mb-0">+012 345 6789</h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                          <i className="fa fa-envelope text-white" />
                        </div>
                        <h5 className="mb-0">info@example.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style={{ marginTop: '25%' }} />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}


      {/* Facts Start */}
      <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
              <span className="text-primary">Happy Clients</span>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
              <span className="text-primary">Projects Succeed</span>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
              <span className="text-primary">Awards Achieved</span>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
              <span className="text-primary">Team Members</span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">Few Reasons Why People Choosing Us!</h1>
              <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div className="d-flex mb-5">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <img className="img-fluid" src="img/icon/icon-08-light.png" alt="" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Trusted Service Center</h5>
                  <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</span>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <img className="img-fluid" src="img/icon/icon-10-light.png" alt="" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Reasonable Price</h5>
                  <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</span>
                </div>
              </div>
              <div className="d-flex mb-0">
                <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <img className="img-fluid" src="img/icon/icon-06-light.png" alt="" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">24/7 Supports</h5>
                  <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative rounded overflow-hidden h-100" style={{ minHeight: '400px' }}>
                <img className="position-absolute w-100 h-100" src="img/feature.jpg" alt="" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <h1 className="display-6 mb-5">We Provide professional Heating &amp; Cooling Services</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <img className="img-fluid" src="img/service-1.jpg" alt="" />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img className="img-fluid" src="img/icon/icon-01-light.png" alt="" />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">AC Installation</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <img className="img-fluid" src="img/service-2.jpg" alt="" />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img className="img-fluid" src="img/icon/icon-02-light.png" alt="" />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">Cooling Services</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item">
                <img className="img-fluid" src="img/service-3.jpg" alt="" />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img className="img-fluid" src="img/icon/icon-03-light.png" alt="" />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">Heating Services</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <img className="img-fluid" src="img/service-4.jpg" alt="" />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img className="img-fluid" src="img/icon/icon-04-light.png" alt="" />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">Maintenance &amp; Repair</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <img className="img-fluid" src="img/service-5.jpg" alt="" />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img className="img-fluid" src="img/icon/icon-05-light.png" alt="" />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">Indoor Air Quality</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item">
                <img className="img-fluid" src="img/service-6.jpg" alt="" />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img className="img-fluid" src="img/icon/icon-06-light.png" alt="" />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">Annual Inspections</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}


      {/* Quote Start */}
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 quote-text" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
              <div className="h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn" data-wow-delay="0.1s">
                <h1 className="text-white mb-4">For Individuals And Organisations</h1>
                <p className="text-light mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <a href="" className="align-self-start btn btn-primary py-3 px-5">More Details</a>
              </div>
            </div>
            <div className="col-lg-6 quote-form" data-parallax="scroll" data-image-src="img/carousel-2.jpg">
              <div className="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn" data-wow-delay="0.5s">
                <div className="bg-white p-4 p-sm-5">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="gname" placeholder="Gurdian Name" />
                        <label htmlFor="gname">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="gmail" placeholder="Gurdian Email" />
                        <label htmlFor="gmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="cname" placeholder="Child Name" />
                        <label htmlFor="cname">Your Mobile</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="cage" placeholder="Child Age" />
                        <label htmlFor="cage">Service Type</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '80px' }} defaultValue={""} />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary py-3 px-5" type="submit">Get A Free Quote</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary rounded-circle m-1" href=""><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}


      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <h1 className="display-6 mb-5">What They Say About Our Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <img className="img-fluid mx-auto mb-4" src="img/testimonial-1.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <img className="img-fluid mx-auto mb-4" src="img/testimonial-2.jpg" alt="" />
                  <p className="fs-5">check</p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <img className="img-fluid mx-auto mb-4" src="img/testimonial-3.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h1 className="text-white mb-4"><img className="img-fluid me-3" src="img/icon/icon-02-light.png" alt="" />AirCon</h1>
              <span>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</span>
            </div>
            <div className="col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
              <div className="position-relative">
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Get In Touch</h5>
              <p><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
              <p><i className="fa fa-envelope me-3" />info@example.com</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Our Services</h5>
              <a className="btn btn-link" href="">AC Installation</a>
              <a className="btn btn-link" href="">Cooling Services</a>
              <a className="btn btn-link" href="">Heating Services</a>
              <a className="btn btn-link" href="">Annual Inspections</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Our Services</a>
              <a className="btn btn-link" href="">Terms &amp; Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Follow Us</h5>
              <div className="d-flex">
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-twitter" /></a>
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-youtube" /></a>
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a href="#">Your Site Name</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>  Distributed by <a href="https://themewagon.com">ThemeWagon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}
