'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const gameRouter = require('./routes/game.router');
const path = require('path')
const app = express();
app.set('port', (process.env.PORT || 3002));


// middleware
// app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('views'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/',gameRouter);

app.listen(app.get('port'), '0.0.0.0', ()=>{
    console.log("[OK] App is running: port=" + app.get('port'));
});