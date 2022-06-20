import { Button, Form } from "react-bootstrap";

const JoinCommunity = () => {
    return (
        <>
            <h3>Join Our Community</h3>
            <p>Stay up to date with our products and offerings</p>
            <Form>
                <Form.Group className="mb-3 footerForm">
                    <Form.Control type="email" className="footerInput" placeholder="Enter email address" />
                    <Button variant="primary" type="submit" className="footerBtn border-0">
                        Join Us
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default JoinCommunity;