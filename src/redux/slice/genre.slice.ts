import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IGenre} from "../../interfaces";
import {IGenreObj} from "../../interfaces/genre_obj.interface";

interface IState {
    genres: IGenre[],
    trigger: boolean


}

const initialState: IState = {
    genres: [],
    trigger: false
}

const getAll = createAsyncThunk<IGenreObj, void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllGenre();
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)


let slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                let {genres} = action.payload;
                state.genres = genres
            })
    }
});
const {actions, reducer: genreReducer} = slice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreActions,
    genreReducer
}
