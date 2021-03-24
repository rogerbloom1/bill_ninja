import * as express from "express";
import clientRouter from "./clientRouter";
//import categoryRouter from "./categoryRouter";

const router = express.Router();

router.get("/test", (req, res, next) => {
    try {
        res.status(200).json({mst: "Hello World!"});
    }catch (error) {
        next(error)
    }
});

router.use("/Clients", clientRouter);
//router.use("/categories", categoryRouter);

export default router;