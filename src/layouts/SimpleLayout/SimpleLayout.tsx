import {FC} from 'react';

import {Search} from "../../components";
import css from './Simple.module.css'
import classNames from "classnames";
import {useAppSelector} from "../../hooks";

interface IProps{

}

const SimpleLayout:FC<IProps>  = () => {
    let {switcher} = useAppSelector(state => state.movieReducer);
 return (
  <div className={classNames(css.simple,switcher?css.colorBlack:css.colorSnow)}>
      <div className={css.view}>
          <div className={css.title1}>Watch our films everywhere</div>
          <div className={css.title2}>Unlimited movies, TV shows, and more</div>
      </div>
            <Search/>
  </div>
 );
};

export {SimpleLayout};
