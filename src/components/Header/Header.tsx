import {FC} from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux/slice";


interface IProps{

}

const Header:FC<IProps>  = () => {
    let dispatch = useAppDispatch();
 return (
  <div className={css.Header}>
   <div className={css.leftGroup}>
       <div><Link to='/'>MOVIES MIRACLE</Link></div>
       <div>User</div>
       <div><button>Dark Mode</button></div>
   </div>
   <div><Link to="/movies?page=1" onClick={()=>dispatch(movieActions.setPagination(1))}>FILMS LIST</Link> </div>
  </div>
 );
};

export {Header};
