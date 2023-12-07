import { PayloadAction } from "@reduxjs/toolkit"
import { Movie, Character, Tv } from './types';

const initialState = {
  moviesList: [] as Movie[],
  tvList: [] as Tv[],
  charactersList: [] as Character[],
}

export default function appReducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    default:
      return state
  }
}