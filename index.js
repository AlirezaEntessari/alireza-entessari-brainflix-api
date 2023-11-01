const express = require('express');
const app = express();

const videos = require('./routes/videos');

app.use('/videos', videos);

app.listen(8080, () => {
    console.log("Listening on 8080");
})