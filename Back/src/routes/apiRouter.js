import { Router } from "express";

import {
    findMetricsFromLocation,
    addMetrics,
    getMetrics,
    getMetricsfromInstitution,
} from "../controllers/dataController.js";

const apiRouter = Router();
apiRouter.get("/", (req, res) => {
    res.status(200).send("From here after there are api routes");
});

apiRouter.post("/prediction", async (req, res) => {
    console.log("prediction started");
    addMetrics(req, res);
});

apiRouter.get("/metrics", async (req, res) => {
    console.log("metrics requested");
    getMetrics(req, res);
});
apiRouter.post("/locationmetrics", async (req, res) => {
    console.log("location metrics requested");
    findMetricsFromLocation(req, res);
});
apiRouter.post("/institutionmetrics", async (req, res) => {
    console.log("institution metrics requested");
    getMetricsfromInstitution(req, res);
});
export default apiRouter;
