import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { options } from "../../utils/fetchChampionsLeague"
import axios from 'axios'

export interface ChampionsLeagueInterface {
    data: any[]
    loading: boolean
}

const initialState: ChampionsLeagueInterface = {
    data: [],
    loading: false
}

export const fetchData = createAsyncThunk(
    'championsLeague/fetchData',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.request(options)
            const dataInObject = data[0]
            const latestMatchday = Object.values(dataInObject)[0]
            return latestMatchday
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const championsLeagueSlice = createSlice({
    name: 'championsLeague',
    initialState,
    reducers: {
        // fetchData: (state, action) => {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<unknown | any>) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export const { } = championsLeagueSlice.actions
export default championsLeagueSlice.reducer