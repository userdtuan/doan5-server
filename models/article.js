import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    user_id: String,
    gac_lung: Boolean,
    nau_an: Boolean,
    image: String,
    tieude: String,
    square: Number,
    content: Object,
    so_nguoi: Number,
    image_wc: String,
    image_tu_cua:String,
    giatien: String,
    address: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Article = mongoose.model('Article', articleSchema);

export default Article;