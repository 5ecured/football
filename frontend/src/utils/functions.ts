import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { PlayerInterface } from "../features/player/playerSlice";

export const delay = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

/**
 * API CALLS
 */

export const championsLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/championsleague/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

export const englishPremierLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/premierleague/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

export const spanishLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/liga/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

export const italianLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/seriea/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

/**
 * FOR REDUX TOOLKIT EXTRAREDUCERS
 */

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

export const removePlayer = createAsyncThunk(
    'player/removePlayer',
    async (playerId: any, thunkAPI) => {
        try {
            //With axios.delete, have to pass the 2nd arg like this, so in backend we can access it thru req.body.playerId
            await axios.delete('http://localhost:8080/', { data: { playerId } })
            return playerId
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)