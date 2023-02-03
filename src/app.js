const express = require("express");
const router = require("./routers/router");
var path = require("path");

//connect to cloud-based mongodb atlas at AWS
const connectDB = require("./database/connection");
connectDB();

const app = express();

//enable the view EJS Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//enable public folder for css, js, html files
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
//enable json capabilities
app.use(express.json());
//enable the router
app.use(router);

module.exports = app;
