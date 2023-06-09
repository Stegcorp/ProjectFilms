import {FC} from 'react';
import css from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slice";
import {useForm} from "react-hook-form";
import classNames from "classnames";

interface IProps {

}

const Pagination: FC<IProps> = () => {
    let {handleSubmit, register, reset} = useForm();

    let {page,switcher} = useAppSelector(state => state.movieReducer);
    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    let gen = searchParams.get('with_genres');
    let filmName = searchParams.get('query');

    const prev = () => {
        dispatch(movieActions.setPagination(page - 1))
        if(filmName!==null){
        navigate(`?with_genres=${gen}&&page=${page - 1}&&query=${filmName}`)
        }else {
        navigate(`?with_genres=${gen}&&page=${page - 1}`)
        }
    }

    const next = () => {
        dispatch(movieActions.setPagination(page + 1))
        if (filmName!==null){
        navigate(`?with_genres=${gen}&&page=${page + 1}&&query=${filmName}`)
        }else {
        navigate(`?with_genres=${gen}&&page=${page + 1}`)
        }
    }
    const pageNow = (num:any) => {
       let {page} = num;
        if(filmName!==null){
            navigate(`?with_genres=${gen}&&page=${page}&&query=${filmName}`)
        }else {
            navigate(`?with_genres=${gen}&&page=${page}`)
        }
        dispatch(movieActions.setPagination(+page))
        reset()
    }

    return (
        <div className={css.pagination}>
            <div>
                <button className={classNames(css.btn5,switcher?css.colorSnow:css.colorBlack)} disabled={page === 1} onClick={() => {
                    prev()
                }}><b>PREV PAGE</b></button>
            </div>
            <form  onSubmit={handleSubmit(pageNow)}>
            <input type="number" min={1} max={500} placeholder={page+''} {...register('page')}/>

            </form>

            <div>
                <button className={classNames(css.btn5,switcher?css.colorSnow:css.colorBlack)} disabled={page === 500} onClick={() => {
                    next()
                }}><b>NEXT PAGE</b></button>
            </div>
        </div>
    );
};

export {Pagination};
