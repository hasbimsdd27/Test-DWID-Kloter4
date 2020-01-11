const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const dbConn = require('./lib/mysql/connection.js');
const bodyParser = require('body-parser');

app.use( express.static( "public" ) );

app.use(bodyParser.urlencoded({extended : false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    let dataJudul = "Main Menu";
    let dataCustomer = [];
    let dataBrand = [];
    dbConn.query('Select * From customer_tb',(err,data)=>{
        dataCustomer = data;
    })
    dbConn.query('Select * From brand_tb',(err,data)=>{
        dataBrand = data;
    })
    dbConn.query('Select *,brand_tb.name as brand_name, motorcycle_tb.name as motor_name From motorcycle_tb INNER JOIN brand_tb on motorcycle_tb.brand_id = brand_tb.id ORDER BY motorcycle_tb.id',(err,data)=>{
        res.render('index',{dataJudul, dataCustomer, dataBrand, dataMotor: data});
    });
})

app.get('/beli', (req,res)=>{
    res.redirect('/')
})
app.get('/tambahcust', (req,res)=>{
    res.redirect('/')
})
app.get('/tambahproduk', (req,res)=>{
    res.redirect('/')
})
app.get('/tambahbrand', (req,res)=>{
    res.redirect('/')
})


app.post('/beli',(req, res) => {
    const {customer_id, motor_brand, motor_nama, motor_warna, unit} = req.body;
    dbConn.query('INSERT INTO transaction_tb SET ?', {customer_id, motor_brand, motor_nama, motor_warna, unit}, (err)=>{
        if (err) throw err;
        res.redirect('back');
    });
})
app.post('/tambahcust',(req, res) => {
    const {name, address, phone} = req.body;
    dbConn.query('INSERT INTO customer_tb SET ?', {name, address, phone}, (err)=>{
        if (err) throw err;
        res.redirect('back');
    });
})
app.post('/tambahproduk',(req, res) => {
    const {name, brand_id, image, color, specification, stock} = req.body;
    dbConn.query('INSERT INTO motorcycle_tb SET ?', {name, brand_id, image, color, specification, stock}, (err)=>{
        if (err) throw err;
        res.redirect('back');
    });
})
app.post('/tambahbrand',(req, res) => {
    const {name} = req.body;
    dbConn.query('INSERT INTO brand_tb SET ?', {name}, (err)=>{
        if (err) throw err;
        res.redirect('back');
    });
})


app.listen(port, () => {
    console.log('listening on port ' + port);
});