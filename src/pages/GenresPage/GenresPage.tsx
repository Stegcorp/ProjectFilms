import {FC} from 'react';

import {GenreBadge} from "../../components";
import css from './GenrePage.module.css'
import {useAppSelector} from "../../hooks";
import classNames from "classnames";


interface IProps {

}

const GenresPage: FC<IProps> = () => {
    let {switcher} = useAppSelector(state => state.movieReducer);
    return (
        <div className={classNames(css.genres,switcher?css.colorSnow:css.colorBlack)}>
            <GenreBadge/>
        </div>
    );
};

export {GenresPage};
