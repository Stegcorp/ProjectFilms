import {FC} from 'react';
import {IMovieCard} from "../../interfaces";
import {Link} from "react-router-dom";
import css from './MovieListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import StarRatings from "react-star-ratings";

interface IProps {
    movie: IMovieCard
}

const MovieListCard: FC<IProps> = ({movie}) => {
    let {original_title,id,poster_path,overview} = movie;
    return (
        <Link className={css.moviesForm} to={`/movies/${id}`} >
           <div className={css.image}><PosterPreview image={poster_path} name={original_title}/></div>
           <div className={css.text}>
               <div className={css.title}><b>{original_title}</b></div>
                {/*<StarRatings/>*/}
                <MovieInfo overview={overview}/>
           </div>

        </Link>
    );
};

export {MovieListCard};
