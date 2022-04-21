import React,{useState,useEffect} from 'react';
import './MediaCard.css';
import {BsFillPlayFill} from 'react-icons/bs';
import axios from "axios";

export default function MediaCard(props) {
    const {mediaData,mediaStyle,trailerLink,clip} = props;
 

   
  return (
    <div>
    <div  className='mediaCard'>

      {  
         mediaData.map((c)=>(
      <div className="contentShow"  style={{width:mediaStyle.width}}> 
       <img src={mediaStyle.identity===true?`https://www.themoviedb.org/t/p/original/${c.file_path}`:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg'} style={{width:mediaStyle.width}} alt="" />
       { mediaStyle.active &&
       <div className="contentShowIcon" >
         <div className='playBtn' onClick={() => {mediaStyle.identity===false?clip(c.key):trailerLink()}}>
         <BsFillPlayFill />
         </div>
       </div>
        }
     </div>

          ))
      }
    
    </div>
    </div>
  )
}