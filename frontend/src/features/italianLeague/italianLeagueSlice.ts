import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { italianLeagueOptions } from "../../api/footballAPI"
import axios from 'axios'

export interface ItalianLeagueInterface {
    matchday: string
    data: any[]
    loading: boolean
}

const initialState: ItalianLeagueInterface = {
    matchday: '',
    data: [],
    loading: false
}

export const fetchData = createAsyncThunk(
    'italianLeague/fetchData',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.request(italianLeagueOptions)
            const dataInObject = data[0]

            const whichMatchday = Object.keys(dataInObject)[0]
            const latestMatchday = Object.values(dataInObject)[0]

            return [whichMatchday, latestMatchday]
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const italianLeagueSlice = createSlice({
    name: 'italianLeague',
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

export const { } = italianLeagueSlice.actions
export default italianLeagueSlice.reducer