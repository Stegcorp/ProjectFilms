import {FC} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import css from './Search.module.css'

interface IProps {

}


const Search: FC<IProps> = () => {
    let {handleSubmit, register, reset} = useForm();
    const [searchParams] = useSearchParams();
    let navigate = useNavigate();

    let page = searchParams.get('page')||'1'
    const formSearch = async (movieName: any) => {
        let {filmName} = movieName;
        navigate(`/movies/search?query=${filmName}&&page=${page}`)
        reset()
    }
    return (
        <form  onSubmit={handleSubmit(formSearch)}>
           <input className={css.input} type="text" placeholder={'  Search for a movie'} onKeyDown={() => formSearch} {...register("filmName")}/>
        </form>
    );
};

export {Search};
