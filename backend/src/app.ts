import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()


const app: Application = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('HAHA')
})

export { app }