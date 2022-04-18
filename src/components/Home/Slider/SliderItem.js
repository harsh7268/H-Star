import React from 'react';
import './SliderItem.css';
import { Link} from "react-router-dom";

export default function SliderItem(props) {
    const { id,poster_path,title,date,media_type, backdrop_path,overview,mainFunc,type,known_for} = props;
    const func = () =>{
      mainFunc(id,type,known_for);
      console.log(type,id,known_for);
      window.scrollTo(0, 0);
    }
   

  return (
    <Link to={`/${id}`}> 
    <div className='sliderItem'  onClick={func}  key={id}>
      <img src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:`https://media.istockphoto.com/vectors/missing-person-milk-carton-vector-id507773587?k=20&m=507773587&s=612x612&w=0&h=FRVHzYJRUigco0DK6fNgwnzX9AgdMNhgZH6Zy5phFg4=`} alt="" />
    </div>
    </Link>
  )
}
