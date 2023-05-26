import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IMovie, IMovieCard, IObj, IVideo} from "../../interfaces";

interface IState {
    movies: IMovieCard[],
    page: number;
    trigger: boolean
    movie: IMovie
    video: IVideo
    switcher: boolean;

}

const initialState: IState = {
    movies: [],
    page: 1,
    trigger: false,
    movie: {},
    video: {},
    switcher: false
}


const getById = createAsyncThunk<IMovie, { id: string | undefined }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)
const videoById = createAsyncThunk<IVideo, { id: string | undefined }>(
    'movieSlice/videoById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieVideo(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)
const getAll = createAsyncThunk<IObj, { gen: string | null, page: string | null }>(
    'movieSlice/getAll',
    async ({page, gen}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, gen);
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)
const getSearch = createAsyncThunk<IObj, { filmName: string | null, page: string | null }>(
    'movieSlice/getSearch',
    async ({page, filmName}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearch(filmName, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)


let slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.page = action.payload
        },
        switcher: (state) => {
            state.switcher = !state.switcher
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                let {results} = action.payload;
                state.movies = results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(videoById.fulfilled, (state, action) => {
                state.video = action.payload
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                let {results} = action.payload;
                state.movies = results
            })


    }
});
const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    getSearch,
    videoById

}

export {
    movieActions,
    movieReducer
}
