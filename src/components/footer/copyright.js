import CONSTANTS from "../home/constants";

const Copyright = () => {
    return (
        <div className="copyright text-center p-3">
            <p className="copyrightData">{CONSTANTS.COPYRIGHT}</p>
        </div>
    );
}

export default Copyright;