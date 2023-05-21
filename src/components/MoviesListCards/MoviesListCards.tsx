import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {movieActions} from "../../redux/slice";

interface IProps {

}

const MoviesListCards: FC<IProps> = () => {
    let {movies} = useAppSelector(state => state.movieReducer);

    let dispatch = useAppDispatch();


    const [searchParams] = useSearchParams();
    let page = searchParams.get('page');
    let gen = searchParams.get('with_genres');


    useEffect(() => {
        dispatch(movieActions.getAll({gen, page}))
    }, [dispatch, gen,page])

    return (
        <div>
            {movies && movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>

    );
};

export {MoviesListCards};
