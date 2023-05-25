import {FC} from 'react';
import css from './MoviesPage.module.css'
import {MoviesListCards, Pagination} from "../../components";
import {Link} from "react-router-dom";
import {movieActions} from "../../redux/slice";
import {useAppDispatch} from "../../hooks";

interface IProps {

}

const MoviesPage: FC<IProps> = () => {
    let dispatch = useAppDispatch();
    return (
        <div className={css.movies}>
        <div className={css.center}>    <Link to={'/genres'} className={css.linkGenres} onClick={() => dispatch(movieActions.setPagination(1))}>GENRES</Link></div>
            <Pagination/>
            <div ><p className={css.moviesText}>Movies</p></div>
            <MoviesListCards/>
        </div>
    );
};

export {MoviesPage};
