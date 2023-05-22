import {FC} from 'react';
import {Search} from "../../components";

interface IProps{

}

const SimpleLayout:FC<IProps>  = () => {
 return (
  <div>
   <Search/>
  </div>
 );
};

export {SimpleLayout};
