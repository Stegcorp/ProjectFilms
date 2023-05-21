import {FC, useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";

interface IProps {

}


const MovieList: FC<IProps> = () => {
    let {movie} = useAppSelector(state => state.movieReducer);
    let dispatch = useAppDispatch();
    const {id} = useParams<{id:string}>();

    useEffect(() => {

        dispatch(movieActions.getById({id}))

    }, [dispatch, id,])
    return (
        <div>
            <div>{movie && movie.title}</div>
        </div>
    );
};

export {MovieList};
