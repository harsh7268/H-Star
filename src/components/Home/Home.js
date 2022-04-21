import React,{useEffect} from 'react';
import Carousel  from './Carousel/Carousel';
import Data from './Data';



export default function Home(props) {
 
  const {mainFunc,topBar,footer,country,name} = props;
 
  return (
    <div>
      <Carousel mainFunc={mainFunc} topBar={topBar} type='trending' category='all' time='day' language='hp'/>
      <Data name={name} country={country} mainFunc={mainFunc}   language='hp' footer={footer}/>
    </div>
  )
}