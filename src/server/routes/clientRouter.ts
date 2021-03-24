import * as express from "express";
import db from "../db/queries/clients";

const router = express.Router();

router.get(
    "/:id?", 
    async (
        req: express.Request, 
        res: express.Response, 
        next: express.NextFunction
    ) => {
        console.log("api/Clients");
        let id: number = parseInt(req.params.id);
        let data: any;
        try { 
            if (id) {
                console.log(id)
                data = await db.getOneClient(id);
            } else {
                data = await db.getAllClients();
            }

            res.status(200).json(data);
        } catch(error) {
            next(error);
        }
    }
);

router.put(
    "/:id", 
    async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            let id = parseInt(req.params.id);
            let { body } = req;
            let data = await db.updateClient(body, id);
            res.status(200).json(data);
        } catch (error) {
        next (error);
        }
    }
);

router.delete(
    "/:id", 
    async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            let id = parseInt(req.params.id);
            let data = await db.removeClient(id);
            res.status(200).json(data);
        } catch (error) {
        next (error);
        }
    }
);

export default router;