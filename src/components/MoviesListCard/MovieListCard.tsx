import {FC} from 'react';
import {Link} from "react-router-dom";

import css from './MovieListCard.module.css'
import {IMovieCard} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";


interface IProps {
    movie: IMovieCard
}

const MovieListCard: FC<IProps> = ({movie}) => {
    let {original_title, id, poster_path, overview,vote_average} = movie;
    let sizeStar:number = 18
    let colorStar:string = 'snow'
    let edit:boolean = false
    let width:string = '105px'
    return (
        <Link className={css.moviesForm} to={`/movies/${id}`}>
            <div className={css.image}><PosterPreview key={id} image={poster_path} width={width} name={original_title}/></div>
            <div className={css.text}>
                <div className={css.title}><b>{original_title}</b></div>
                <StarsRating key={id} star={vote_average} edit={edit} sizeStar={sizeStar} colorStar={colorStar}/>
                <div className={css.overview}><MovieInfo key={id} overview={overview}/></div>
            </div>

        </Link>
    );
};

export {MovieListCard};
