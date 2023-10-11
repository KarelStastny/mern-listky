import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import TicketsModal from "../components/Ticket/TicketsModal";
import { FcPlus } from "react-icons/fc";
import { Link } from "react-router-dom";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5555/tickets")
      .then((response) => {
        setTickets(response.data.data);

        console.log(tickets);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(fasle);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-3 mb-3 ">Účet - hlavní strana</h1>
      <div  className="w-[1450px] m-auto mb-4">
        <Link className="flex gap-3 items-center" to={"/tickets/createTicket"}>
           <FcPlus className="w-[33px] h-[33px]" /> 
           <p>Nový záznam</p>
        </Link>
      </div>

      {/* Sending tickets to the component to list all ticket to the page */}
      <div className="w-[1450px] m-auto">
      <TicketsModal tickets={tickets} />

      </div>
      
    </div>
  );
};

export default Home;
