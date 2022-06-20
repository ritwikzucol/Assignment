import { Col, Row } from "react-bootstrap";
import BannerImage from "./bannerImage";
import CONSTANTS from "./constants";
import './home.css';

const WhySection = () => {
    return (
        <Row className="pt-5">
            <Col xs={12} md={4}>
                <div className="mt-3 mb-5">
                    <h2 className="featureHeading">{CONSTANTS.FEATURES_HEADING}</h2>
                    <p className="featureDesc">{CONSTANTS.FEATURES_DESC}</p>
                </div>
            </Col>
            {CONSTANTS.FEATURES.length > 0 && CONSTANTS.FEATURES.map((item, index) => {
                return (
                    <Col key={item.id} xs={12} md={4}>
                        <div>
                            <div className='features mt-5 mb-5'>
                                <BannerImage path={item.path} altName={`feature ${index}`} imgClass='img-fluid mt-3' />
                                <h4 className="featuresHeading mt-4">{item.heading}</h4>
                                <p className="featuresDescription">{item.description}</p>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
    );
}

export default WhySection;