import {FC} from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'


interface IProps{

}

const Header:FC<IProps>  = () => {
 return (
  <div className={css.Header}>
   <div className={css.leftGroup}>
       <div><Link to='/'>MOVIES MIRACLE</Link></div>
       <div>User</div>
       <div><button>Dark Mode</button></div>
   </div>
   <div><Link to="/movies">FILMS LIST</Link> </div>
  </div>
 );
};

export {Header};
