import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moviesApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const movieText = "Harry"
        const response = await moviesApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((error) => {
                console.log(error, "error")
            })
        return response.data

    })

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async () => {
        const seriesText = "Money"
        const response = await moviesApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
            .catch((error) => {
                console.log(error, "error")
            })
        return response.data
    }
)


const initialState = {
    movies: {},
    shows: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched Succesfully');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('Fetched Succesfully');
            return { ...state, shows: payload }
        },
    }
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export default movieSlice.reducer