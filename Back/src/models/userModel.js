import connection from "../db/mongoose.js";

const UserSchema = new connection.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        aula: {
            type: String,
            required: true,
        },
        proffesor: {
            type: String,
            required: true,
        },
        email: {
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

const User = connection.model("User", UserSchema);

export default User;
