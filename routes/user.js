import express from "express";
const router = express.Router();

import { signin, signup, google_signin, udateUserDetails, getUserInfor} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/google/signin", google_signin);
router.post("/signup", signup);
router.post("/user-details", udateUserDetails);
router.get('/infor/:id', getUserInfor);

export default router;