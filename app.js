'use strict';

const express = require('express');

const PORT = 8800;
const HOST = '0.0.0.0'; // Change to 'localhost' if you only want to allow local connections

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to the submissions Muhammad Dzikri Pandu Nareswara');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
