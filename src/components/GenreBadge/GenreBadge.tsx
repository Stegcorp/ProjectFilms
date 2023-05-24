import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {genreActions} from "../../redux/slice";
import {GenreBabgeZero} from "../GenreBadgeZero/GenreBabgeZero";
import css from './GenreBadge.module.css'


interface IProps {

}

const GenreBadge: FC<IProps> = () => {
    let {genres} = useAppSelector(state => state.genreReducer);
    let dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])


    return (
        <div className={css.genre}>
            {genres && genres.map(value => <GenreBabgeZero key={value.id} genre={value}/>)}
        </div>
    );
};

export {GenreBadge};
