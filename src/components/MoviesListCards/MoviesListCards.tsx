import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {movieActions} from "../../redux/slice";


interface IProps {

}

const MoviesListCards: FC<IProps> = () => {
    let {movies} = useAppSelector(state => state.movieReducer);
    let dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch])

    return (
        <div>
            {movies &&  movies.map(movie => <MovieListCard key={movie.id} movie={movie}/> )}
        </div>

    );
};

export {MoviesListCards};
