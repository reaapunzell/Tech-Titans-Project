import "dotenv/config"
import express from 'express';
import { dbConnect } from "./db.js";

const app = express();
const PORT = process.env.SERVER_PORT

console.log(process.env.ANYTHING)

app.use(express.json())

import transactionsRouter from "./controllers/transactions.js"
app.use("/transactions", transactionsRouter)


app.listen(PORT, () =>{
    dbConnect()
    console.log(`[server]: listening on port  ${PORT}`)
})