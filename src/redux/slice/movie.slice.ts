import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IMovie, IMovieCard, IObj} from "../../interfaces";

interface IState {
    movies: IMovieCard[],
    page: number;
    trigger: boolean
    movie: IMovie | null

}

const initialState: IState = {
    movies: [],
    page: 1,
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
const getByGenreId = createAsyncThunk<IObj, { gen: string | null, page: number }>(
    'movieSlice/getByGenreId',
    async ({page, gen}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllObj(page, gen);
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
        setPagination: (state, action)=> {
                state.page =action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getByGenreId.fulfilled, (state, action) => {
                let {results} = action.payload;
                state.movies = results
            })
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
    getById,
    getByGenreId,

}

export {
    movieActions,
    movieReducer
}
