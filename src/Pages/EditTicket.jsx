import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const EditTicket = () => {
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
    const [sellPrice, setSellPrice] = useState("")
    const [dateConcert, setDateConcert] = useState("")
    const [profit, setProfit] = useState("")
    const [sellDate, setSellDate] = useState("")
    const [dateOfPaymant, setDateOfPaymant] = useState("")
    const [state, setState] = useState("")
    const [sendTickets, setSendTickets] = useState("")
    const [bill, setBill] = useState("")



    const {enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const {id} = useParams()


    // Výpis
    useEffect(() => {
        setLoading(true)
        axios
        .get(`http://localhost:5555/tickets/${id}`)
        .then((response) => {
            setBand(response.data.band)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            alert("An error happend. Plase Chack console")
            console.log(error);
        })
    },[])

    // Uložení hodnot

    const handleEditBook = () => {
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
            sellPrice,
            dateConcert,
            profit,
            sellDate,
            dateOfPaymant,
            state,
            sendTickets,
        }

        setLoading(true)
        axios
            .put(`http://localhost:5555/tickets/${id}`, data)
            .then(() => {
        
                setLoading(false)
                enqueueSnackbar('Book Edited successfully', { variant: 'success' });
                navigate("/")
            })
            .catch((error) => {
                setLoading(false)
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            })
    }


  return (
    <div className='flex flex-col'>
      <h2>Aktualizovat údaje</h2>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Kapela</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={band} onChange={(e) => setBand(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Nákupní Cena</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Účet</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Země</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Číslo Objednávky</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={order} onChange={(e) => setOrder(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Prodejní Cena</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Profit</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={profit} onChange={(e) => setProfit(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Stani/Sezení</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={typeOfTicket} onChange={(e) => setTypeOfTicket(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Datum nákupu</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="date" value={datePurkrase} onChange={(e) => setDatePurkrase(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Datum konzertu</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="date" value={dateConcert} onChange={(e) => setDateConcert(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Datum Prodeje</label>
            <input className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="date" value={sellDate} onChange={(e) => setSellDate(e.target.value)} />
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Typ akce</label>
            <select  className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none'  value={holdTime} onChange={(e) => setHoldTime(e.target.value)} name="" id="">
                <option></option>
                <option value="Krátkodobá">Krátkodobá</option>
                <option value="Dlouhodbá">Dlouhodobá</option>
            </select>
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Burza</label>
            <select className='border-2 w-[220px] border-gray-700' name="" id="" value={exchangeStock} onChange={(e) => setExchangeStock(e.target.value)}>
                <option value=""></option>
                <option value="Viagogo">Viagogo</option>
                <option value="TicketSwap">TicketSwap</option>
                <option value="TicketMaster">TicketMaster</option>
            </select>
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Účet</label>
            <select className='border-2 w-[220px] border-gray-700' name="" id="" value={bill} onChange={(e) => setBill(e.target.value)}>
            <option value=""></option>
                <option value="Nákup">Nákup</option>
                <option value="Nákup + Prodej">Nákup + Prodej</option>
            </select>
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Předány vstupenky</label>
            <select className='border-2 w-[220px] border-gray-700' name="" id="" value={sendTickets} onChange={(e) => setSendTickets(e.target.value)}>
            <option value=""></option>
                <option value="Ano">Ano</option>
                <option value="Ne">Ne</option>
            </select>
        </div>
      <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Stav</label>
            <select className='border-2 w-[220px] border-gray-700' name="" id="" value={state} onChange={(e) => setState(e.target.value)}>
            <option value=""></option>
                <option value="Čekám">Čekám</option>
                <option value="Prodávám">Prodávám</option>
                <option value="Ve výplatě">Ve výplatě</option>
                <option value="Vyplaceno">Vyplaceno</option>
          
            </select>
        </div>



        <div className=' m-2 flex  '>
            <label className='text-center w-[180px] uppercase text-blue-800 font-bold'>Poznámky</label>
            <textarea className=' px-2 border-b-2 w-[220px] border-gray-700 outline-none' type="text" value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
  

    <button onClick={handleEditBook} className='bg-blue-500'>Uložit změny</button>
    </div>
  )
}

export default EditTicket
