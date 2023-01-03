const express = require('express');
const mysql = require('mysql');
const cors = require("cors");


const app = express();


app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "rdvcab"
});

app.post("/login", (req, res) => {
    const login = req.body.login;
    const pswd = req.body.pswd;

    db.query(
        "SELECT * FROM user WHERE Login = ? AND Pswd = ?",
        [login, pswd],
        (err, result) => {
            if(err){
                res.send({err: err});
            }
            
            if(result){
                res.send(result);
                // console.log(result[0].Nom)
            }else{
                res.send({message: "Wrong login infos !"});
            }
        }
    )
})

app.listen(3001, () => {
    console.log('Server is running !');
})