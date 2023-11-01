const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello");
})

router.get('/:id', (req, res) => {
    res.send("Message");
})

module.exports = router;