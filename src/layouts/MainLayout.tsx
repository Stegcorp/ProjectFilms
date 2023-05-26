import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css'
import classNames from "classnames";
import {useAppSelector} from "../hooks";


interface IProps {

}

const MainLayout: FC<IProps> = () => {
    let {switcher} = useAppSelector(state => state.movieReducer);
    return (
        <div  className={classNames(css.main,switcher?css.whiteMait:css.blackMail)}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
