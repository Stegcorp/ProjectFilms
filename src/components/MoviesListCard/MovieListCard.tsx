import {FC} from 'react';
import {IMovieCard} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    movie: IMovieCard
}

const MovieListCard: FC<IProps> = ({movie}) => {
    let {original_title, overview, poster_path,id} = movie;
    return (
        <Link to={`/movies/${id}`} >
            <div>{original_title}</div>
        </Link>
    );
};

export {MovieListCard};
