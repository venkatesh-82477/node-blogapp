import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'

export default function Appbar() {
         
   const [icon,setIcon] = useState(false)

   const handleClick =()=>{
    setIcon(!icon)
   }
   const closeDrawer =()=>{
    setIcon(false)
   }
   

  return (
    <>
            <nav className='Navbar'>
              <div id='con'>
              <p id='s1'>The</p>
              <p id='s2'>Siren</p>
              <div className='btn1' onClick={handleClick} > { icon ? <FaTimes className='fa-times'></FaTimes>:<FaBars className="fa-bars"></FaBars>}</div>
              </div>
              <ul className =  { icon ?'nav-menu active' : 'nav-menu'}>
              <li><NavLink to='./' className='link' activeClassName="active"  onClick={closeDrawer} >Home</NavLink></li> 
              <li><NavLink to='./Bollywood' className='link' activeClassName="active" onClick={closeDrawer}>Bollywood</NavLink></li>   
              <li><NavLink to='./Technology' className='link' activeClassName="active"  onClick={closeDrawer}>Technology</NavLink></li>
              <li><NavLink to='./Hollywood' className='link' activeClassName="active"  onClick={closeDrawer}>Hollywood</NavLink></li>
              <li><NavLink to='./Fitness' className='link' activeClassName="active"  onClick={closeDrawer}>Fitness</NavLink></li>
              <li><NavLink to='./Food' className='link' activeClassName="active"  onClick={closeDrawer}>Food</NavLink></li>
                 </ul>
                 </nav>
            </>
  )
}

