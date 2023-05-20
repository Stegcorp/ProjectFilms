import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IMovie, IMovieCard, IMovieObj, IObj} from "../../interfaces";

interface IState {
    movies: IMovieCard[],
    trigger: boolean
    movie: IMovie | null

}

const initialState: IState = {
    movies: [],
    trigger: false,
    movie: null
}

const getAll = createAsyncThunk<IObj, void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)

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


let slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                let {results} = action.payload;
                state.movies = results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload

            })
    }
});
const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll,
    getById
}

export {
    movieActions,
    movieReducer
}
