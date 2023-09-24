import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authCheck = async (req, res) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization)
            return res.status(401).json({ message: "Unauthorized" });
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });
        const decodedData = jwt.verify(token, process.env.SECRET_KEY);
        res.status(200).json({ message: "Authorized" });
    } catch (error) {
        if (error.message.includes("jwt expired")) {
            return res.status(401).json({ message: "Session expired" });
        }
        res.status(500).json({ message: error.message });
    }
};

export default authCheck;
