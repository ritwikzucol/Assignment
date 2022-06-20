import { Col, Nav, Row, Tab } from 'react-bootstrap';
import BannerImage from './bannerImage';
import CONSTANTS from './constants';
import './home.css';

const Industries = () => {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey={`0`}>
                <Row className='mt-5 pt-5'>
                    <Col xs={4} md={6}>
                        <h2 className="industryHeading mb-5 pb-5">Industries We Serve</h2>
                        <Nav variant="pills" className="flex-column mb-5">
                            {CONSTANTS.INDUSTRIES.length > 0 && CONSTANTS.INDUSTRIES.map((item, index) => {
                                return (
                                    <Nav.Item key={index} className='industryList'>
                                        <Nav.Link eventKey={index} className='industryListItem'>{item}</Nav.Link>
                                    </Nav.Item>
                                )
                            })}
                        </Nav>
                    </Col>
                    <Col xs={8} md={6} className="position-relative">
                        <BannerImage path='/article-protection.png' altName='article protection' imgClass='img-fluid articleImg' />
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Industries;