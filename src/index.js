'use strict';

const express = require("express");
const phones = require("./phones/controller");
var cors = require('cors');
const app = express();

app.use(cors());
app.use('/public', express.static(__dirname + '/../public'));

app.listen(5000, () => {
    console.log("El servidor está inicializado en el puerto 5000");
});

phones(app);

