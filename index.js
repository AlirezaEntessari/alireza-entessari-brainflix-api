const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use(express.static('./public'));

// Pull in the dotenv package and configure it
require("dotenv").config();

// Get the PORT from the .env file, or if it wasn't provided, use 8080 as a default
const PORT = process.env.PORT || 8080;

// Allow the domain of the client to communicate with this API
// app.use(cors({ origin: process.env.FRONTEND_URL }));

const videos = require('./routes/videos');

app.use('/videos', videos);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})