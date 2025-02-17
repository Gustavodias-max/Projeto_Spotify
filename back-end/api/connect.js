import {MongoClient} from 'mongodb';

const URI = "mongodb+srv://GustavoDias-max:Guga-2411@cluster0.llk8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("bancoSpotify");
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);
