import {FC, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {movieActions} from "../../redux/slice";
import {VideoMovie} from "../Video/VideoMovie";
import {StarsRating} from "../StarsRating/StarsRating";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieList.module.css'
import classNames from "classnames";

interface IProps {

}


const MovieList: FC<IProps> = () => {

    let {movie, switcher} = useAppSelector(state => state.movieReducer);


    let {overview, title, poster_path, vote_average, genres} = movie;

    let dispatch = useAppDispatch();

    const {id} = useParams<{ id: string }>();


    let sizeStar: number = 34;
    let colorStar: string = 'gold';
    let edit: boolean = true;
    let wight: string = "350px"


    useEffect(() => {

        dispatch(movieActions.getById({id}))

    }, [dispatch, id,])
    return (
        <div>
            <div className={css.movieList}>
                <div><PosterPreview key={id} image={poster_path} width={wight} name={title}/></div>
                <div className={css.textInfo}>
                    <div className={css.title}>{title}</div>
                    <div className={css.genresField}>
                        {genres?.map(value => <Link
                            className={classNames(css.genres, switcher ? css.colorSnow : css.colorBlack)}
                            to={`/genres/${value.name}?with_genres=${value.id}&&page=1`}>{value.name}</Link>)}
                    </div>
                    <div className={css.ratingField}>
                        <p className={css.rating}>Rating:</p>
                        <StarsRating key={id} star={vote_average} colorStar={colorStar} sizeStar={sizeStar}
                                     edit={edit}/>
                    </div>
                    <div className={css.overview}>
                        <MovieInfo key={id} overview={overview}/>
                    </div>
                    <div className={css.scale}><VideoMovie key={id}/></div>
                </div>
            </div>
        </div>
    );
};

export {MovieList};
