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

    src: {
        type: String,
        required:true
    },
},

{timestamps:true},

);


// Alteração:

const Post = mongoose.model("Post", postSchema.set('toJSON', { virtuals: true }));

postSchema.virtual('src_url').get(function() {
    return `http://https://backend-csosolutions.vercel.app/file/${this.src}`; // adicionado o return para retornar o valor da função 
});

module.exports = {
    Post,
    postSchema,
};

//let user = await User.findOne({email, nome, telefone});