import {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {VideoMovie} from "../Video/VideoMovie";
import StarRatings from "react-star-ratings";

interface IProps {

}


const MovieList: FC<IProps> = () => {
    let {movie} = useAppSelector(state => state.movieReducer);
    let dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>();

    // window.onpopstate = function(event) {
    // window.history.back()
    // };
    // console.log(window);
    useEffect(() => {

        dispatch(movieActions.getById({id}))

    }, [dispatch, id,])
    return (
        <div>
            <div>{movie && movie.title}</div>
            <div>{movie && movie.overview}</div>
            <VideoMovie/>
            <StarRatings/>
            <div>{movie && movie.vote_average}</div>
        </div>
    );
};

export {MovieList};
