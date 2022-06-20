import { Button } from "react-bootstrap";

const CommonButton = ({ btnClassName, children }) => {
    return (
        <>
            <Button className={btnClassName} variant="primary">{children}</Button>
        </>
    );
}

export default CommonButton;