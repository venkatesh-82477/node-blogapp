import React from 'react'
import './App.css'
import Appbar from './Components/Appbar'
import Routers from './Routes/Routers'
export default function App() {
  return (
    <div className='App'>
     <Appbar/>
     <Routers/>
    </div>
  )
}
