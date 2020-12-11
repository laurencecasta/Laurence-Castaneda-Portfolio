const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/', require('./routes/projects'));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})