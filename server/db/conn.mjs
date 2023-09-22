import { MongoClient } from "mongodb";

const connectionString =  "mongodb+srv://urielpillay:Bulksave50@cluster0.vfw6enk.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("apds");

export default db;