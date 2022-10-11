import { Router } from "express";
import { createPlayer, getAllPlayers, editPlayer, deletePlayer, togglePlayer } from "../controllers/playerController";
const router: Router = Router()

router.get('/', getAllPlayers)
router.post('/', createPlayer)
router.put('/', editPlayer)
router.delete('/', deletePlayer)
router.patch('/', togglePlayer)

export default router