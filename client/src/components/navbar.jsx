import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import light_swapii from "../assets/img/light_swapii.png";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              alt=""
              src={light_swapii}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Lotes
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/">Inicio</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/">Registrar Lote</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
