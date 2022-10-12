import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { championsLeagueOptions } from "../../api/footballAPI"
import axios from 'axios'

export interface ChampionsLeagueInterface {
    matchday: string
    data: any[]
    loading: boolean
}

const initialState: ChampionsLeagueInterface = {
    matchday: '',
    data: [],
    loading: false
}

export const fetchData = createAsyncThunk(
    'championsLeague/fetchData',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.request(championsLeagueOptions)
            const dataInObject = data[0]

            /**
             * Now inside dataInObject, we have:
             *          KEY                     VALUE
             * Group stage: Matchday 3: [{..}, {..}, {..}, etc.] //this VALUE is what latestMatchday below contains
             * Group stage: Matchday 2: [{..}, {..}, {..}, etc.]
             * Group stage: Matchday 1: [{..}, {..}, {..}, etc.]
             * 
             * Below, Object.values() returns just the values of an object, in an array. Then we use [0] to get first element
             * [0] used below basically is the same as       dataInObject["Group stage: Matchday 3"]. Its just easier to use [0]
             * 
             * 
             */

            const whichMatchday = Object.keys(dataInObject)[0] //This will contain "Group stage: Matchday 3, 2, 1 or so"
            const latestMatchday = Object.values(dataInObject)[0]

            return [whichMatchday, latestMatchday] //Must return in an array/object as action.payload only accepts 1 argument
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
            state.matchday = action.payload[0]
            state.data = action.payload[1]
            state.loading = false
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export const { } = championsLeagueSlice.actions
export default championsLeagueSlice.reducer