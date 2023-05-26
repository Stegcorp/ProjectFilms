import {FC} from 'react';

interface IProps {
    image: string|undefined
    name: string|undefined
    width:string
}

const PosterPreview: FC<IProps> = ({image, name,width}) => {
    return (
        <div><img src={"https://image.tmdb.org/t/p/w500/"+image} alt={name} width={width}/></div>
    );
};

export {PosterPreview};
