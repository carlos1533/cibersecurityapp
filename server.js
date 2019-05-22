// server.js
var express = require('express');

var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);

// "serve": "vue-cli-service serve", "build": "vue-cli-service build", "lint":
// "vue-cli-service lint"*/