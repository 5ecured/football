import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { options } from "../../utils/championsLeagueFetchOptions"
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
            const dataInObject = data[0] //based on the API, data[0] seems to return the latest matchday

            /**
             * Now inside dataInObject, we have:
             *          KEY                     VALUE
             * Group stage: Matchday 3: [{..}, {..}, {..}, etc.] //this VALUE is what latestMatchday contains
             * Group stage: Matchday 2: [{..}, {..}, {..}, etc.]
             * Group stage: Matchday 1: [{..}, {..}, {..}, etc.]
             * 
             * Below, Object.values() returns just the values of an object, in an array. Then we use [0] to get first element
             * [0] used below basically is the same as       dataInObject["Group stage: Matchday 3"]. Its just easier to use [0]
             * 
             * 
             */


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