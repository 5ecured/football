import { Request, Response } from 'express'
import Player from '../models/Player'

export const getAllPlayers = async (req: Request, res: Response) => {
    try {
        const players = await Player.find()
        res.status(200).json(players)
    } catch (error) {
        console.log(error);
    }
}