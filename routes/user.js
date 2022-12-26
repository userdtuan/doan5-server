import express from "express";
const router = express.Router();

import { signin, signup, google_signin, udateUserDetails} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/google/signin", google_signin);
router.post("/signup", signup);
router.post("/user-details", udateUserDetails);

export default router;