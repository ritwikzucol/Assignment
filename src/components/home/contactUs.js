import { Col, Row } from "react-bootstrap";
import BannerImage from "./bannerImage";
import CONSTANTS from "./constants";
import ContactForm from "./contactForm";

const ContactUs = () => {
    return (
        <>
            <h1 className='platformHeading text-center my-5'>{CONSTANTS.CONTACTUS_HEADING}</h1>
            <Row>
                <Col xs={12} md={6}>
                    <div className="blocks p-3">
                        <Row>
                            <Col xs={2}>
                                <BannerImage path={CONSTANTS.ADDRESS.addressImg} altName="address" imgClass='img-fluid' />
                            </Col>
                            <Col xs={10}>
                                <h2 className="contactHeading">Our Address</h2>
                                <h3 className="contactSubHeading">{CONSTANTS.ADDRESS.address1.name}</h3>
                                <p className="address">{CONSTANTS.ADDRESS.address1.address}</p>
                                <div className="line my-3"></div>
                                <h3 className="contactSubHeading">{CONSTANTS.ADDRESS.address2.name}</h3>
                                <p className="address">{CONSTANTS.ADDRESS.address2.address}</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="blocks p-3">
                        <Row>
                            <Col xs={2}>
                                <BannerImage path={CONSTANTS.ADDRESS.emailImg} altName="email" imgClass='img-fluid' />
                            </Col>
                            <Col xs={10}>
                                <h2 className="contactHeading">Email Us</h2>
                                <a href={`mailto:${CONSTANTS.ADDRESS.email}`} className="email">{CONSTANTS.ADDRESS.email}</a>
                            </Col>
                        </Row>
                    </div>
                    <div className="blocks p-3">
                        <Row>
                            <Col xs={2}>
                                <BannerImage path={CONSTANTS.ADDRESS.contactImg} altName="email" imgClass='img-fluid' />
                            </Col>
                            <Col xs={10}>
                                <h2 className="contactHeading">Contact Us</h2>
                                <p className="email">{CONSTANTS.ADDRESS.contact}, <BannerImage path={CONSTANTS.ADDRESS.whatsappImg} altName="whatsapp" imgClass='img-fluid align-baseline' /> {CONSTANTS.ADDRESS.whatsapp}</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="blocks p-3">
                        <ContactForm />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default ContactUs;