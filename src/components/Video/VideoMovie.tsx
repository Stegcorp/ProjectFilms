import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {useParams} from "react-router-dom";


interface IProps {

}

const VideoMovie: FC<IProps> = () => {
    let {video} = useAppSelector(state => state.movieReducer);

    let dispatch = useAppDispatch();

    let {id} = useParams();


    useEffect(() => {
        dispatch(movieActions.videoById({id}))
    }, [dispatch])

    let array: any[] = []

    video.results?.map(value => {
        array.push(value.key)
    })
    let key = array[0]



    const opts: string = `https://www.youtube.com/embed/${key}?enablejsapi=1&origin=http://localhost:3000`


    return (
            <iframe width="400" height="250" src={opts}
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
    );
};

export {VideoMovie};
