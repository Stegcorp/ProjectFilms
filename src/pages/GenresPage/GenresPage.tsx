import {FC} from 'react';

import {GenreBadge} from "../../components";
import css from './GenrePage.module.css'




interface IProps{

}

const GenresPage:FC<IProps>  = () => {
 return (
  <div className={css.color}>
   <GenreBadge/>
  </div>
 );
};

export {GenresPage};
