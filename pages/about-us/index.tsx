import { PageHeader } from '@/components/pageHeader'
import React from 'react'
interface Props {
    showPageHeader?: boolean
}
const Aboutus = ({ showPageHeader = true }: Props) => {
    return (
        <>
            {showPageHeader && <PageHeader title='About Us' breadcrumbTitle='About' />}
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
                                                <h5 className="mb-0">+92 305 4349446</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-lg-square bg-primary rounded-circle me-3 aspect-ratio-default">
                                                    <i className="fa fa-envelope text-white" />
                                                </div>
                                                <h5 className="mb-0">bismillahcoolingcenter45@gmail.com</h5>
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
            {/* Facts End */}</>
    )
}

export default Aboutus