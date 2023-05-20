import {FC} from 'react';
import {IGenre} from "../../interfaces";

interface IProps{
genre: IGenre
}

const GenreBabgeZero:FC<IProps>  = ({genre}) => {
    let {name,id} = genre;

 return (
  <div>
   <div>{name}</div>
  </div>
 );
};

export {GenreBabgeZero};
