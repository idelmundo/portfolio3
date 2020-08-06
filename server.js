// npm packages 
var express = require("express");
var path = require("path");


//creating express app 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/aboutme.html"));
});

app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/portfolio.html"));
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/contactme.html"))
});

app.listen(PORT, () => {
    console.log(`${PORT}!`);
});