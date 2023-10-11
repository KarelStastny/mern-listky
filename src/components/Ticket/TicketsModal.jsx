import React from "react";
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from "react-router-dom";


const TicketsModal = ({ tickets }) => {
  console.log(tickets);
  return (
    <div>

{/* Záhlaví taublky */}
       
<label className="flex gap-2 items-center border  ">
          <div className=" w-[60px]">Datum nákupu</div>

          <div className=" w-[160px]">Učet</div>
          <div className=" w-[160px]">Kapela</div>

          <div className="flex flex-col w-[100px]">
            <div>Země</div>
            <div>Objednávka</div>
          </div>
          <div className=" w-[140px]">
            <div>Datum Koncertu</div>
            <div>Typ vstupenky</div>
          </div>

          <div className=" w-[50px]">Cena lístku</div>
          <div className=" w-[50px]">Prodejní cena</div>
          <div className=" w-[50px]">Profit</div>
          <div className=" w-[100px]">Burza</div>
          <div className=" w-[80px]">Typ akce</div>
          <div className=" w-[120px]">Účet</div>
          <div className=" w-[60px]">Datum prodeje</div>
          <div className=" w-[70px]">Odeslány vstupenky</div>
          <div className="w-[60px]">Dny</div>
          <div className=" w-[100px]">Stav</div>
          <div className=" w-[150px]">Poznámky</div>

          {/* other */}
          <div className="flex gap-1">
            <div>Upravit</div>
            <div>Detaily</div>
            <div>Vymazat</div>
          </div>
        </label>

        {/* Tabulka lístků */}
      {tickets.map((ticket) => (
        <section key={ticket._id} className="flex gap-2 items-center border  ">
          <div className=" w-[60px]">{ticket.datePurkrase}</div>

          <div className=" w-[160px]">{ticket.account}</div>
          <div className=" w-[160px]">{ticket.band}</div>

          <div className="flex flex-col w-[100px]">
            <div>{ticket.country}</div>
            <div>{ticket.order}</div>
          </div>
          <div className=" w-[140px]">
            <div>{ticket.dateConcert}</div>
            <div>{ticket.typeOfTicket}</div>
          </div>

          <div className=" w-[50px]">{ticket.price}</div>
          <div className=" w-[50px]">{ticket.sellPrice}</div>
          <div className=" w-[50px]">{ticket.profit}</div>
          <div className=" w-[100px]">{ticket.exchangeStock}</div>
          <div className=" w-[80px]">{ticket.holdTime}</div>
          <div className=" w-[120px]">{ticket.bill}</div>
          <div className=" w-[60px]">{ticket.sellDate}</div>
          <div className=" w-[70px]">{ticket.sendTickets}</div>
          <div className="w-[60px]">{ticket.dateOfPaymant}</div>
          <div className=" w-[100px]">{ticket.state}</div>
          <div className=" w-[150px]">{ticket.note}</div>

          {/* other */}
          <div className="flex gap-1">
            <Link to={`/tickets/editTicket/${ticket._id}`}>Upravit</Link>
            <div>Detaily</div>
            <div><MdOutlineDelete/></div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TicketsModal;
