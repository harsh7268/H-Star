import React,{useEffect} from 'react'
import MainDetail from './MainDetail/MainDetail';

export default function DetailModel(props) {
  const {id,topBar,type,mainFunc,knowsFor,iden} = props;
  useEffect(()=>{
    console.log(id,type,knowsFor); 
  })
  return (
    <div>
      <MainDetail id={id} topBar={topBar} type={type} mainFunc={mainFunc} knowsFor={knowsFor} iden={iden}/>
    </div>
  )
}
