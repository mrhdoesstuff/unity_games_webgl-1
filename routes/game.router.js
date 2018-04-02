const express = require('express');
const gameRouter = express.Router();
module.exports = gameRouter; 

gameRouter.get('/lab5', (req, res)=>{
    console.log("play lab5 ...")
    res.render('lab5/index.html');
});

gameRouter.get('/timelinetrouble_alpha', (req, res)=>{
    console.log("play timelinetrouble_alpha ...")
    res.render('TimelineTrouble_ALPHA/index.html');
});

gameRouter.get('/', (req, res)=>{
    res.json({
        "url": [
                "/lab5"
                ,"/timelinetrouble_alpha"
                ]
            });
});