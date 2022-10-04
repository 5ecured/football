import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialData } from "../../utils/initialData"

export interface PlayerInterface {
    id: number
    name: string
    club: string
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

    }
})

export const { } = playerSlice.actions
export default playerSlice.reducer