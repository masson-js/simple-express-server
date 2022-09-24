//require express and put in app
const express = require('express');
const app = express();

//middleware for parsing
app.use(express.json())

// or just use const express = require('express')() <= it exact the same syntax
//start server = node .

// initiate a port jack
const PORT = 3000;

//initiate a Local Server on listen protocol

//firest argument setup on which port will be SERVER
//second argument is callback function

app.listen(
  PORT,
  () => console.log('Server is starts up on localhost:' + PORT)
)


app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'Large'
  })
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({msg: 'You forgot logo'})
  }
  res.send({
    tshirt: `your ${logo} and Id ${id}`
  })
})
// API requests:
// GET, POST, PATCH, DELETE | PUT

//lest make GET request, 2 arguments: adress as middleware and callback function with req /res

// req (request) - data requested from client
//res (response) - action and data responsed to client from server

//use status() for response: 
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// send() inside an object as {}