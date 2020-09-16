const express = require ("express");
const ToDo = require ("../models/todo")

var router = express.Router()

router.get("/",(req, res)=>{
    ToDo.find((err, arr)=>{
        if(err) return res.send("Não foi possível buscar");
        res.json(arr);
    });
});

router.post("/", (req, res)=>{
    const tarefa = new ToDo(req.body);
    tarefa.save()
    .then(()=>res.send("Cadastrado com sucesso"))
   .catch(()=> res.send("Erro ao cadastrar"));
});

router.delete("/:id",(req, res)=> {
    ToDo.findByIdAndDelete(req.params.id)
    .then(()=>res.send("Deletado com sucesso"))
    .catch(()=> res.send("Erro ao deletar"));
});

router.put("/:id",(req, res)=>{
    ToDo.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>res.send("Alterado com sucesso"))
    .catch(()=> res.send("Erro ao alterar"));
});

module.exports = router;