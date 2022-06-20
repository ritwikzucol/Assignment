import { Table } from "react-bootstrap";
import BannerImage from "./bannerImage";
import CONSTANTS from "./constants";

const Platforms = () => {
    return (
        <>
            <h1 className="platformHeading text-center mb-5">{CONSTANTS.PLATFORMS_HEADING}</h1>
            <div>
                <Table responsive bordered className="platformsTable text-center">
                    <tbody>
                        <tr>
                            {CONSTANTS.PLATFORMS.length > 0 && CONSTANTS.PLATFORMS.slice(0, 4).map((item, index) => {
                                return (
                                    <td key={item.id}>
                                        <p><BannerImage path={item.path} altName={`platform ${index}`} imgClass='img-fluid mx-3' />{item.name}</p>
                                    </td>
                                )
                            })}
                        </tr>
                        <tr>
                            {CONSTANTS.PLATFORMS.length > 0 && CONSTANTS.PLATFORMS.slice(4, 8).map((item, index) => {
                                return (
                                    <td key={item.id}>
                                        <p><BannerImage path={item.path} altName={`platform ${index}`} imgClass='img-fluid mx-3' />{item.name}</p>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Platforms;