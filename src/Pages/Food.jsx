import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import {FaArrowDown} from 'react-icons/fa' 

const Food = () => {

  const [data,setData] = useState([]);

   useEffect(()=>{
    fetch("https://blog-backendd-q4dea7hl4-venkatesh-82477.vercel.app/food")
      .then(res => res.json())
      .then(res => setData(res))
   },[])
  
  return (
    <>
    <div className='Fit'>
      <div className='Ftop'>
      <p className='p1'><span className='the'>Fo</span>od</p>
      {
        data.filter((value)=> value.type === "food")
        .map((val) =>(
          <div className='Fit1' key={val.id}>
          <Link to={"/Data"}>
          <img src={val.image} alt="" id='latest1'/></Link>
          <p id='china'>{val.title}</p>
          <p id='china2'>{val.text1}<span id='china22'>{val.text2}</span></p>
          </div>
        ))
      }
          <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <div className='Ttop'>
      <p className='p1'><span className='the'>Top </span>Posts</p>
      {
        data.filter((value)=> value.type === "foodtop")
        .map((val) =>(
          <div className='Fit1' key={val.id}>
            <Link to={"/Data"}>
          <img src={val.image} alt="" id='latest1'/></Link>
          <p id='china'>{val.title}</p>
          <p id='china2'>{val.text1}<span id='china22'>{val.text2}</span></p>
          </div>
        ))
      }
          <div className='addv'>Advertisement</div>
          {
        data.filter((value)=> value.type === "foodtop1")
        .map((val) =>(
          <div className='Fit1' key={val.id}>
            <Link to={"/Data"}>
          <img src={val.image} alt="" id='latest1'/></Link>
          <p id='china'>{val.title}</p>
          <p id='china2'>{val.text1}<span id='china22'>{val.text2}</span></p>
          </div>
        ))
      }
      </div>
      </div>
      </>
  )
}

export default Food