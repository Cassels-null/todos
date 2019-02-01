const express = require ('express');
const parser = require('body-parser');
const axios = require('axios');
const mysql = require('mysql');
const db = require('../database.js');

const app = express();

app.use(express.static(__dirname+'/../client'));

app.use(parser.json());
app.listen(1337);
console.log('listen on port 1337');

app.get("/todos", (req, res)=>{
    db.query('SELECT * FROM items;', (err, result)=>{
        if(err){
            console.log('ERROR at app.get after query'+err)
        }
        else{
            res.send(result);
        }
    });
})