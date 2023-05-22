import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {useParams} from "react-router-dom";


interface IProps {

}

const VideoMovie: FC<IProps> = () => {
    let dispatch = useAppDispatch();
    let {video} = useAppSelector(state => state.movieReducer);
    let {id} = useParams();


    useEffect(() => {
        dispatch(movieActions.videoById({id}))
    }, [dispatch])

    let array:any[]=[]
    video.results?.map(value => {
        array.push(value.key)
    })
        let key = array[0];
    console.log(key);

    const opts:string = `https://www.youtube.com/embed/${key}?enablejsapi=1&origin=http://localhost:3000`



    return (
        <div>
            <iframe id="player"
                    src={opts}
                    width="640"
                    height="360"
                    frameBorder="0"></iframe>
        </div>
    );
};

export {VideoMovie};
