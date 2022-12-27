import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: Object,
    // message: String,
    // name: String,
    user_id: String,
    // tags: [String],
    // selectedFile: String,
    // likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Article = mongoose.model('Article', articleSchema);

export default Article;