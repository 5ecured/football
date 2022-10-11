import { Router } from "express";
import { createPlayer, getAllPlayers, editPlayer } from "../controllers/playerController";
const router: Router = Router()

router.get('/', getAllPlayers)
router.post('/', createPlayer)
router.put('/', editPlayer)

export default router