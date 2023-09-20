import connection from "../db/mongoose.js";

const ContactSchema = new connection.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
    },
    { strict: false }
);

const Contact = connection.model("Contact", ContactSchema);

export default Contact;
