// JavaScript source code
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("hello world 123456");
});
app.listen(4000);
