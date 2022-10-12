import { Schema, model } from "mongoose"

export interface Player {
    // id: number | null
    name: string
    club: string,
    photo?: string,
    important: boolean
}

const PlayerSchema = new Schema<Player>({
    // id: {
    //     type: Number,
    // },
    name: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    important: {
        type: Boolean,
        required: true
    }
})

const Player = model<Player>('Player', PlayerSchema)
export default Player