import React, { useState } from 'react'
import {useSnackbar} from "notistack"
import axios from 'axios'
import Loading from "../components/Loading"
import {useNavigate} from "react-router-dom"




const CreateTicket = () => {
    const [loading, setLoading] = useState(false)
    const [band, setBand] = useState("")
    const [price, setPrice] = useState("")
    const [account, setAccount] = useState("")
    const [country, setCountry] = useState("")
    const [exchangeStock, setExchangeStock] = useState("")
    const [typeOfTicket, setTypeOfTicket] = useState("")
    const [order, setOrder] = useState("")
    const [datePurkrase, setDatePurkrase] = useState("")
    const [note, setNote] = useState("")
    const [holdTime, setHoldTime] = useState("")
    const [bill, setBill] = useState("")
 

    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()

    const handleSaveBook = () => {
        const data = {
            band,
            price,
            account,
            country,
            exchangeStock,
            typeOfTicket,
            order,
            datePurkrase,
            note,
            holdTime,
            bill,

        }
        setLoading(true)
        axios
        .post("http://localhost:5555/tickets", data)
        .then(() => {
            setLoading(false)
            enqueueSnackbar("Lístek úspěšně přidán", {variant: "success"})
            navigate("/")
        })
        .catch((error) => {
            setLoading(false)
            enqueueSnackbar("Chyba", {variant: "error"})
            console.log(error);
        })
    }







  return (
    <div className='flex  items-center justify-center flex-col'>
        <h1>Vytvoření nového zánamu</h1>
        {loading ? <Loading/> : ""}

        <h2 className='text-2xl mt-7 mb-4'>Musí být vyplněné</h2>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Kapela</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={band} onChange={(e) => setBand(e.target.value)} />
        </div>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Účet</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        </div>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Nákupní Cena</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Datum nákupu</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="date" value={datePurkrase} onChange={(e) => setDatePurkrase(e.target.value)} />
        </div>


        <h2 className='text-2xl mt-7 mb-4'>Ostatní záznamy</h2>
      
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Země</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Burza</label>
            <select className='border-2 border-gray-700' name="" id="" value={exchangeStock} onChange={(e) => setExchangeStock(e.target.value)}>
                <option value=""></option>
                <option value="Viagogo">Viagogo</option>
                <option value="TicketSwap">TicketSwap</option>
                <option value="TicketMaster">TicketMaster</option>
            </select>
        </div>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Stání / Sezení</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={typeOfTicket} onChange={(e) => setTypeOfTicket(e.target.value)} />
        </div>
  
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Číslo objednávky</label>
            <input className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={order} onChange={(e) => setOrder(e.target.value)} />
        </div>
        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Záznam k Daním</label>
            <select className='border-2 border-gray-700' name="" id="" value={bill} onChange={(e) => setBill(e.target.value)}>
                <option value=""></option>
                <option value="Nákup">Nákup</option>
                <option value="Nákup + Prodej">Nákup + Prodej</option>
            </select>
        </div>

        <div className=' m-2 flex flex-col min-w-[350px] '>
            <label className='text-center uppercase text-blue-800 font-bold'>Poznámky</label>
            <textarea className=' px-2 border-b-2 border-gray-700 outline-none' type="text" value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
  
        <button onClick={handleSaveBook} className='p-2 font-semibold bg-blue-600 rounded-lg'>Uložit záznam</button>
       
      
    </div>
  )
}

export default CreateTicket
