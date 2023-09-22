import metricModel from "../models/metricModel.js";
import getModelData from "./modeldata.js";

const addMetrics = async (req, res) => {
    const { location, properties, institution } = req.body;
    console.log(properties);
    if (!properties) {
        res.status(400).json({ message: "No properties" });
    } else {
        try {
            const prediction = await getModelData(properties);
            if (prediction === "error") {
                console.log("Model error");
                res.status(500).json({ message: "Model error" });
            } else {
                try {
                    const newMetric = new metricModel({
                        location,
                        properties,
                        prediction,
                        institution,
                    });
                    await newMetric.save();
                    res.status(200).json(newMetric);
                } catch {
                    res.status(500).json({ message: "Database error" });
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Server error" });
        }
    }
};

const findMetricsFromLocation = async (req, res) => {
    try {
        const { location } = req.body;
        const metrics = await metricModel.find(
            { location },
            (error, results) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(results);
                }
            }
        );
        res.status(200).json(metrics);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

const getMetrics = async (req, res) => {
    try {
        const metrics = await metricModel.find();
        res.status(200).json(metrics);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

export { getMetrics, findMetricsFromLocation, addMetrics };
