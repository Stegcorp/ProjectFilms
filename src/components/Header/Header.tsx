import {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "../../hooks";

import css from './Header.module.css'
import {movieActions} from "../../redux/slice";
import {UserInfo} from "../UserInfo/UserInfo";


interface IProps {

}

const Header: FC<IProps> = () => {
    let dispatch = useAppDispatch();
    let {switcher} = useAppSelector(state => state.movieReducer);

    const switcherButton = () => {

        dispatch(movieActions.switcher());
    }
    useEffect(() => {

    }, [dispatch, switcher])


    return (
        <div className={css.Header}>
            <div className={css.leftGroup}>
                <div><Link className={classNames(switcher?css.colorBlack:css.colorSnow, css.miracle)} to='/'>MOVIES MIRACLE</Link></div>
                <UserInfo/>
                <div>
                    <button className={css.btn3} onClick={switcherButton}>{switcher?'BLACK MODE':'LIGHT MODE'}</button>
                </div>
            </div>
            <div><Link className={classNames(switcher?css.colorBlack:css.colorSnow, css.filmList)} to="/movies?page=1"
                       onClick={() => dispatch(movieActions.setPagination(1))}>FILMS LIST</Link></div>
        </div>
    );
};

export {Header};
