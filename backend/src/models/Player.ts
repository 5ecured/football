import { Schema, model } from "mongoose"

export interface Player {
    id: number | null
    name: string
    club: string,
    image?: string,
    important: boolean
}

const PlayerSchema = new Schema<Player>({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    important: {
        type: Boolean,
        required: true
    }
})

export default model<Player>('Player', PlayerSchema)