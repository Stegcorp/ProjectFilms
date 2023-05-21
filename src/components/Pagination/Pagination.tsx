import {FC} from 'react';
import css from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";
import {movieActions} from "../../redux/slice";

interface IProps {

}

const Pagination: FC<IProps> = () => {
    let {page} = useAppSelector(state => state.movieReducer);
    // let [, setQuery] = useSearchParams();
    let navigate = useNavigate();

        let dispatch = useAppDispatch();

    const prev = (): number => {
        dispatch(movieActions.setPagination(page-1))
        navigate(`?page=${page}`)
        return page
    }

    const next= ():number => {
        navigate(`?page=${page}`)
        dispatch(movieActions.setPagination(page+1))
        return page
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
