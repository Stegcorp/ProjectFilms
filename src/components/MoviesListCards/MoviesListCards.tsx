import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import { useSearchParams} from "react-router-dom";

import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {movieActions} from "../../redux/slice";

interface IProps {

}

const MoviesListCards: FC<IProps> = () => {
    let {movies,trigger} = useAppSelector(state => state.movieReducer);

    let dispatch = useAppDispatch();


    const [searchParams] = useSearchParams();
    let gen = searchParams.get('with_genres');
    const page: number = 1;

    useEffect(()=>{
},[trigger])
    useEffect(() => {
        if(gen){
        dispatch(movieActions.getByGenreId({gen, page}))
        }else {
        dispatch(movieActions.getAll())
        }

    }, [dispatch,gen])

    return (
        <div>
            {movies && movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>

    );
};

export {MoviesListCards};
