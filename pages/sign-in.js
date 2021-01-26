import Link from "next/link";
import { Form, Button, Container, Row, Col } from "../node_modules/react-bootstrap";

const SignIn = () => (
  <Container>
    <Row className="justify-content-center">
    <Col>
        <h1>Sign in</h1>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="Enter user name" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Col>
    </Row>
  </Container>
);
export default SignIn;