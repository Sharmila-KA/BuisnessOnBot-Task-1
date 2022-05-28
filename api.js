const client = require('./connection.js')
const express = require('express');
const app = express();

var port_number = process.env.PORT || 3000;
app.listen(port_number);

client.connect();

app.get('/api/branch', (req, res)=>{
    let query = res.body;
    client.query(`select * from bank_branches where branch ILike '${req.query.q}%' order by ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})

app.get('/', (req, res)=>{
            res.send("Hello");
})


app.get('/api/search', (req, res)=>{
    let query = res.body;
    client.query(`select * from bank_branches where branch ILike '%${req.query.q}%' or city ILike '%${req.query.q}%' or ifsc ILike '%${req.query.q}%' or district ILike '%${req.query.q}%' or state ILike '%${req.query.q}%'  order by ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})
