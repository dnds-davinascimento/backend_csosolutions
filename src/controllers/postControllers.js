const {Post: PostModel} = require("../models/Post")
const postControllers= {
    create: async (req, res) =>{
        try {

        const post = {
            title : req.body.title,
            description:req.body.description,
            image:req.body.image,
        }
        const response = await PostModel.create(post)

        res.status(201).json({response, msg: "Post criado com sucesso"})

        } catch (error) {
            console.log(error)
        }

    },
    getAll: async (req , res) =>{
        try {
            const post = await PostModel.find()
            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res)=>{
        try {
            const id = req.params.id
            const post = await PostModel.findById(id)
            if(!post){
                res.status(404).json({msg:"Post não encontrado"})
                return;
            }

            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    delete:async(req, res)=>{
        try {
            
            const id = req.params.id
            const post = await PostModel.findById(id)
            if(!post){
                res.status(404).json({msg:"Post não encontrado"})
                return;
            }
            const deletedPost = await PostModel.findByIdAndDelete(id)
            res.status(200).json({ deletedPost , msg:"Post excluido com sucesso"})


        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res )=>{
        const id =req.params.id
        const post = {
            title : req.body.title,
            description:req.body.description,
            image:req.body.image,
        }
        const updatePost = await PostModel.findByIdAndUpdate(id , post)

        if(!updatePost){
            res.status(404).json({msg:"post não encontrado"})
            return;
        }
        res.status(200).json({post, msg: "post atualizado com sucesso"})
    }

}
module.exports = postControllers