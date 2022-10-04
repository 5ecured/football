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
            state.mainArray.unshift(action.payload)
        },
        deletePlayer: (state, action: PayloadAction<number | null>) => {
            const temp = state.mainArray.filter(player => player.id !== action.payload)
            state.mainArray = temp
        }
    }
})

export const { addPlayer, deletePlayer } = playerSlice.actions
export default playerSlice.reducer