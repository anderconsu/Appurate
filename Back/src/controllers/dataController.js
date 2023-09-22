import metricModel from "../models/metricModel.js";
import getModelData from "./modeldata.js";

const addMetrics = async (req, res) => {
    try {
        const { location, properties, institution, aula } = req.body;
        console.log(
            "location: ",
            location,
            "properties: ",
            properties,
            "institution: ",
            institution,
            "aula: ",
            aula
        );
        if (!location || !properties || !institution || !aula) {
            throw new Error("ALL FIELDS ARE REQUIRED");
        }
        if (!properties) {
            throw new Error("No properties");
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
                            aula,
                        });
                        await newMetric.save();
                        res.status(200).json(newMetric);
                    } catch {
                        res.status(500).json({ message: "Database error" });
                    }
                }
            } catch (err) {
                console.log(err);
                res.status(500).json({ message: "Server error", error: err });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error", error: err });
    }
};

const findMetricsFromLocation = async (req, res) => {
    try {
        const { location } = req.body;
        const metrics = await metricModel.find({ location });
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
const getMetricsfromInstitution = async (req, res) => {
    const { institution, aula } = req.body;
    try {
        const metrics = await metricModel.find({ institution, aula });
        res.status(200).json(metrics);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

export {
    getMetrics,
    getMetricsfromInstitution,
    findMetricsFromLocation,
    addMetrics,
};
