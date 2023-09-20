import { Router } from "express";
import { userLogin, createUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).send("From here after there are user routes");
});

userRouter.post("/register", async (req, res) => {
    console.log(req.body);
    createUser(req, res);
});

export default userRouter;
