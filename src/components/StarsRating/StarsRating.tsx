import {FC} from 'react';

import ReactStars from 'react-stars'
import React from 'react'


interface IProps {

}


const StarsRating: FC<IProps> = () => {

    let elementById = document.getElementById('where-to-render');
    const ratingChanged = (newRating: number) => {
        console.log(newRating)
    console.log(elementById);
    }

    return (
        <div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}/>
        </div>
    );
};

export {StarsRating};



