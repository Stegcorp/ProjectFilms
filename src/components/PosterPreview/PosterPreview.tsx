import {FC} from 'react';

interface IProps {
    image: string
    name: string
}

const PosterPreview: FC<IProps> = ({image, name}) => {
    return (
        <div><img src={"https://image.tmdb.org/t/p/w500/"+image} alt={name} width='105px'/></div>
    );
};

export {PosterPreview};
