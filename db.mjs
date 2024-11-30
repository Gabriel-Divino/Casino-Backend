import { MongoClient } from 'mongodb';
import 'dotenv/config';
const uri = process.env.MONGODB_URI
//const uri = uri ; // Assume que MONGODB_URI é uma string
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
