import { Col, Row } from "react-bootstrap";
import BannerImage from "../home/bannerImage";
import CONSTANTS from "../home/constants";
import JoinCommunity from "./join";
import './footer.css'

const FooterData = () => {
    return (
        <>
            <Row className="text-white">
                <Col xs={12} sm={6} md={4} lg={3} className="footerContent">
                    <BannerImage path='/bytescarelogo-footer.png' altName='Logo footer' imgClass='img-fluid mb-4' />
                    <p>{CONSTANTS.ADDRESS.address1.address}</p>
                    <p className="fw-bold">Phone: {CONSTANTS.ADDRESS.contact}</p>
                    <p className="fw-bold">Email: <a href={`mailto:${CONSTANTS.ADDRESS.email}`} className='text-white text-decoration-none'>{CONSTANTS.ADDRESS.email}</a></p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="footerContent">
                    <h3>{CONSTANTS.USEFUL_LINKS_HEADING}</h3>
                    {CONSTANTS.USEFUL_LINKS.length > 0 && CONSTANTS.USEFUL_LINKS.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="footerContent">
                    <h3>{CONSTANTS.KEY_SERVICES_HEADING}</h3>
                    {CONSTANTS.KEY_SERVICES.length > 0 && CONSTANTS.KEY_SERVICES.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="footerContent">
                    <JoinCommunity />
                </Col>
            </Row>
        </>
    );
}

export default FooterData;