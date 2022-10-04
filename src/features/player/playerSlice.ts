import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
    mainArray: any[]
}

const initialState: PlayerState = {
    mainArray: []
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

    }
})

export const { } = playerSlice.actions
export default playerSlice.reducer