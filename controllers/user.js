import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";
import UserDetailModal from "../models/userDetail.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    const details = await UserDetailModal.findOne({user_id:oldUser._id});
    console.log(details);
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
    res.status(200).json({ result: oldUser, token, details:details});
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const google_signin = async (req, res) => {
  const { result,token } = req.body;
  // console.log(result.email);
  // console.log(token);
  let email = result.email;
  let name = result.name;

  try {
    const oldUser = await UserModal.findOne({ email });
    let result  = null;
    if (!oldUser){
      result = await UserModal.create({ email, name, google_signin : true });
      console.log("im here");
    }
    else
      result = oldUser;
    
    const details = await UserDetailModal.findOne({user_id:oldUser._id});
    console.log({ result, token, details:details });
    res.status(201).json({ result, token, details:details });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    console.log(token);
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const udateUserDetails = async (req, res) => {
  const { user_id, full_name, address, phone, token } = req.body;
  // console.log({ full_name, address, phone, user_id })
  try {
    const oldUser = await UserDetailModal.findOne({ user_id });
    const user = await UserModal.findOne({ _id:user_id });
    if (!user) return res.status(400).json({ message: "User doesn't exists" });
    if (oldUser) return res.status(401).json({ message: "User Details already exists" });
    const result = await UserDetailModal.create({ full_name, address, phone, user_id });
    res.status(201).json({ result:user, token, details:result });
    // console.log({ message: "Something went right"});
    // res.status(201).json({ message: "Something went right"});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

