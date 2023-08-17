import "./App.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [lote, setNLote] = useState("");
  const [responsable1_N, setresponsable1N] = useState("");
  const [responsable2_N, setresponsable2N] = useState("");
  const [responsable3_N, setresponsable3N] = useState("");
  const [responsable1_A, setresponsable1A] = useState("");
  const [responsable2_A, setresponsable2A] = useState("");
  const [responsable3_A, setresponsable3A] = useState("");
  const [inicio, setInicio] = useState("");
  const [terminacion, setTerminacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [piezas, setPiezas] = useState("");
  const [piezas_defectuosas, setPiezas_defectuosas] = useState("");

  const createUser = async (event) => {
    event.preventDefault()
    await Axios.post("http://localhost:3003/lote", {
      Lote: lote,
      Responsable1_N: responsable1_N,
      Responsable1_A: responsable1_A,
      Responsable2_N: responsable2_N,
      Responsable2_A: responsable2_A,
      Responsable3_N: responsable3_N,
      Responsable3_A: responsable3_A,
      Inicio: inicio,
      Terminacion: terminacion,
      Tipo: tipo,
      Piezas: piezas,
      Piezas_defectuosas: piezas_defectuosas,
    }, {
    params: {
      inicio: inicio,
      terminacion: terminacion
    }})
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ backgroundColor: '#343a40'}}>
      <Navbar />
      <Form onSubmit={createUser} className="mt-4 text-white " style={{ Color: 'white'}}>
      <Form.Group className="w-50 mx-auto" controlId="email">
  <Form.Label className="text-white">Número de lote:</Form.Label>
  <Form.Control
    type="number"
    placeholder="Número de lote"
    required
    onChange={(e) => {
      setNLote(e.target.value);
    }}
    className="bg-dark text-white"
  />
</Form.Group>

{/* responsables */}
<Row className="mx-auto mt-3">
      <Form.Label className="text-black bg-light">Responsable 1:</Form.Label>
  <Form.Group
    as={Col}
    className="w-50 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white ">Nombre</Form.Label>
    <Form.Control 
      type="text"
      placeholder="Responsable 1"
      required
      onChange={(e) => {
        setresponsable1N(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>

  <Form.Group
    as={Col}
    className="w-50 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Apellido</Form.Label>
    <Form.Control 
      type="text"
      placeholder="Responsable 1"
      required
      onChange={(e) => {
        setresponsable1A(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>
  </Row>

{/* responsable 2 */}
  <Row className="mx-auto mt-3">
  <Form.Label className="text-black bg-light">Responsable 2:</Form.Label>
  <Form.Group
    as={Col}
    className="w-50 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Nombre:</Form.Label>
    <Form.Control
      type="text"
      placeholder="Responsable 2"
      required
      name="email"
      onChange={(e) => {
        setresponsable2N(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>

  <Form.Group
    as={Col}
    className="w-50 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Apellido:</Form.Label>
    <Form.Control
      type="text"
      placeholder="Responsable 2"
      required
      name="email"
      onChange={(e) => {
        setresponsable2A(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>
  </Row>

{/* responsable 3 */}
  <Row className="mx-auto mt-3">
  <Form.Label className="text-black bg-light">Responsable 3:</Form.Label>
  <Form.Group
    as={Col}
    className="w-50 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Nombre:</Form.Label>
    
    <Form.Control
      type="text"
      placeholder="Responsable 3"
      required
      name="email"
      onChange={(e) => {
        setresponsable3N(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>

  <Form.Group
    as={Col}
    className="w-50 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Apellido:</Form.Label>
    <Form.Control
      type="text"
      placeholder="Responsable 3"
      required
      name="email"
      onChange={(e) => {
        setresponsable3A(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>
</Row>

{/* otro row */}
<Row className="mx-auto mt-3 justify-content-center">
  <Form.Group
    className="w-50 mt-3"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Fecha de inicio de producción:</Form.Label>
    <Form.Control
      type="date"
      placeholder="Fecha de inicio de producción"
      required
      name="email"
      onChange={(e) => {
        setInicio(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>
  <Form.Group
    className="w-50 mt-3"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Fecha de terminación de producción:</Form.Label>
    <Form.Control
      type="date"
      placeholder="Fecha de terminación de producción"
      required
      name="email"
      onChange={(e) => {
        setTerminacion(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>
</Row>

{/* otro row 3RO*/}
<Row className="mx-auto mt-3">
  <Form.Group className="w-50 mx-auto" controlId="tipo">
  <Form.Label className="text-white">Tipo de Pieza:</Form.Label>
  <Form.Control
  type="text"
    as="select" // Use the "select" component to create a dropdown list
    placeholder="Número de lote"
    required
    onChange={(e) => {
      setTipo(e.target.value);
    }}
    className="bg-dark text-white"
  >
    <option value="">Tipos:</option>s
    <option value="Autoparte">Autoparte</option> 
    <option value="Joyeria">Joyeria</option> 
    <option value="Madera">Madera</option> 
  </Form.Control>
</Form.Group>

  <Form.Group
    className="w-25 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Número de piezas:</Form.Label>
    <Form.Control
      type="number"
      placeholder="Número de piezas"
      required
      name="email"
      onChange={(e) => {
        setPiezas(e.target.value);
      }}
      className="bg-dark text-white"
    />
  </Form.Group>
  <Form.Group
    className="w-25 mx-auto"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label className="text-white">Número de piezas defectuosas:</Form.Label>
    <Form.Control
      type="number"
      placeholder="Número de piezas defectuosas"
      required
      name="email"
      onChange={(e) => {
        setPiezas_defectuosas(e.target.value);
      }}
      className="bg-dark text-white"
          />
  </Form.Group>
</Row>

<Row className="d-flex justify-content-center mt-5 mb-5">
  <Button className="justify-content-center w-50 bg-dark  border-0" type="submit">
    Enviar
          </Button>
        </Row>
      </Form>

      <Footer />
    </div>
  );
}

export default App;
