const express = require("express");
const DB = require("./db/connectdb");

DB.conectarMongo()
const app = express()
app.use(express.json())
const workRouter = require("./routes/list.routes")
app.use("/list", workRouter)

const hostName = "127.0.0.1";
const port = 3000;

app.get('/',(req, res)=> {
    res.send("Hello Word!!");
});

app.listen(port,hostName, ()=>{
    console.log (`API com express rodando em ${hostName} na porta ${port}`)
});

