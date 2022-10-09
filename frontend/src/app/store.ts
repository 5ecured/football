import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../features/player/playerSlice'
import championsLeagueReducer from '../features/championsLeague/championsLeagueSlice'
import englishPremierLeagueReducer from '../features/englishPremierLeague/englishPremierLeagueSlice'
import spanishLeagueReducer from '../features/spanishLeague/spanishLeagueSlice'

export const store = configureStore({
    reducer: {
        player: playerReducer,
        championsLeague: championsLeagueReducer,
        englishPremierLeague: englishPremierLeagueReducer,
        spanishLeague: spanishLeagueReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch