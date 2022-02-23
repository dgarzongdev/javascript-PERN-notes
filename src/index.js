const express = require('express');
const morgan = require('morgan');

// env variables required
require('dotenv').config();

// Settings
const app = express();
const port =  process.env.PORT;

// Middlewares
// Request viewer
app.use(morgan('dev'));

app.listen(port);
console.log('server on port ', port);