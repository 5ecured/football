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
        const playerFromFrontend = { name: req.body.name, club: req.body.club, favorite: req.body.favorite }
        const updatedPlayer = await Player.findByIdAndUpdate(id, playerFromFrontend, { new: true })
        res.status(200).json(updatedPlayer)
    } catch (error) {
        console.log(error);
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    try {
        //in frontend: 
        //await axios.delete('http://localhost:8080/', { data: { playerId } })
        //now we can access playerId inside req.body.playerId
        const { playerId } = req.body

        // Need to return something to the frontend, otherwise the extraReducers will be in 'pending' instead of 'fulfilled'
        const deleted = await Player.findByIdAndDelete(playerId)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
    }
}

export const togglePlayer = async (req: Request, res: Response) => {
    try {
        const id = req.body._id
        const playerFromFrontend = { name: req.body.name, club: req.body.club, favorite: !req.body.favorite }
        const toggledPlayer = await Player.findByIdAndUpdate(id, playerFromFrontend, { new: true })
        res.status(200).json(toggledPlayer)
    } catch (error) {
        console.log(error);
    }
}