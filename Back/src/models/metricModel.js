import connection from "../db/mongoose.js";

const MetricSchema = new connection.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: Array,
            required: true,
        },
        properties: {
            type: Object,
            required: true,
        },
        prediction: {
            type: Number,
            required: false,
        },
        institution: {
            type: String,
            required: true,
        },
        aula: {
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
