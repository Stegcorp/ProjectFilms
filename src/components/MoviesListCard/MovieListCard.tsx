import {FC} from 'react';
import {IMovieCard} from "../../interfaces";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovieCard
}

const MovieListCard: FC<IProps> = ({movie}) => {
    let {original_title, overview, poster_path,id} = movie;
    const navigate = useNavigate();
    return (
        <Link to={`${id}`} >
            <div>{original_title}</div>
        </Link>
    );
};

export {MovieListCard};
