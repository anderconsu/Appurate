import { Router } from "express";

import {
    findMetricsFromLocation,
    addMetrics,
} from "../controllers/dataController.js";

const apiRouter = Router();
apiRouter.get("/", (req, res) => {
    res.status(200).send("From here after there are api routes");
});

apiRouter.post("/prediction", async (req, res) => {
    console.log("prediction started");
    addMetrics(req, res);
});

export default apiRouter;
