const fs = require("fs")
const {Post: PostModel} = require("../models/Post")

const postControllers= {
    create: async (req, res) =>{
      
            const { title,  description} = req.body;
            const {filename} = req.file;
            
            const post = new PostModel({
                title,
                description,
                foto :filename,
            })
            try {
                const response = await PostModel.create(post)
                res.status(201).json({response, msg: "post Criado com Sucesso"})
                console.log(response)
            } catch (error) {
                console.log(error)
                res.json(error)
            }

    },
    getAll: async (req , res) =>{
        try {
            const post = await Post.find()
            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res)=>{
        try {
            const id = req.params.id
            const post = await Post.findById(id)
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
            const post = await Post.findById(id)
            if(!post){
                res.status(404).json({msg:"Post não encontrado"})
                return;
            }
            fs.unlinkSync(post.src);
            await post.remove();
            const deletedPost = await Post.findByIdAndDelete(id)
            res.status(200).json({ deletedPost , msg:"Post excluido com sucesso"})


        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res )=>{
        const id =req.params.id


            const { title} = req.body;
            
            const { description} = req.body;

            const file = req.file;
            const post = new Post({
              title,
              description,
              src: file.path,
            });


            
            
        const updatePost = await Post.findByIdAndUpdate(id , post)

        if(!updatePost){
            res.status(404).json({msg:"post não encontrado"})
            return;
        }
        res.status(200).json({post, msg: "post atualizado com sucesso"})
    }

}
module.exports = postControllers