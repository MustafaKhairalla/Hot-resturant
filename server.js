var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());


//arrays for tables and wait list
var currentTables = [
    {
        name: "Test",
        partysize: "3",
        phone: "555-555-5555",
        email: "test@testmail.com"

    }
];

var waitList = [];

const tableLimit = 5; 


//routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/viewtable", (req, res)=> {
    return res.json(currentTables);
});

app.get("/viewtable",(req,res) => {
    res.sendFile(path.join(__dirname, "viewtable.html"))

});

app.get("/api/waitlist", (req, res)=>{
    return res.json(waitList);
})
app.get("/waitlist",(req,res)=> {
    res.sendfile(path.join(__dirname, "waitlist.html"))
});

app.get("/makereservation", (req,res)=>{
    res.sendfile(path.join(__dirname, "makereservation.html"))
});


app.post("/api/makeserveration", function (req,res){
    var newReservation = req.body;

    console.log(newReservation);
    
    if (currentTables.length < tableLimit){
        currentTables.push(newReservation);
    }
    else if (currentTables.length >= tableLimit){
        waitList.push(newReservation);
    }
    res.json(newReservation);
});


app.listen(PORT, ()=> {
    console.log("App listening on PORT: " + PORT);
})
