import {FC} from 'react';
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";
import css from './GenreBadgeZero.module.css'
import {useAppSelector} from "../../hooks";
import classNames from "classnames";

interface IProps {
    genre: IGenre
}

const GenreBabgeZero: FC<IProps> = ({genre}) => {
    let {switcher} = useAppSelector(state => state.movieReducer);
    let {name, id} = genre;
    return (
        <div className={css.block}>
            <Link className={classNames(css.decor,switcher?css.colorBlack:css.colorSnow)} to={`/genres/${name}?with_genres=${id}&&page=1`}><span>{name}</span></Link>
        </div>
    );
};

export {GenreBabgeZero};
