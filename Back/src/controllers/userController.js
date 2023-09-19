import userModel from "../models/userModel.js";

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.status(200).json(user);
            } else {
                res.status(400).json({ message: "Wrong password or username" });
            }
        } else {
            res.status(404).json({ message: "Wrong password or username" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

export default userLogin;
