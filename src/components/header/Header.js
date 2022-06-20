import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap'
import CommonButton from '../commonButton'
import './header.css'

const Header = () => {
    return (
        <>
            <div>
                <Navbar className='headerBackground py-3' collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                        <Container>
                            <Image src='/bytescarelogo.png' className='mx-4' />
                        </Container>
                    </Navbar.Brand>
                    <Navbar.Toggle className='mx-2' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='active'>Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Product & Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#test">Test</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <Nav.Link href="#faqs">FAQ’s</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <CommonButton btnClassName="headerBtn mx-4">Request a Demo</CommonButton>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>)
        ;
}

export default Header;