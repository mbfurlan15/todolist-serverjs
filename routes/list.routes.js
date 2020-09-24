const express = require ("express");
const ToDo = require ("../models/todo")

var router = express.Router()

/* router.get("/",async (req, res)=>{
    let tasks = {};
    await ToDo.find({done: false}, (err, arrUndone)=>{
        if(err) return res.send("Não foi possível buscar");
        tasks.undone = arrUndone;
    });
    await ToDo.find({done: true}, (err, arrDone)=>{
        if(err) return res.send("Não foi possível buscar");
        tasks.done = arrDone;
    });

    res.json(tasks);
}); */
router.get("/undone",async (req, res)=>{
    await ToDo.find({done: false}, (err, arrUndone=[])=>{
        if(err) return res.send("Não foi possível buscar");
        res.json(arrUndone);
    });
});

router.get("/done",async (req, res)=>{
    await ToDo.find({done: true}, (err, arrDone=[])=>{
        if(err) return res.send("Não foi possível buscar");
        res.json(arrDone);
    });
});

router.get("/all",async (req, res)=>{
    await ToDo.find((err, all=[])=>{
        if(err) return res.send("Não foi possível buscar");
        res.json(all);
    });
});

router.post("/", (req, res)=>{
    const tarefa = new ToDo(req.body);
    tarefa.save()
    .then((t)=>res.json(t))
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