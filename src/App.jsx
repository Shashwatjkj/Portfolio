import React, { useState } from "react"
import Nav from "./components/navbar.jsx"
import {Outlet} from "react-router-dom"



function App() {

  return (
    <>
      <Nav />
     <Outlet/> 
    </>
  )
}

export default App
