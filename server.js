var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());


//arrays for tables and wait list
var currentTables = [];

var waitList = [];

const tableLimit = 5; 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "viewtable.html"))
})


//routes

