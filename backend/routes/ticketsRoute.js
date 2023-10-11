import express, { request, response } from "express";
import { Ticket } from "../models/ticketModel.js";

const router = express.Router();

// Požadavek na vytvoření nového ticketu
router.post("/", async (request, response) => {
  try {
    // Kontrola zda jsou vyplěná poviná pole
    if (!request.body.band || !request.body.price || !request.body.account) {
      // Pokud nejsou všechna vyplněná, vraď chybovou odpověd
      return response.status(400).send({
        message: "You have to fill in all requred input: band, price, account",
      });
    }
    // Vytvoření nového objektu na základě všech přijatých dat
    const newTicket = {
      // must have
      band: request.body.band,
      price: request.body.price,
      account: request.body.account,

      //   Ohters
      exchangeStock: request.body.exchangeStock || "",
      country: request.body.country || "",
      datePurkrase: request.body.datePurkrase || "",
      typeOfTicket: request.body.typeOfTicket || "",
      sellPrice: request.body.sellPrice || "",
      note: request.body.note || "",
      dateConcert: request.body.dateConcert || "",
      profit: request.body.profit || "",
      sellDate: request.body.sellDate || "",
      holdTime: request.body.holdTime || "",
      bill: request.body.bill || "",
      dateOfPaymant: request.body.dateOfPaymant || "",
      state: request.body.state || "",
      sendTickets: request.body.sendTickets || "",
      order: request.body.order || "",
 
    };

    // Vytvoření lístku ze schématu
    const ticket = await Ticket.create(newTicket);

    // odeslání do databáze
    return response.status(201).send(ticket);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});




// Požadavek na přečtení vypsání lístků
router.get("/", async (request, response) => {
  try {
    // Najdi vše co najdeš uložené v lístkách
    const tickets = await Ticket.find({});

    // Ulož odpověď do dat a přidje k nim ještě součet všech zánamů
    return response.status(200).json({
      conut: tickets.length,
      data: tickets,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});








export default router;
