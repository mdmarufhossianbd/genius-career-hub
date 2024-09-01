import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('genius-career-hub')
    console.log('connect db');
    return db;
  } catch (error) {
    console.log('fail to connect db',{error});
  }
};