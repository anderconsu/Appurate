import { Router } from "express";
import { userLogin, createUser } from "../controllers/userController.js";
import authCheck from "../controllers/authController.js";

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

userRouter.post("/authCheck", (req, res) => {
    authCheck(req, res);
});

export default userRouter;
