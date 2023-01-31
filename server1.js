const express = require("express");
const axios = require("axios");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(bodyParser.json());
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

app.post("/sendValues", async (req, res) => {
  const  data  = req.body;
  
  try {
    const response = await axios.post('http://localhost:3001/sumValues', { data });
    const sum = response.data.sum;
    res.send({ sum });
  } catch (error) {
    res.status(500).send("Internal Server Error",error.message);
  }
});

app.listen(3000, () => {
  console.log("Server 1 listening on port 3000");
});
