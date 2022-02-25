const express = require('express');
const morgan = require('morgan');

// env variables required
require('dotenv').config();

// Settings
const noteRoutes = require('./routes/notes.routes');
const app = express();
const port =  process.env.PORT;
// routes config


// Middlewares
app.use(noteRoutes);
// Request viewer
app.use(morgan('dev'));


app.listen(port);
console.log('server on port ', port);