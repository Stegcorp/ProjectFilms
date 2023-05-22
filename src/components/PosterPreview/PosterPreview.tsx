import {FC} from 'react';

interface IProps {
    image: string
    name: string
}

const PosterPreview: FC<IProps> = ({image, name}) => {

    return (
        <div><img src={image} alt={name}/></div>
    );
};

export {PosterPreview};
