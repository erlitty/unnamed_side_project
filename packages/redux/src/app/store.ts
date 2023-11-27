import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducer'

const store = configureStore({ reducer: appReducer })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {movies: MoviesState, tv: TvState, characters: CharactersState}
export type AppDispatch = typeof store.dispatch