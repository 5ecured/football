import { Router } from "express";
import { getAllPlayers } from "../controllers/playerController";
const router: Router = Router()

router.get('/', getAllPlayers)