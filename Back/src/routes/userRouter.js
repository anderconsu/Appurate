import { Router } from "express";
import userLogin from "../controllers/userController.js";

const apiRouter = Router();
apiRouter.get("/", (req, res) => {
    res.status(200).send("From here after there are api routes");
});

apiRouter.post("/login", async (req, res) => {
    userController.userLogin(req, res);
});

export default apiRouter;
