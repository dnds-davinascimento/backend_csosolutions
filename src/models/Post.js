const mongoose = require("mongoose")

const {Schema}  = mongoose

const postSchema = new Schema({
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
{timestamps:true}
);

const Post = mongoose.model("Post" , postSchema)
module.exports = {
    Post,
    postSchema,
};

//let user = await User.findOne({email, nome, telefone});