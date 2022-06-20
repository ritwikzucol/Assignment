import { Col, Row } from "react-bootstrap";
import BannerImage from "./bannerImage";
import CONSTANTS from "./constants";
import './home.css'

const ProductsServices = () => {

    function imageSection(pathName, altData) {
        return (
            <div className="text-center">
                <BannerImage path={pathName} altName={`product ${altData}`} imgClass='img-fluid' />
            </div>
        );
    }

    function detailsSection(dataHeading, dataDesc, dataLink) {
        return (
            <>
                <h1 className="psHead mt-5">{dataHeading}</h1>
                <p className="psDesc">{dataDesc}</p>
                <p className="psLink">{dataLink} <BannerImage path='/Arrow_Forward.png' altName='arrow' imgClass='img-fluid mx-1' /> </p>
            </>
        );
    }

    return (
        <>
            <h1 className="psHeading text-center my-5 pb-4">{CONSTANTS.PRODUCTS_SERVICES_HEADING}</h1>
                {CONSTANTS.PRODUCTS_SERVICES.length > 0 && CONSTANTS.PRODUCTS_SERVICES.map((item, index) => {
                    return (
                        item.leftImage ?
                            <Row key={`left ${index}`}>
                                <Col md={12} lg={6}>
                                    {imageSection(item.path, index)}
                                </Col>
                                <Col md={12} lg={6}>
                                    {detailsSection(item.heading, item.desc, item.linkName)}
                                </Col>
                            </Row>
                            :
                            <Row key={`right ${index}`}>
                                <Col md={12} lg={6}>
                                    {detailsSection(item.heading, item.desc, item.linkName)}
                                </Col>
                                <Col md={12} lg={6}>
                                    {imageSection(item.path, index)}
                                </Col>
                            </Row>
                    )
                })}
        </>
    );
}

export default ProductsServices;