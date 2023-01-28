const mongoose = require("mongoose")

const {Schema}  = mongoose

const {serviceSchema} = require("./Service")

const orcamentoSchema = new Schema({

    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
        budget:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    services:{
        type:[serviceSchema],
        
    },




},
{timestamps:true}
)
const Orcamento = mongoose.model("Orcamento" ,orcamentoSchema)
module.exports =  Orcamento;
 

