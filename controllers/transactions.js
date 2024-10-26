import express from 'express';
const router = express.Router();
import { mongoose } from "../db.js";
import tokenValidation from "../middlewares/tokenValidation.js"

import Transaction from '../model/transaction.js';

router.get('/', async (req, res) => {
    try{
        const transactions = await Transaction.find();
        res.json(transactions);
    }catch(error){
    res.status(500).send(`Error fetching transactions: ${err}`);
}
});

router.get('/user/userId', tokenValidation, async (req,res) =>{
    const userId = req.params.userId

  if(!mongoose.Types.ObjectId.isValid(userId)){
    res.status(400).send("Invalid user ID")
  }

  try{
    const userTransactions = await Transaction.find({ createdBy: userId})
    
    if (userTransactions.length ===0){
      res.status(404).send("no transactions found for this user")
    }

    return res.json(userTransactions)
  } catch (err){
    console.error(err)
    res.status(500).send("server error")
  }
})

router.post('/', tokenValidation, async (req,res) => {
    try{
        const transaction = new Transaction({
          ...req.body,
        createdBy: req.user._id});
        await transaction.save();
        res.send(`added ${req.body.category}`);
    } catch (error){
        res.status(500).json({message: 'Error saving transaction', error});
    }
});

export default router