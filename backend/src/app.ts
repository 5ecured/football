import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import playerRoute from './routes/playerRoute'
import * as dotenv from 'dotenv'
dotenv.config()


const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/', playerRoute)

export { app }