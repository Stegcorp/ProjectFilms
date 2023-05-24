import {FC} from 'react';

import {Search} from "../../components";
import css from './Simple.module.css'

interface IProps{

}

const SimpleLayout:FC<IProps>  = () => {
 return (
  <div className={css.simple}>
      <div className={css.view}>
          <div className={css.title1}>Watch our films everywhere</div>
          <div className={css.title2}>Unlimited movies, TV shows, and more</div>
      </div>
            <Search/>
  </div>
 );
};

export {SimpleLayout};
