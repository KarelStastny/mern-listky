import React from "react";

const TicketsModal = ({ tickets }) => {
    console.log(tickets);
  return (
    <div>
      {tickets.map((ticket) => (
      
        <div key={ticket._id}>
          <p>{ticket.band}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketsModal;
