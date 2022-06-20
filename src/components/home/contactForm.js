import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
    return (
        <>
            <Form className="p-2">
                <Form.Group className="mb-3">
                    <Form.Control type="text" className="inputFields" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" className="inputFields" placeholder="Company Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" className="inputFields" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" className="inputFields" placeholder="Mobile Number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" className="inputFields" placeholder="Company Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" className="inputFields" rows={3} placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit" className="contactFormBtn w-100 border-0 p-3">
                    SEND MESSAGE
                </Button>
            </Form>
        </>
    );
}

export default ContactForm;