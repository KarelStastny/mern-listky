import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from "cors"
import ticketsRoute from "./routes/ticketsRoute.js"

// Vytvoření instance aplikace Express
const app = express();


// Express zpracovává Json data a převádí je na JS objekty
app.use(express.json());

// Cors povoluje webům a doménám provádět http požadavky bez omezení
app.use(cors());

// 
app.use("/tickets", ticketsRoute)





// Definice kořenové URL
app.get('/', (request, response) => {
  // Vypsání požadvků
  console.log(request);

  // Při správném načtení zpráva
  return response.status(234).send('Listky');
});

// Připojení k MongoDB databázi
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('Aplikace připojena k databázi');
    
    // Spuštění serveru na portu
    app.listen(PORT, () => {
      console.log(`Aplikace poslouchá na portu: ${PORT}`);
    });
  })
  // Chyby
  .catch((error) => {
    console.log(error);
  });
