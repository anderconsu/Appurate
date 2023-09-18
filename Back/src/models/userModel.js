import connection from "../db/mongoose.js";

const UserSchema = new connection.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    }
});

const User = connection.model("User", UserSchema);

export default User;
