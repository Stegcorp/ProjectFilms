import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css'


interface IProps {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div className={css.main}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
