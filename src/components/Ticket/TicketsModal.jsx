import React from "react";
import { MdOutlineDelete, MdCreate } from 'react-icons/md';
import { Link } from "react-router-dom";


const TicketsModal = ({ tickets }) => {
  console.log(typeof(tickets.price));
  return (
    <div>

{/* Záhlaví taublky */}
       
<label className="flex gap-2 items-center border p-2  ">
          <div className=" w-[60px] text-center ">Nákup</div>

          <div className=" w-[160px] text-center ">Učet</div>
          <div className=" w-[160px] text-center">Kapela</div>

          <div className="flex flex-col w-[100px] text-center">
            <div>Země</div>
            <div>Objednávka</div>
          </div>
          <div className=" w-[160px] text-center">
            <div>Datum k.</div>
            <div>Sezení / Staní</div>
          </div>

          <div className=" w-[90px] text-center">Nákup</div>
          <div className=" w-[90px] text-center">Prodej</div>
          <div className=" w-[90px] text-center">Profit</div>
          <div className=" w-[100px] text-center">Burza</div>
          <div className=" w-[150px] text-center">Typ akce</div>
          <div className=" w-[120px] text-center">Účtenka</div>
          <div className=" w-[140px] text-center">Prodej dat.</div>
          <div className=" w-[120px] text-center">Předání lístků</div>
          <div className=" w-[60px] text-center">Dny</div>
          <div className=" w-[100px] text-center">Stav</div>
          <div className=" w-[150px] text-center">Poznámky</div>

          {/* other */}
          <div className="flex gap-1 w-[90px]">
            <div>Akce</div>
          </div>
        </label>

        {/* Tabulka lístků */}
      {tickets.map((ticket) => (
        <section key={ticket._id} className="flex gap-2 items-center border mt-1 mb-2 rounded-lg bg-sky-300 p-2  text-xs  ">
          <div className=" w-[60px] ">{ticket.datePurkrase}</div>
          <div className=" w-[160px]  ">{ticket.account}</div>
          <div className=" w-[160px] ">{ticket.band}</div>

          <div className="flex flex-col w-[100px]">
            <div>{ticket.country}</div>
            <div>{ticket.order}</div>
          </div>
          <div className=" w-[160px]">
            <div>{ticket.dateConcert}</div>
            <div>{ticket.typeOfTicket}</div>
          </div>

          <div className=" w-[90px]">{ticket && ticket.price && ticket.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
          <div className=" w-[90px]">{ticket && ticket.sellPrice && ticket.sellPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
          <div className=" w-[90px]">{ticket && ticket.profit && ticket.profit.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
          <div className=" w-[100px]">{ticket.exchangeStock}</div>
          <div className=" w-[150px]">{ticket.holdTime}</div>
          <div className=" w-[120px]">{ticket.bill}</div>
          <div className=" w-[140px]">{ticket.sellDate}</div>
          <div className=" w-[120px]">{ticket.sendTickets}</div>
          <div className="w-[60px]">{ticket.dateOfPaymant}</div>
          <div className=" w-[100px]">{ticket.state}</div>
          <div className=" w-[150px]">{ticket.note}</div>

          {/* other */}
          <div className="flex gap-1 w-[90px]">
            <Link to={`/tickets/editTicket/${ticket._id}`}><MdCreate className="text-xl"/></Link>
     
            <Link to={`/tickets/deleteTicket/${ticket._id}`}><MdOutlineDelete className="text-xl"/></Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TicketsModal;
