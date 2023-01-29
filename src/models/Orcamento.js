const mongoose = require("mongoose")

const {Schema}  = mongoose

const {serviceSchema} = require("./Service")

const orcamentoSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    telefone:{
        type:Number,
        required:true,
    },
    empresa:{
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

    services:{
        type:[serviceSchema],
        
    },




},
{timestamps:true}
)
const Orcamento = mongoose.model("Orcamento" ,orcamentoSchema)
module.exports =  Orcamento;
 

