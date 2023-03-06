import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                            <Link to="/contacto" className="text-white ms-3 text-decoration-none">📒 Contacto </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="ms-auto">Happy Cake 🍰</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
