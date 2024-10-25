const mongoose = require('mongoose');

const Transaction = new mongoose.Schema(
  {

      type: String,
      category: String,
      amount: Number,
      date: String
    });

export default mongoose.model("Transaction", Transaction)
