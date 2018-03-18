const express = require('express');
const gameRouter = express.Router();
module.exports = gameRouter; 

gameRouter.get('/lab5', (req, res)=>{
    res.render('lab5/index.html');
});