const mongoose = require("mongoose")

const {Schema}  = mongoose

const postSchema = new Schema( {
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },

    foto:{
        type:String,
        required:true,
    },


},
{ toJSON:{ virtuals: true,},
});
    postSchema.virtual('foto_url').get(function(){
    return `http://localhost:4000/files/${this.foto}`
    //backend-csosolutions.vercel.app
})

const Post= mongoose.model("Post" ,postSchema)
module.exports = {
    Post,
    postSchema,
};

//let user = await User.findOne({email, nome, telefone});