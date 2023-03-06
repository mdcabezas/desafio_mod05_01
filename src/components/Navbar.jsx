import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="navbar" />
                
                <Navbar.Brand className="ms-auto">Happy Cake 🍰</Navbar.Brand>
                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                            <Link to="/contacto" className="text-white ms-3 text-decoration-none">📒 Contacto </Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}
