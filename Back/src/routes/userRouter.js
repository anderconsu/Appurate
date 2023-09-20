import { Router } from "express";
import { userLogin, createUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).send("From here after there are user routes");
});

userRouter.post("/register", async (req, res) => {
    createUser(req, res);
});
userRouter.post("/login", async (req, res) => {
    userLogin(req, res);
});

export default userRouter;
