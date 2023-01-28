const OrcamentoModel = require("../models/Orcamento")

const checkorcamentoBudget = (budget, services)=>{
    const priceSum = services.reduce((sum, service) => sum + service.price, 0)
   console.log(priceSum, budget)
    if(priceSum > budget){
        return false
    }
    return true
}

const orcamentoControllers = {

    create: async (req , res) =>{
        try {
            const orcamento = {
                title:req.body.title,
                author:req.body.author,
                description:req.body.description,
                budget:req.body.budget,
                image:req.body.image,
                services:req.body.services,

            }
            if (orcamento.services && !checkorcamentoBudget(orcamento.budget, orcamento.services)){
                res.status(406).json({msg: "O seu orçamento e insuficiente."})
                return
            }
            const response = await OrcamentoModel.create(orcamento)
            res.status(201).json({response, msg: "pedido de Orçamento criado com sucesso"})
            
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req , res) =>{
        try {
            const orcamento = await OrcamentoModel.find()
            res.json(orcamento)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res)=>{
        try {
            const id = req.params.id
            const orcamento = await OrcamentoModel.findById(id)
            if(!orcamento){
                res.status(404).json({msg:"Orçamento não encontrado"})
                return;
            }

            res.json(orcamento)
        } catch (error) {
            console.log(error)
        }
    },
    delete:async(req, res)=>{
        try {
            
            const id = req.params.id
            const orcamento = await OrcamentoModel.findById(id)
            if(!orcamento){
                res.status(404).json({msg:"serviço não encontrado"})
                return;
            }
            const deletedOrcamento = await OrcamentoModel.findByIdAndDelete(id)
            res.status(200).json({ deletedOrcamento , msg:"Orçamento excluido com sucesso"})


        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res )=>{
        try {
            const id = req.params.id
            const orcamento = {
                title:req.body.title,
                author:req.body.author,
                description:req.body.description,
                budget:req.body.budget,
                image:req.body.image,
                services:req.body.services,

            }
            if (orcamento.services && !checkorcamentoBudget(orcamento.budget, orcamento.services)){
                res.status(406).json({msg: "O seu orçamento e insuficiente."})
                return
            }

            const updateOrcamento = await OrcamentoModel.findByIdAndUpdate(id, orcamento)
            if(!updateOrcamento){
                res.status(404).json({msg:"Orçamento não encontrado"})
                return;
            }
            res.status(200).json({orcamento, msg:"Orçamento atualizado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
       
    }

}

module.exports = orcamentoControllers