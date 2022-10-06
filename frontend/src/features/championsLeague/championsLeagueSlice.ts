import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChampionsLeagueInterface {
    data: any[]
}

const initialState: ChampionsLeagueInterface = {
    data: []
}

export {}