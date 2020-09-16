const mongoose = require ('mongoose');

const ToDo = mongoose.model("ToDo",{
    work:String,
    done:Boolean 
});

module.exports = ToDo;