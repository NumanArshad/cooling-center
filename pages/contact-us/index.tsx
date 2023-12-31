import React from 'react'

const ContactUs = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-6 mb-5">
                            If You Have Any Query, Please Contact Us
                        </h1>
                        <p className="mb-4">
                            {/* The contact form is currently inactive. Get a functional and working
                            contact form with Ajax &amp; PHP in a few minutes. Just copy and paste
                            the files, add a little code and you're done.{" "}
                            <a href="https://htmlcodex.com/contact-form">Download Now</a>. */}
                            Our team of experts is available to answer any questions you may have and provide you with the necessary support to ensure your cooling system is functioning properly. Whether you need a repair or a new installation, we are here to help. Contact us today for prompt and reliable service.
                        </p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                        />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject"
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a message here"
                                            id="message"
                                            style={{ height: 100 }}
                                            defaultValue={""}
                                        />
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-5" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="col-lg-6 wow fadeIn"
                        data-wow-delay="0.5s"
                        style={{ minHeight: 450 }}
                    >
                        <div className="position-relative overflow-hidden h-100">
                            <iframe
                                className="position-relative w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9778382932423!2d74.2666702!3d31.4697958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d49e184fdf%3A0x9b273e1700baf10a!2sBlock%20H-2%20Block%20H%202%20Phase%202%20Johar%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1700853782909!5m2!1sen!2s"
                                frameBorder={0}
                                style={{ minHeight: 450, border: 0 }}
                                allowFullScreen={true}
                                aria-hidden="false"
                                tabIndex={0}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs
