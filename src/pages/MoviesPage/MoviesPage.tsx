import {FC} from 'react';
import css from './MoviesPage.module.css'
import {MoviesListCards, Pagination} from "../../components";
import {Link, Outlet} from "react-router-dom";

interface IProps{

}

const MoviesPage:FC<IProps>  = () => {
 return (
  <div className={css.movies}>
   <Link to={'/genres'}>GENRES</Link>
        <Pagination/>
      <MoviesListCards/>
  </div>
 );
};

export {MoviesPage};
