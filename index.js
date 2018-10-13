const express = require ( 'express' );
const mysql = require ( 'mysql' );
const app = express();

var db = mysql.createConnection({
host: "localhost" ,
user: "root" ,
password: "" ,
database: "projet" ,
port: "3306"
});


app.get( '/patients' , function (req, res) {
db.query( "SELECT * FROM patient" , function (err, result, fields) {
if (err) throw err;
var response = { "page" : "home" , "result" : result };
res.send( JSON .stringify(response));
});
});

app.get( '/rooms' , function (req, res) {
db.query( "SELECT capacite FROM chambre" , function (err, result, fields) {
if (err) throw err;
var response = { "page" : "home" , "result" : result };
res.send( JSON .stringify(response));
});
});

app.get( '/staff' , function (req, res) {
db.query( "SELECT * FROM personnel" , function (err, result, fields) {
if (err) throw err;
var response = { "page" : "home" , "result" : result };
res.send( JSON .stringify(response));
});
});

app.get( '/filters' , function (req, res) {
db.query( "SELECT * FROM filtre" , function (err, result, fields) {
if (err) throw err;
var response = { "page" : "home" , "result" : result };
res.send( JSON .stringify(response));
});
});


app.listen( 3000 , function () {
db.connect( function (err) {
if (err) throw err;
console .log( 'Connection to database successful!' );
});
console .log( 'Example app listening on port 3000!' );
});
