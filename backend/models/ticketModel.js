import mongoose from "mongoose";


// Definice schématu pro záznamy o Lístkách
const ticketSchema = mongoose.Schema(
    {
        band:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        exchangeStock:{
            type: String,
            required: false,
        },
        country:{
            type: String,
            required: false,
        },
        datePurkrase:{
            type: String,
            required: false,
        },
        account:{
            type: String,
            required: true,
        },
        typeOfTicket:{
            type: String,
            required: false,
        },
        order:{
            type: Number,
            required: false,
        },
        sellPrice:{
            type: Number,
            required: false,
        },
        note:{
            type: String,
            required: false,
        },
        dateConcert:{
            type: String,
            required: false,
        },
        profit:{
            type: Number,
            required: false,
        },
        sellDate:{
            type: String,
            required: false,
        },
        holdTime:{
            type: String,
            required: false,
        },
        bill:{
            type: String,
            required: false,
        },
        dateOfPaymant:{
            type: String,
            required: false,
        },
        state:{
            type: String,
            required: false,
        },
        sendTickets:{
            type: String,
            required: false,
        },
        
    
    },

    // Vytvoření času pro ID
    {
        timestamps: true, 
    }
);

// Vytvoření modelu "Ticket" pro mnipulaci s daty
export const Ticket = mongoose.model("Ticket", ticketSchema)