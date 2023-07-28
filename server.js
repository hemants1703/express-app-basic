// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(request, response) {
    response.send("Contact me at: hemantsharma@gmail.com");
});

app.get("/about", function(request, response) {
    response.send("This website is owned by Hemant Sharma");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});