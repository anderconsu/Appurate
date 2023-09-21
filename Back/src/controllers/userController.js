import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        if (!user) {
            throw new Error("User or password not corrrect");
        } else {
            if (await bcrypt.compare(password, user.password)) {
                const userWithoutPassword = {
                    username: user.username,
                    id: user._id,
                };
                const token = jwt.sign(
                    { username: user.username, id: user._id },
                    process.env.SECRET_KEY,
                    { expiresIn: "24h" }
                );
                res.status(200).json({ user: userWithoutPassword, token });
                console.log(`El usuario ${user.username} ha iniciado sesión`);
            } else {
                throw new Error("User or password not corrrect");
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};
const createUser = async (req, res) => {
    try {
        const {
            username,
            password,
            institution,
            aula,
            proffesor,
            email,
            phone,
        } = req.body;
        if (
            !username ||
            !password ||
            !institution ||
            !aula ||
            !proffesor ||
            !email ||
            !phone
        ) {
            throw new Error("All fields are required");
        }
        console.log(
            username,
            password,
            institution,
            aula,
            proffesor,
            email,
            phone
        );
        const user = await userModel.findOne({ username });
        if (user) {
            throw new Error("User already exists");
        } else {
            console.log("el password es: ", password);
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log("el password hashado es: ", hashedPassword);
            const newUser = new userModel({
                username,
                password: hashedPassword,
                institution,
                aula,
                proffesor,
                email,
                phone,
            });
            await newUser.save();
            res.status(200).send("User created");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error", err });
    }
};

export { userLogin, createUser };
