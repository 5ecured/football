import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialData } from "../../utils/initialData"

export interface PlayerInterface {
    id: number | null
    name: string
    club: string,
    image?: string
}

export interface PlayerState {
    mainArray: PlayerInterface[]
}

const initialState: PlayerState = {
    mainArray: initialData
}


export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<PlayerInterface>) => {
            action.payload.id = state.mainArray.length + 1
            state.mainArray.unshift(action.payload)
        },
        deletePlayer: (state, action: PayloadAction<number | null>) => {
            const temp = state.mainArray.filter(player => player.id !== action.payload)
            state.mainArray = temp
        },
        editPlayer: (state, action) => {
            const obj = action.payload[0]
            const id = action.payload[1]
            const temp = state.mainArray.map(player => player.id === id ? obj : player)
            state.mainArray = temp
        }
    }
})

export const { addPlayer, deletePlayer, editPlayer } = playerSlice.actions
export default playerSlice.reducer