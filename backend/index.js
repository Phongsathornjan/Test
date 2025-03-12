const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;

const { calculateTotalPrice } = require('./services/calculator');

app.use(cors());
app.use(express.json())

app.post("/api/calculate" , (req , res) => {
    return calculateTotalPrice(req,res)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})