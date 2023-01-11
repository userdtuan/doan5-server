import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    user_id: String,
    gac_lung: Boolean,

    wifi: Boolean,
    may_giat: Boolean,
    thang_may: Boolean,

    nau_an: Boolean,
    image: String,
    tieude: String,
    square: { type: Number, default: 0 },
    content: Object,
    so_nguoi: Number,
    image_wc: String,
    image_tu_cua:String,
    giatien: { type: String, default: "0" },
    address: String,
    public:  { type: Boolean, default: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Article = mongoose.model('Article', articleSchema);

export default Article;