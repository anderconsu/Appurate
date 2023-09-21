import connection from "../db/mongoose.js";

const MetricSchema = new connection.Schema(
    {
        location: {
            type: String,
            required: true,
        },
        properties: {
            type: Object,
            required: true,
        },
        prediction: {
            type: Boolean,
            required: false,
        },
        institution: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    { strict: false }
);

const Metric = connection.model("Metric", MetricSchema);

export default Metric;
