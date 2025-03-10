const express = require('express');

const app = express();
const port = 4001;

const { calculateTotalPrice } = require('./services/calculator');

app.use(express.json())

app.post("/api/calculate" , (req , res) => {
    return calculateTotalPrice(req,res)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})