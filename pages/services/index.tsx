import { PageHeader } from '@/components/pageHeader'
import React from 'react'
interface Props {
    showPageHeader?: boolean
}
const Services = ({ showPageHeader = true }: Props) => {
    return (
        <>
            {showPageHeader && <PageHeader title='Services' breadcrumbTitle='Services' />}

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
        </>
    )
}


export default Services