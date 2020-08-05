// npm packages 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting up port and requiring 
const PORT = process.env.PORT || 3000;

const db = require("./models");

//creating express app 
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });


//not sure if i need this will need to ask. 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/routes.js")(app);



app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});