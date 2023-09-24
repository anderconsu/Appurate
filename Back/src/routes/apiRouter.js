import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
    findMetricsFromLocation,
    findMetricsFromName,
    addMetrics,
    getMetrics,
    getMetricsfromInstitution,
} from "../controllers/dataController.js";

const apiRouter = Router();
apiRouter.get("/", (req, res) => {
    res.status(200).send("From here after there are api routes");
});

apiRouter.post("/prediction", authMiddleware, async (req, res) => {
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
apiRouter.post("/namemetrics", async (req, res) => {
    console.log("namemetrics requested");
    findMetricsFromName(req, res);
});
apiRouter.post("/institutionmetrics", authMiddleware, async (req, res) => {
    console.log("institution metrics requested");
    getMetricsfromInstitution(req, res);
});
export default apiRouter;
