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

export const createPlayer = async (req: Request, res: Response) => {
    try {
        const newPlayer = await Player.create(req.body)
        res.status(201).json(newPlayer)
    } catch (error) {
        console.log(error);
    }
}

export const editPlayer = async (req: Request, res: Response) => {
    try {
        const id = req.body._id
        const editPlayer = { name: req.body.name, club: req.body.club, important: req.body.important }
        const updatedPlayer = await Player.findByIdAndUpdate(id, editPlayer, { new: true })
        res.status(200).json(updatedPlayer)
    } catch (error) {
        console.log(error);
    }
}