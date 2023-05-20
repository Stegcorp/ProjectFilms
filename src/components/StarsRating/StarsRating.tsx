import {FC} from 'react';

import ReactStars from 'react-stars'
import React from 'react'


interface IProps {

}



document.getElementById('where-to-render')

const StarsRating: FC<IProps> = () => {

    const ratingChanged = (newRating: number) => {

    }

    return (
        <div>
            <ReactStars
                count={10}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} value={5.6}/>
        </div>
    );
};

export {StarsRating};



