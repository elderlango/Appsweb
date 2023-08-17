const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// create a connection to the MySQL database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "elotes",
});


// modify data in the "produccion" table
app.post("/lote", (req, res) => {
  const lotNumber = req.body.Lote;
  const responsible1_N = req.body.Responsable1_N;
  const responsible2_N = req.body.Responsable2_N;
  const responsible3_N = req.body.Responsable3_N;
  const responsible1_A = req.body.Responsable1_A;
  const responsible2_A = req.body.Responsable2_A;
  const responsible3_A = req.body.Responsable3_A;
  const startDate = req.body.Inicio;
  const endDate = req.body.Terminacion;
  const partType = req.body.Tipo;
  const partNumber = req.body.Piezas;
  const numberOfPieces = req.body.Piezas_defectuosas;

  // validate the input data
  if (
    !lotNumber ||
    !responsible1_N ||
    !responsible2_N ||
    !responsible3_N ||
    !responsible1_A ||
    !responsible2_A ||
    !responsible3_A ||
    !startDate ||
    !endDate ||
    !partType ||
    !partNumber ||
    !numberOfPieces 
  ) {
    return res.status(400).send("todos los campos son requeridos");
  }

  // update the data in the "production" table
  const query = `INSERT INTO produccion VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;

  db.query(query, [lotNumber, responsible1_N, responsible1_A, responsible2_N, responsible2_A, responsible3_N, responsible3_A,
    startDate, endDate, partType, partNumber, numberOfPieces], (err, result) => {
    if (err) {
      res.send({
        status: 300,
        err
      })
    } else {
      res.send({
        status: 200,
        data: result
      })
    }
  })
})

// start the server
app.listen(port, () => {
  console.log(`Server ejecutandose en ${port}.`);
});