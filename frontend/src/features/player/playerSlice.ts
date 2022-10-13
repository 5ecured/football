import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialData } from "../../utils/initialData"
import { fetchFromBackend, createPlayer, updatePlayer, removePlayer, togglePlayer } from "../../api/frontToBackAPI"

export interface PlayerInterface {
    id?: string,
    _id?: null,
    name: string
    club: string,
    photo?: string,
    favorite: boolean
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
            action.payload.id = String(state.mainArray.length + 1)
            state.mainArray.unshift(action.payload)
        },
        deletePlayer: (state, action: PayloadAction<string>) => {
            const temp = state.mainArray.filter(player => player.id !== action.payload)
            state.mainArray = temp
        },
        editPlayer: (state, action) => {
            const obj = action.payload[0]
            const id = action.payload[1]
            const temp = state.mainArray.map(player => player.id === id ? obj : player)
            state.mainArray = temp
        },
        toggleFavourite: (state, action: PayloadAction<string>) => {
            const playerToToggle: any = state.mainArray.find(player => player.id === action.payload)
            playerToToggle.favorite = !(playerToToggle.favorite)
            const temp = state.mainArray.map(player => player.id === action.payload ? playerToToggle : player)
            state.mainArray = temp
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFromBackend.fulfilled, (state, action: PayloadAction<unknown | any>) => {
            action.payload.forEach((player: PlayerInterface) => {
                state.mainArray.unshift(player)
            })
        })
        builder.addCase(createPlayer.fulfilled, (state, action: PayloadAction<unknown | any>) => {
            state.mainArray.unshift(action.payload)
        })
        builder.addCase(updatePlayer.fulfilled, (state, action) => {
            const temp = state.mainArray.map(player => player._id === action.payload._id ? action.payload : player)
            state.mainArray = temp
        })
        builder.addCase(removePlayer.fulfilled, (state, action) => {
            const temp = state.mainArray.filter(player => player._id !== action.payload)
            state.mainArray = temp
        })
        builder.addCase(togglePlayer.fulfilled, (state, action) => {
            const temp = state.mainArray.map(player => player._id === action.payload._id ? action.payload : player)
            state.mainArray = temp
        })
    }
})

export const { addPlayer, deletePlayer, editPlayer, toggleFavourite } = playerSlice.actions
export default playerSlice.reducer