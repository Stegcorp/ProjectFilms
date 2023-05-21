import {FC} from 'react';
import css from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slice";

interface IProps {

}

const Pagination: FC<IProps> = () => {
    let {page} = useAppSelector(state => state.movieReducer);
    let navigate = useNavigate();
        let dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    let gen = searchParams.get('with_genres');
    const prev = () => {
        dispatch(movieActions.setPagination(page-1))
        navigate(`?with_genres=${gen}&&page=${page-1}`)
    }

    const next=  () => {
         dispatch(movieActions.setPagination(page+1))
         navigate(`?with_genres=${gen}&&page=${page+1}`)
    }

    return (
        <div className={css.pagination}>
            <div>
                <button disabled={page === 1} onClick={() => {
                    prev()
                }}><b>{"<<"}</b></button>
            </div>
            <h2>{page}</h2>
            <div>
                <button disabled={page === 500} onClick={() => {
                    next()
                }}><b>{">>"}</b></button>
            </div>
        </div>
    );
};

export {Pagination};
