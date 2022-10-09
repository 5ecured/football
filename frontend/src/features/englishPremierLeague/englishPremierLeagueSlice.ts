import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import type { PayloadAction } from "@reduxjs/toolkit"
import { englishPremierLeagueOptions } from "../../utils/championsLeagueFetchOptions"

export interface EnglishPremierLeagueInterface {
    matchday: string
    data: any[],
    loading: boolean
}

const initialState: EnglishPremierLeagueInterface = {
    matchday: '',
    data: [],
    loading: false
}

export const fetchData = createAsyncThunk(
    'englishPremierLeague/fetchData',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.request(englishPremierLeagueOptions)
            const dataInObject = data[0]

            const whichMatchday = Object.keys(dataInObject)[0]
            const latestMatchday = Object.values(dataInObject)[0]

            return [whichMatchday, latestMatchday]
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const englishPremierLeagueSlice = createSlice({
    name: 'englishPremierLeague',
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

export const { } = englishPremierLeagueSlice.actions
export default englishPremierLeagueSlice.reducer