import { Router } from "express";
import { createPlayer, getAllPlayers, editPlayer, deletePlayer } from "../controllers/playerController";
const router: Router = Router()

router.get('/', getAllPlayers)
router.post('/', createPlayer)
router.put('/', editPlayer)
router.delete('/', deletePlayer) 

export default router