const express = require("express");
const data = require('./data.js');
const app = express();

const port = 5000;

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(port, () => {
    console.log('serve at http://localhost:5000');
});