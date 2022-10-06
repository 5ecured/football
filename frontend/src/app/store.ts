import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../features/player/playerSlice'
import championsLeagueReducer from '../features/championsLeague/championsLeagueSlice'

export const store = configureStore({
    reducer: {
        player: playerReducer,
        championsLeague: championsLeagueReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch