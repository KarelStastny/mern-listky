import React, { useState, useEffect} from 'react'
import Loading from "../components/Loading"
import axios from "axios"
import TicketsModal from '../components/Ticket/TicketsModal'



const Home = () => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios
    .get("http://localhost:5555/tickets")
    .then((response) => {
      setTickets(response.data.data)
    
      console.log(tickets);
      setLoading(false)
     
     
    })
    .catch((error) => {
      console.log(error);
      setLoading(fasle)
    })

  
  },[])



  return (
    <div>
      <p>Hlavní Stránka všech lístků</p>

    {/* Sending tickets to the component to list all ticket to the page */}
      <TicketsModal tickets = {tickets} />
     
    </div>
  )
}

export default Home
