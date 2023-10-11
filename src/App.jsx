import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import CreateTicket from './Pages/CreateTicket'
import EditTicket from './Pages/EditTicket'
import DeleteTicket from './Pages/DeleteTicket'


const App = () => {






  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tickets/createTicket' element={<CreateTicket/>}/>
        <Route path='/tickets/editTicket/:id' element={<EditTicket/>}/>
        <Route path='/tickets/deleteTicket/:id' element={<DeleteTicket/>}/>
      </Routes>
      
    </div>
  )
}

export default App
