import { Router } from "express";
import * as Controller from "../controllers/players";

const router = Router();

router.get("/", Controller.getPlayers);

router.post("/", Controller.postPlayer);

router.put("/:id", Controller.updatePlayer);

router.delete("/:id", Controller.deletePlayer);

export default router;
