var express = require('express');
var appController = require('./controllers/appController');
var app = express();

app.set('view engine', 'ejs')
app.use(express.static('/assets/index.css'));

appController(app);

app.listen(3000);
