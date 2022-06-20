import { Image } from "react-bootstrap";

const BannerImage = ({ path, altName, imgClass }) => {
    return (
        <Image src={path} alt={altName} className={imgClass}></Image>
    )
}

export default BannerImage;