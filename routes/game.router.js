const express = require('express');
const gameRouter = express.Router();
module.exports = gameRouter; 

gameRouter.get('/lab5', (req, res)=>{
    console.log("play lab5 ...")
    res.render('lab5/index.html');
});
gameRouter.get('/lab5b', (req, res)=>{
    console.log("play lab5 ...")
    res.sendFile('lab5/index.html');
});

gameRouter.get('/timelinetrouble', (req, res)=>{
    console.log("play timelinetrouble ...")
    res.render('timelinetrouble/index.html');
});

gameRouter.get('/timelinetrouble2', (req, res)=>{
    console.log("play timelinetrouble2 ...")
    res.render('timelinetrouble2/index.html');
});
gameRouter.get('/timelinetrouble2b', (req, res)=>{
    console.log("play timelinetrouble2 ...")
    res.sendFile('timelinetrouble2/index.html');
});

gameRouter.get('/', (req, res)=>{
    res.json({
        "url": [
                "/lab5"
                ,"/timelinetrouble"
                ]
            });
});