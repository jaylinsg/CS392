import { MongoClient } from "mongodb";

if (!process.env.MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable in .env.local");
}

const uri = process.env.MONGO_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    // allow global to have mongo client
    var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
    // In dev, use a global variable so the value is preserved across module reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In prod, don't use a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
