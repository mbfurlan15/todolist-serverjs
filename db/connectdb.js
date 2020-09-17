const mongoose = require('mongoose');

class ConnectDB{
    static conectarMongo(){
        // conectando ao banco de dados   
        const DB_KEY = "mongodb+srv://admin:eLTGU7mcFYEutYKh@cluster0.ozlnb.gcp.mongodb.net/tarefa?retryWrites=true&w=majority"
        
        mongoose.connect(DB_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        //Evento do Mongo
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "Erro de conexão"));
        db.once("open", ()=>{
            console.log("Conectado no MongoDB");
        });
    }
}

module.exports = ConnectDB;