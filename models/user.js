import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String},
  google_signin: { type: Boolean, default: false },
  id: { type: String },
  createdAt: {
    type: Date,
    default: new Date(),
},
});

export default mongoose.model("User", userSchema);