import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moviesApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (searchText) => {
        const response = await moviesApi.get(`?apiKey=${APIKey}&s=${searchText}&type=movie`)
            .catch((error) => {
                console.log(error, "error")
            })
        return response.data

    })

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (searchText) => {
        const response = await moviesApi.get(`?apiKey=${APIKey}&s=${searchText}&type=series`)
            .catch((error) => {
                console.log(error, "error")
            })
        return response.data
    }
)

export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails',
    async (id) => {
        const response = await moviesApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
            .catch((error) => {
                console.log(error, "error")
            })
        return response.data
    }
)


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.movies = {}
            state.shows = {}
            state.selectedMovieOrShow = {}
        }
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
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
            console.log('Fetched Succesfully');
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions // exporting actions 
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShows = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer