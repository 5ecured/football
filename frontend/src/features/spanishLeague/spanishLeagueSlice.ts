import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { spanishLeagueOptions } from "../../utils/functions"
import axios from 'axios'

export interface SpanishLeagueInterface {
    matchday: string
    data: any[]
    loading: boolean
}

const initialState: SpanishLeagueInterface = {
    matchday: '',
    data: [],
    loading: false
}

export const fetchData = createAsyncThunk(
    'spanishLeague/fetchData',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.request(spanishLeagueOptions)
            const dataInObject = data[0]

            const whichMatchday = Object.keys(dataInObject)[0]
            const latestMatchday = Object.values(dataInObject)[0]

            return [whichMatchday, latestMatchday]
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const spanishLeagueSlice = createSlice({
    name: 'spanishLeague',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<unknown | any>) => {
            state.matchday = action.payload[0]
            state.data = action.payload[1]
            state.loading = false
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export const { } = spanishLeagueSlice.actions
export default spanishLeagueSlice.reducer