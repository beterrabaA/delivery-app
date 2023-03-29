const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// const corsOptions = {
//   origin: 'http://localhost:3001/login',
// };

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', require('./routes/login.routes'));

module.exports = app;
