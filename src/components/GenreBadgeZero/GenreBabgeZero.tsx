import {FC} from 'react';
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    genre: IGenre
}

const GenreBabgeZero: FC<IProps> = ({genre}) => {
    let {name, id} = genre;
    let genre_id = id;
    return (
        <div>
            <Link to={`/genres/${name}?with_genres=${genre_id}&&page=1`}>{name}</Link>
        </div>
    );
};

export {GenreBabgeZero};
