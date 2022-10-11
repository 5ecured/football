import { Router } from "express";
import { createPlayer, getAllPlayers } from "../controllers/playerController";
const router: Router = Router()

router.get('/', getAllPlayers)
router.post('/', createPlayer)

export default router