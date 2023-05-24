import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css'
import classNames from "classnames";


interface IProps {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div  className={classNames(css.main)}>
            {/*<link rel="stylesheet" href="Normal.css"/>*/}
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
