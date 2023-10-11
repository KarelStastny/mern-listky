import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import CreateBooks from './Pages/CreateBooks'


const App = () => {




  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createBook' element={<CreateBooks/>}/>
      </Routes>
      
    </div>
  )
}

export default App
