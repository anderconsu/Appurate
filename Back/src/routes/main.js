import { Router } from "express";
const router = Router();

import apiRouter from "./apiRouter.js";
import userRouter from "./userRouter.js";

router.get("/check", (req, res) => {
    console.log("check");
    res.status(200).send("check");
});

router.use("/api", apiRouter);
router.use("/user", userRouter);

export default router;
