import {FC} from 'react';

import {MovieList} from "../../components";


interface IProps {

}

const MoviePage: FC<IProps> = () => {
    return (
            <MovieList/>
    );
};

export {MoviePage};
