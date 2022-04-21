import React,{useEffect,useState}  from 'react';
import axios from "axios";
import { Link} from "react-router-dom";
import './CountriesData.css'

export default function CountriesData(props) {
  const {mainFunc1,footer,country} = props;
  const lng =  (a) =>{
    
     mainFunc1(a);
    
  }

    const [content,setContent] = useState([]);

    const fetchData = async () =>{
  
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/configuration/languages?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
        );
      
       setContent(data);
    }
  
    useEffect(() =>{
     fetchData();
     footer(true);
     country('Languages');
     window.scrollTo(0, 0);
    },[])

  return (
    <div >
        <div className='countriesData'>
      {
           content.map((c)=>(
            
            <Link to={`/language/${c.english_name}`}  >
          <div onClick={ () => {lng(c.iso_639_1)}} key={c.iso_639_1}  className='countriesDataItem'  >{c.english_name}</div>
          </Link>
          
           ))
      }
      </div>
    </div>
  )
}