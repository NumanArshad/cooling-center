import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CustomHeader } from '@/components/layouts/header'
import { CustomFooter } from '@/components/layouts/footer'
import Aboutus from './about-us'
import Services from './services'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></Link>

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
      <Aboutus showPageHeader={false} />
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
      <Services showPageHeader={false} />
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

    </>
  )
}
