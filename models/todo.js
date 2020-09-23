const mongoose = require ('mongoose');

const ToDo = mongoose.model("ToDo",{
    work:String,
    desc:String,
    done:Boolean 
});

module.exports = ToDo;