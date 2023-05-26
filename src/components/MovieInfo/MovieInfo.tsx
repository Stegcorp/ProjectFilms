import {FC} from 'react';


interface IProps {
    overview: string|undefined
}

const MovieInfo: FC<IProps> = ({overview}) => {

    return (
        <div>
            {overview}
        </div>
    );
};

export {MovieInfo};
