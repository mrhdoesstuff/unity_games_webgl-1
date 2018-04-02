const express = require('express');
const gameRouter = express.Router();
module.exports = gameRouter; 

gameRouter.get('/lab5', (req, res)=>{
    res.render('lab5/index.html');
});


gameRouter.get('/timelinetrouble/alpha', (req, res)=>{
    res.render('TimelineTrouble_ALPHA/index.html');
});