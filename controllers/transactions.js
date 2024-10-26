import express from 'express';
import { mongoose } from "../db.js";
import tokenValidation from "../middlewares/tokenValidation.js"
import Transaction from '../model/transaction.js';

const router = express.Router();

router.get("/", tokenValidation, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});



router.post("/", tokenValidation, async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const transaction = new Transaction({
      amount,
      description,
      category,
      createdBy: req.user._id, // geting userId from the validated token
    });
    await transaction.save();
    res.status(201).json({ message: "Transaction added", transaction });
  } catch (err) {
    res.status(500).json({ error: "Failed to add transaction" });
  }
});

export default router