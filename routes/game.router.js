const express = require('express');
const gameRouter = express.Router();
module.exports = gameRouter; 

gameRouter.get('/lab5', (req, res)=>{
    console.log("play lab5 ...")
    res.render('lab5/index.html');
});

gameRouter.get('/timelinetrouble', (req, res)=>{
    console.log("play timelinetrouble(final) ...")
    res.render('timelinetrouble/index.html');
});

gameRouter.get('/timelinetrouble1', (req, res)=>{
    console.log("play timelinetrouble1 ...")
    res.render('timelinetrouble1/index.html');
});

gameRouter.get('/timelinetrouble2', (req, res)=>{
    console.log("play timelinetrouble2 ...")
    res.render('timelinetrouble2/index.html');
});
gameRouter.get('/timelinetrouble3', (req, res)=>{
    console.log("play timelinetrouble3 ...")
    res.render('timelinetrouble3/index.html');
});

gameRouter.get('/timelinetrouble4', (req, res)=>{
    console.log("play timelinetrouble4 (beta) ...")
    res.render('timelinetrouble4/index.html');
});

gameRouter.get('/timelinetrouble5', (req, res)=>{
    console.log("play timelinetrouble5 (before final)...")
    res.render('timelinetrouble/index.html');
});

gameRouter.get('/', (req, res)=>{
    res.json({
        "url": [
                "/lab5"
                ,"/timelinetrouble"
                ]
            });
});