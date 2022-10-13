import { PlayerInterface } from "../features/player/playerSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'http://localhost:8080/'

export const fetchFromBackend = createAsyncThunk(
    'player/fetchFromBackend',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(url)
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
            const { data } = await axios.post(url, playerObj)
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
            const { data } = await axios.put(url, playerObj)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const removePlayer = createAsyncThunk(
    'player/removePlayer',
    async (playerId: any, thunkAPI) => {
        try {
            //With axios.delete, commonly no argument is passed, we use params.id instead. 
            //if you still want to pass in something, have to pass the 2nd arg like this, 
            //so in backend we can access it thru req.body.playerId
            await axios.delete(url, { data: { playerId } })
            return playerId
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const togglePlayer = createAsyncThunk(
    'player/togglePlayer',
    async (playerObj: PlayerInterface, thunkAPI) => {
        try {
            const { data } = await axios.patch(url, playerObj)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)