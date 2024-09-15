import mongoose from "mongoose";

const postSchema = mongoose.Schema({ 
    ingredient: String,
    weight: {
        type: Number, // value is also an integer
         // Ensure it's required
    },
    protein: {
        type: Number, // value is also an integer
         // Ensure it's required
    },
    img: String,
});

const PostGrid = mongoose.model('grid', postSchema);

export default PostGrid;
