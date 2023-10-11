import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const DeleteTicket = () => {
    const [band, setBand] = useState("")
    const [loading, setLoading] = useState(false);

    const {id} = useParams()
    const navigate = useNavigate()


    const handleDeleteTicket = () => {
        setLoading(true)

        axios
        .delete(`http://localhost:5555/tickets/${id} `)
        .then(() => {
            setLoading(false)
            navigate("/")
        })
        .catch((error) => {
            setLoading(false)
            console.log(error);
        })
    }




  return (
    <div>
      <h1>Smazání lístků</h1>
      <p>Jsi si jstý že tento lístek chceš smazat?</p>
      <button onClick={handleDeleteTicket}>Potvrdit smazání</button>
    </div>
  )
}

export default DeleteTicket
