import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        if (!user) {
            throw new Error("User or password not corrrect");
        } else {
            if (await bcrypt.compare(password, user.password)) {
                res.status(200).send("User logged");
            } else {
                throw new Error("User or password not corrrect");
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};
// TODO : create token on login
const createUser = async (req, res) => {
    try {
        const { username, password, institution, aula, proffesor } = req.body;
        const user = await userModel.findOne({ username });
        if (user) {
            throw new Error("User already exists");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new userModel({
                username,
                hashedPassword,
                institution,
                aula,
                proffesor,
            });
            await newUser.save();
            res.status(200).send("User created");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

export default userLogin;
