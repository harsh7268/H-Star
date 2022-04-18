import React from 'react';
import Carousel  from './Carousel/Carousel';
import Data from './Data';



export default function Home(props) {
  const {mainFunc,topBar} = props
  return (
    <div>
      <Carousel mainFunc={mainFunc} topBar={topBar} type='trending' category='all' time='day' language='hp'/>
      <Data mainFunc={mainFunc}   language='hp'/>
    </div>
  )
}
