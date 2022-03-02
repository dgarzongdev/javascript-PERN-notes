const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// env variables required
require('dotenv').config();

// Settings
const noteRoutes = require('./routes/notes.routes');
const app = express();
const port =  process.env.PORT;
// routes config


// Middlewares
app.use(express.json());
app.use(noteRoutes);
app.use(cors());
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});  
// Request viewer
app.use(morgan('dev'));


app.listen(port);
console.log('server on port ', port);