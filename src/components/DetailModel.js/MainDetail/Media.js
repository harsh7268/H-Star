
import React,{useState,useEffect} from 'react';
import './Media.css';
import MediaCard from './MediaCard';
import axios from "axios";

let x;
export default function Media(props) {
  
  const {trailerLink,content,type,id,topBar,trailerKey,clip} = props;
 const [mediaData,setMediaData] = useState([]);
 const [mediaStyle,setMediaStyle] = useState({
   width:'47vw',
   popActive:'',
   vidActive:'',
   bacActive:'active',
   posActive:'',
   active:true,
   identity:true
 });
 const [mediaLength,setMediaLength] = useState({
   vidLength:trailerKey.length,
   bacLength:0,
   posLength:0
 })

                      
  const func = async (a) =>{
  
   if(a==='default'){
    console.log(trailerKey.length);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/images?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
      x=data;

      let arr=[x.backdrops[0]]
      setMediaData(arr);
      setMediaStyle({
        width:'94vw',
        popActive:'active',
        vidActive:'',
        bacActive:'',
        posActive:'',
        active:true,
        identity:true
      });
      setMediaLength({
        vidLength:trailerKey.length,
        bacLength:x.backdrops.length,
        posLength:x.posters.length
      })
      console.log(trailerKey)
     
    }else if(a==='pop'){
      let arr=[x.backdrops[0]]
      setMediaData(arr);
      setMediaStyle({
        width:'92vw',
        popActive:'active',
        vidActive:'',
        bacActive:'',
        posActive:'',
        active:true,
        identity:true
      });
}
       else if(a==='vid'){
        setMediaData(trailerKey);
        console.log(trailerKey)
         
        setMediaStyle({
          width:'47vw',
          popActive:'',
          vidActive:'active',
          bacActive:'',
          posActive:'',
          active:true,
          identity:false
        });
       }else if(a==='bac'){
      
          setMediaData(x.backdrops);
         
          setMediaStyle({
            width:'47vw',
            popActive:'',
            vidActive:'',
            bacActive:'active',
            posActive:'',
            active:false,
             identity:true
          });
      
       }else if(a==='pos'){
     
          setMediaData(x.posters);
           setMediaStyle({
            width:'300px',
            popActive:'',
            vidActive:'',
            bacActive:'',
            posActive:'active',
            active:false,
            identity:true
          });
       }
     
  }

useEffect(() =>{
       func('default');
},[]);

  return (
   
    <div className='detail3'>
   
     <div className="media">

      <div className="mediaHead">
      <span >Media</span>
      </div>
     
      <div className="mediaContent">
  
      <span className={`${mediaStyle.popActive}`} onClick={() => {func('pop')}} > Popular</span>
     
      <span className={`${mediaStyle.vidActive}`}  onClick={() => {func('vid')}}  > Videos {trailerKey.length}</span>
      <span className={`${mediaStyle.bacActive}`}  onClick={() => {func('bac')}} > Backdrops {mediaLength.bacLength}</span> 
      <span className={`${mediaStyle.posActive}`} onClick={() => {func('pos')}} > Posters {mediaLength.posLength}</span>
      </div>

     </div>
    
     <MediaCard mediaData={mediaData}   mediaStyle={mediaStyle} trailerLink={trailerLink} clip={clip}/>          
    
    </div>
  
  )
}