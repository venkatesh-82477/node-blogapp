import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaArrowDown,FaArrowRight} from 'react-icons/fa' 
export default function Home() {

  const [data,setData] = useState([]);

   useEffect(()=>{
    fetch("https://blog-backendd-q4dea7hl4-venkatesh-82477.vercel.app/home")
      .then(res => res.json())
      .then(res => setData(res))
   },[])
  return (
    <>
      <div className='grid-container'>
        {
          data.filter((value)=> value.type==="head")
          .map((val)=>(
          <div className='grid1' key={val.id}>
          <Link to={"/Data"}>
          <img src={val.image} alt="" id='img1' /></Link>
          <div className='text'>{val.title1}<br></br>
          <span className='txt'>{val.title2}</span>
          </div>
          </div>
          ))
        }
        {
          data.filter((value)=> value.type==="head1")
          .map((val)=>(
          <div className='grid2' key={val.id}>
            <Link to={"/Data"}>
          <img src={val.image} alt="" id='img2' /></Link>
          <div className='text1'>{val.title1}<br></br>{val.title2}<br></br>
          <span className='txt1'>{val.title3}</span>
          </div>
          </div>
          ))
        }
        {
          data.filter((value)=> value.type==="head2")
          .map((val)=>(
          <div className='grid3' key={val.id}>
          <Link to={"/Data"}>
          <img src={val.image} alt="" id='img3' /></Link>
          <div className='text2'>{val.title1}<br></br>{val.title2}<br></br>
          <span className='txt2'>{val.title3}</span>
          </div>
          </div>
          ))
        } 
        </div>
      <p className='p1'><span className='the'>The</span> Latest</p>
      <div className='flex-container'>
        {
          data.filter((value)=> value.type === "latest")
          .map((val)=>(
            <div className='flex1' key={val.id}>
              <Link to={"/Data"}>
            <img src={val.image} alt="" id='latest' /></Link>
            <p id='china'>{val.title}</p>
            <p id='china1'>{val.text1}</p>
            <p id='china2'>{val.text2}<span id='china22'>{val.text3}</span></p>
          </div>
          ))
        }
      </div>
      <p className='p1'><span className='the'>Latest</span> Articles</p>
      <div className='grid-con'>
        <div className='articless'>
      {
          data.filter((value)=> value.type === "articles")
          .map((val)=>(
            <div className='grid-item' key={val.id}>
            <Link style={{textDecoration:"none",color:"black"}} to={"/Data"}>
            <p id='china'><img src={val.image} alt="" className='art'/>{val.title}<p id='china1'>{val.text1}</p><p id='china2'>{val.text2}<span id='china22'>{val.text3}</span></p></p>
            </Link>
          </div>
          ))
        }
        <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
        </div>
        <div className='grid-item4'>Advertisement</div>
      </div>
      <p className='p1'><span className='the'>Top </span> Posts</p>
      <div className='toppost'>

        {
          data.filter((value)=>value.type ==="toppost")
          .map((val)=>(
            <div className='top1' key={val.id}>
            <Link to={"/Data"}>
            <img src={val.image} alt="" id='latest1'/></Link>
            <p id='china'>{val.title}</p>
            <p id='china2'>{val.text1}<span id='china22'> {val.text2}</span></p>
            </div>
          ))
        }
      </div>
      <p className='p1'><span className='the'>Latest </span> Stories</p>
      <div className='stories'>
        {
          data.filter((value)=> value.type === "stories")
          .map((val)=>(
            <div className='story' key={val.id}>
              <Link to={"/Data"}></Link>
          <p id='china'>{val.title}</p>
          <p id='china1'>{val.text1}</p>
          <p id='china2'>{val.text2}<span id='china22'> {val.text3}</span></p>
        </div>
          ))
        }
      </div>
      <p>View more<FaArrowRight className='FaArrowDown'></FaArrowRight></p>
    </>
  )
}
