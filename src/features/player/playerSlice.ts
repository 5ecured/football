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
        }
    }
})

export const { addPlayer } = playerSlice.actions
export default playerSlice.reducer