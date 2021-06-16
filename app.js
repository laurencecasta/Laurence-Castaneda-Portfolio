const express = require('express');
const cors = require('cors');
const expressValidator = require('express-validator');

const app = express();

app.use(cors());

app.use(express.json({limit: '1mb'}));

// app.use(expressValidator());

app.use('/api/', require('./routes/projects'));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

module.exports = app