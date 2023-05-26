import {FC} from 'react';


import React from 'react'
import ReactStars from 'react-stars';



interface IProps {
    star: number|undefined;
    sizeStar: number
    colorStar:string
    edit:boolean
}


const StarsRating: FC<IProps> = ({star,sizeStar,edit,colorStar}) => {


document.getElementById('where-to-render');


    return (
        <div>
            <ReactStars
                count={10}
                size={sizeStar}
                value={star}
                edit={edit}
                color1="darkslategray"
                color2={colorStar}/>
        </div>
    );
};

export {StarsRating};



