
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('transactions'); 
    const collection = database.collection('transactions');
    
    const data = await collection.find({}).toArray(); // Get all transactions
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  } finally {
    await client.close();
  }
};
