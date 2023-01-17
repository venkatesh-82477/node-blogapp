import React, { useState,useEffect } from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitterSquare} from 'react-icons/fa' 
import mask from "../Images/artpage/Mask.png"
import scr1 from "../Images/artpage/scr1.png"
import scr2 from "../Images/artpage/scr2.png"
import rythm from "../Images/artpage/rythm.png"
import { Link } from 'react-router-dom'
function Data() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://blog-backendd-q4dea7hl4-venkatesh-82477.vercel.app/article")
    .then(res => res.json())
    .then(res => setData(res))
  },[])
  return (
   <>
    <div className='article'>
        <div className='con'>
          <div>
            <p id='s1'>The</p>
            <p id='s2'>Siren</p>
          </div>
          <Link to={"/"} style={{textDecoration:"none"}}><div className='get'>Get started</div></Link>
        </div>
        <center>
          <h2>5 Ways to animate a React app.</h2>
        <div className='content'>
            <div className='mask'>
             <img src={mask} alt=""  style={{width:"80px",height:"80px"}}/>
             <div>
              <h5>Dmitry Nozhenko</h5>
              <p style={{color:"grey",fontSize:"11px"}}>Jan 28, 2019 · 10 min read</p>
             </div>
             <div className='font'>
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaYoutube></FaYoutube>
              <FaTwitterSquare></FaTwitterSquare>
             </div>
            </div> 
            <img src={scr1} alt="" style={{width:"400px"}}/>
            <p>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. Let’s talk about them</p>
            <img src={scr2} alt="" style={{width:"400px"}}/>
            <div style={{float:"left"}}>
            <button style={{margin:"5px"}}>React</button>
            <button style={{margin:"5px"}}>Javascript</button>
            <button style={{margin:"5px"}}>Animation</button>
            </div><br></br><br></br><br></br>
            <div className='ry'><img src={rythm} alt=""/>9.3K claps</div><br /><br /><br /><br />
            <div className='mask'>
             <img src={mask} alt=""  style={{width:"80px",height:"80px"}}/>
             <div>
              <p>WRITTEN BY</p>
              <h5>Dmitry Nozhenko</h5>
              <p style={{color:"grey",fontSize:"11px"}}>Jan 28, 2019 · 10 min read</p>
             </div>
            </div> 
        </div>
        </center>
        <br /><br />
        <h4 style={{paddingLeft:"100px"}}>More From The Siren</h4>
        <div className='flex-container'>
        {
              data.filter((value)=> value.type ==="mask")
              .map((val)=>(
          <div className='flex1'>
          <img src={val.image} alt="" id='latest' />
          <p id='china'>{val.title}</p>
          <div className='mask'>
             <img src={val.img} alt=""  style={{width:"80px",height:"80px"}}/>
             <div>
              <h5>{val.text1}</h5>
              <p style={{color:"grey",fontSize:"11px"}}>{val.text2}</p>
             </div>
            </div> 
            </div>
              ))
            }
      </div>
    </div>
    </>
  )
}
export default Data