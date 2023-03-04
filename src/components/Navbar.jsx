import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Container direction="horizontal">
                    <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">📒 Contacto </Link>
                    <Navbar.Brand className="ms-auto">Happy Cake 🍰</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}