import {Router} from "express";
const router = Router();

router.get("/check", (req, res) => {
    console.log("check");
    res.status(200).send();
});





export default router