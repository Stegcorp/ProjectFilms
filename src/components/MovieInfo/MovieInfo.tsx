import {FC} from 'react';

import css from './MovieInfo.module.css'
interface IProps {
    overview: string
}

const MovieInfo: FC<IProps> = ({overview}) => {

    return (
        <div className={css.text}>
            <p className={css.pex}>{overview}</p>
        </div>
    );
};

export {MovieInfo};
