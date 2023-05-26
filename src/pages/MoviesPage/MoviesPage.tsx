import {FC} from 'react';
import css from './MoviesPage.module.css'
import {MoviesListCards, Pagination} from "../../components";
import {Link} from "react-router-dom";
import {movieActions} from "../../redux/slice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import classNames from "classnames";

interface IProps {

}

const MoviesPage: FC<IProps> = () => {
    let {switcher} = useAppSelector(state => state.movieReducer);
    let dispatch = useAppDispatch();
    return (
        <div className={classNames(css.movies,switcher?css.themeSnow:css.themeBlack)}>
        <div className={css.center}>    <Link to={'/genres'} className={classNames(css.linkGenres,switcher?css.themeSnow:css.themeBlack)} onClick={() => dispatch(movieActions.setPagination(1))}><b>GENRES</b></Link></div>
            <Pagination/>
            <div ><p className={css.moviesText}>Movies</p></div>
            <MoviesListCards/>
        </div>
    );
};

export {MoviesPage};
