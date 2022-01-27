const express = require('express');

const path = require('path')
require('dotenv').config();


const app = express();
//middleware...

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());





app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port:${process.env.PORT}`);
})