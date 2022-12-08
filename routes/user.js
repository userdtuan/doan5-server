import express from "express";
const router = express.Router();

import { signin, signup, google_signin} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/google/signin", google_signin);
router.post("/signup", signup);

export default router;