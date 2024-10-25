import express from 'express';
const router = express.Router();
import { mongoose } from "../db.js";

import Transaction from '../model/Transaction.js';

router.get('/', async (req, res) => {
    
    try{
        const transactions = await Transaction.find();
        res.json(transactions);
    }catch(error){
    res.status(500).send(`Error fetching transactions: ${err}`);
}
});

router.post('/', async (req,res) => {
    try{
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error){
        res.status(500).json({message: 'Error saving transaction', error});
    }
});

export default router