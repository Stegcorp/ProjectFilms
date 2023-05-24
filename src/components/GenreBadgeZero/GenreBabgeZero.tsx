import {FC} from 'react';
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";
import css from './GenreBadgeZero.module.css'

interface IProps {
    genre: IGenre
}

const GenreBabgeZero: FC<IProps> = ({genre}) => {
    let {name, id} = genre;
    return (
        <div className={css.block}>
            <Link className={css.decor} to={`/genres/${name}?with_genres=${id}&&page=1`}><span>{name}</span></Link>
        </div>
    );
};

export {GenreBabgeZero};
