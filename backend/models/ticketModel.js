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
            type: Date,
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
    },

    // Vytvoření času pro ID
    {
        timestamps: true, 
    }
);

// Vytvoření modelu "Ticket" pro mnipulaci s daty
export const Ticket = mongoose.model("Ticket", ticketSchema)