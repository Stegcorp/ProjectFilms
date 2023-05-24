import {FC} from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {UserInfo} from "../UserInfo/UserInfo";
import classNames from "classnames";


interface IProps{

}

const Header:FC<IProps>  = () => {
    let dispatch = useAppDispatch();
 return (
  <div className={css.Header}>
   <div className={css.leftGroup}>
       <div ><Link className={classNames(css.colorSnow,css.miracle)} to='/'>MOVIES MIRACLE</Link></div>
       <UserInfo/>
       <div><button className={css.btn3}>LIGHT MODE</button></div>
   </div>
   <div><Link className={classNames(css.colorSnow, css.filmList)} to="/movies?page=1" onClick={()=>dispatch(movieActions.setPagination(1))}>FILMS LIST</Link> </div>
  </div>
 );
};

export {Header};
