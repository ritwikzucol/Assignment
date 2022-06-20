import { Container } from 'react-bootstrap'
import './home.css'
import CommonButton from '../commonButton'
import CONSTANTS from './constants'
import BannerImage from './bannerImage'
import WhySection from './whySection'
import Industries from './industries'
import Benefits from './benefits'
import ProductsServices from './productsServices'
import Platforms from './platforms'
import Testiomonials from './testimonials'
import ContactUs from './contactUs'
import FooterData from '../footer/FooterData'
import Copyright from '../footer/copyright'

const Home = () => {
    return (
        <>
            <div>
                <Container className='text-center upperBack'>
                    <h1 className='bannerHeading fw-bold mt-5'>{CONSTANTS.HEADING_NAME}</h1>
                    <div className={CONSTANTS.UNDERHEADING_CLASS}>{CONSTANTS.UNDERHEADING_1}</div>
                    <div className={CONSTANTS.UNDERHEADING_CLASS}>{CONSTANTS.UNDERHEADING_2}</div>
                    <CommonButton btnClassName="headerBtn mt-5" >Request a Demo</CommonButton>
                </Container>
                <div className='bannerBack'>
                    <Container className='text-center'>
                        <BannerImage path='/Hero Image.png' altName='Hero image' imgClass='img-fluid' />
                        <p className='fw-bold fs-4 colorBannerText mt-5'>Trusted By 40+ Companies</p>
                        {CONSTANTS.BANNER_IMAGES.length > 0 && CONSTANTS.BANNER_IMAGES.map((item, index) => {
                            return (
                                <BannerImage path={item} key={item} altName={`company ${index}`} imgClass='img-fluid mx-4 mb-5 imgBack' />
                            )
                        })}
                    </Container>
                </div>
                <Container className='mt-5'>
                    <WhySection />
                </Container>
                <div className='industryBack mt-5 py-5'>
                    <Container className='mb-5 pb-5'>
                        <Industries />
                    </Container>
                </div>
                <Container className='mt-5'>
                    <Benefits />
                </Container>
                <div className='psBack'>
                    <Container className='mt-5 pt-5'>
                        <ProductsServices />
                    </Container>
                </div>
                <Container className='mt-5 pt-3'>
                    <Platforms />
                </Container>
                <Container className='mt-5 pt-3'>
                    <Testiomonials />
                </Container>
                <div className='contactUsBack'>
                    <Container className='mt-5 pt-3 pb-5'>
                        <ContactUs />
                    </Container>
                </div>
                <div className='footerBack pt-5'>
                    <Container className='pt-5'>
                        <FooterData />
                    </Container>
                    <Copyright />
                </div>
            </div>
        </>
    );
}

export default Home;