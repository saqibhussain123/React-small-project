import {useEffect, useState}from 'react';

const Useeffect = () => {
const [one,setOne]=useState(0)

    useEffect(() => {
     const counter=()=>{
         setOne(one+1)
     }
     counter()
    }, [])
    
  return (
   <>
    <div>{one}</div>
    <button onClick={()=>setOne(one+1)}>inc</button>
   </>

  )
}

export default Useeffect