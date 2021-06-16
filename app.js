const express = require('express')
const hbs = require('hbs')

var app = express()

app.set('view engine', 'hbs')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.post('/insert', (req, res) => {
    var idInput = req.body.txtID;
    var nameInput = req.body.txtName;
    var priceInput = req.body.txtPrice;

    if(nameInput.length < 6) {
        res.render('new', {nameError: 'Ten ko dc nho hon 6 ki tu'})
    }
    else {
        res.render('saveDone', {id: idInput, name: nameInput, price: priceInput})
    }
})

app.get('/new', (req, res) => {
    res.render('new');
})

app.get('/list', (req, res) => {
    var ds = [];
    ds.push({id: 1, name: 'Iphone', price: 300});
    ds.push({id: 2, name: 'Samsung', price: 400});
    ds.push({id: 3, name: 'Nokia', price: 500});
    res.render('all', {danhsach: ds})
})

app.get('/', (req, res) => {
    res.render('index', {name: "Minh"})
})

var PORT = process.env.PORT || 5000
app.listen(PORT);
console.log("Server is running at " + PORT )