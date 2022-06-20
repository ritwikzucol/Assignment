import BannerImage from './bannerImage';
import CONSTANTS from './constants';
import './home.css';
import ResponsiveSlider from './responsiveSlider';

const Benefits = () => {
    return (
        <>
            <h1 className='benefitsHeading mb-5 pb-3 text-center'>{CONSTANTS.BENEFITS_HEADING}</h1>
            <ResponsiveSlider sliderSettings={CONSTANTS.BENEFITS_SLIDER_SETTINGS}>
                {CONSTANTS.BENEFITS.length > 0 && CONSTANTS.BENEFITS.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div className='benefits'>
                                <BannerImage path={item.path} altName={`benefit ${index}`} imgClass='img-fluid benefitImgBack mb-3' />
                                <h4 className='benefitName'>{item.heading}</h4>
                                <p className='benefitDesc'>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </ResponsiveSlider>
        </>
    );
}

export default Benefits;