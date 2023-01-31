const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(bodyParser.json());
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

app.post('/sumValues', (req, res) => {
  const { data } = req.body;
  const sum = data.value1 + data.value2;
  res.send({ sum });
 
});

app.listen(3001, () => {
  console.log('Server 2 listening on port 3001');
});