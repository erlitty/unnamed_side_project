import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Movie } from '../../app/types'

interface MoviesState {
    list: Movie[],
}

const initialState: MoviesState = {
    list: [],
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Movie>) => {
            state.list.push(action.payload)
        },
        remove: (state, action: PayloadAction<Movie>) => {
            state.list.splice(state.list.indexOf(action.payload), 1)
        }
    }
})

export const { add, remove } = moviesSlice.actions

export const selectMovies = (state: RootState) => state.movies.moviesList

export default moviesSlice.reducer