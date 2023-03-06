import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
