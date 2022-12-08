import mongoose from "mongoose";

const userDetailSchema = mongoose.Schema({
  full_name: { type: String, required:  true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  user_id: { type: String },
  sex: { type: Boolean },
  id: { type: String },
});

export default mongoose.model("UserDetail", userDetailSchema);