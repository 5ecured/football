import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialData } from "../../utils/initialData"
import axios from 'axios'

export interface PlayerInterface {
    id?: string,
    _id?: null,
    name: string
    club: string,
    image?: string,
    important: boolean
}

export interface PlayerState {
    mainArray: PlayerInterface[]
}

const initialState: PlayerState = {
    mainArray: initialData
}

export const fetchFromBackend = createAsyncThunk(
    'player/fetchFromBackend',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('http://localhost:8080/')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createPlayer = createAsyncThunk(
    'player/createPlayer',
    async (playerObj: PlayerInterface, thunkAPI) => {
        try {
            const { data } = await axios.post('http://localhost:8080/', playerObj)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updatePlayer = createAsyncThunk(
    'player/updatePlayer',
    async (playerObj: PlayerInterface, thunkAPI) => {
        try {
            const { data } = await axios.put('http://localhost:8080/', playerObj)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


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
            playerToToggle.important = !(playerToToggle.important)
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
    }
})

export const { addPlayer, deletePlayer, editPlayer, toggleFavourite } = playerSlice.actions
export default playerSlice.reducer