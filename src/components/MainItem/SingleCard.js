import React, { useEffect, useState } from 'react'
import './SingleCard.css';
import { Link} from "react-router-dom";
export default function SingleCard(props) {
  const {title, backdrop_path,id, poster_path,mainFunc,media_type,type,known_for} = props;

  const func = () =>{
    mainFunc(id,type,known_for,'cast');
  
  }
  
  return (
    <div>
     
    <Link to={`/${id}`}>
    <div className='cardItem' onClick={func}>
   <img src={backdrop_path&& backdrop_path!==undefined?`https://image.tmdb.org/t/p//w500/${poster_path}`:'https://media.istockphoto.com/vectors/missing-person-milk-carton-vector-id507773587?k=20&m=507773587&s=612x612&w=0&h=FRVHzYJRUigco0DK6fNgwnzX9AgdMNhgZH6Zy5phFg4='} alt="" />
    </div>
    </Link>
   
    </div>
  )
}