import BannerImage from "./bannerImage";
import CONSTANTS from "./constants";
import ResponsiveSlider from "./responsiveSlider";

const Testiomonials = () => {
    return (
        <>
            <h1 className="platformHeading text-center mb-5">{CONSTANTS.TESTIMONIALS_HEADING}</h1>
            <ResponsiveSlider sliderSettings={CONSTANTS.TESTIMONIALS_SLIDER_SETTINGS}>
                {CONSTANTS.TESTIMONIALS.length > 0 && CONSTANTS.TESTIMONIALS.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div className="testiomonials">
                                <p className="testiomonial mb-4">{item.desc}</p>
                                <div className="d-flex align-items-start">
                                    <BannerImage path={item.path} altName={`testimonial ${index}`} imgClass='img-fluid' />
                                    <div className="mx-3 mt-1">
                                        <p className="testiomonialName">{item.name}</p>
                                        <p className="testiomonialPosition">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ResponsiveSlider>
        </>
    );
}

export default Testiomonials;