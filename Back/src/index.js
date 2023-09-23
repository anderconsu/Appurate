import express from "express";

import cors from "cors";
import router from "./routes/main.js";
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on port 3000");
});
