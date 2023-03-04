import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

export default function Contacto() {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuentanos, ¿en que te podemos ayudar?</h1>
      <ContactForm />
    </Container>
  );
};
