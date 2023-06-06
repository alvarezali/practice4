import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
    res.send(data.products);
});


app.get('/api/products/:id', (req, res) => {

    

    const product = data.products.find((x) => x._id === parseInt(req.params.id));

    if(product){
        console.log('success')
        console.log(parseInt(req.params.id));
        res.send(product);
    } else {
        console.log('error')
        res.status(404).send({message: 'Product not found!'});
    }
});

app.listen(5000, () => {
    console.log('serve at http://localhost:5000');
});