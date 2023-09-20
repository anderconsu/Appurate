import metricModel from "../models/metricModel.js";

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

export { findMetricsFromLocation };
