import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Set MONGODB_URI in .env.local');

const globalForMongo = globalThis as typeof globalThis & { mongo?: Promise<MongoClient> };
export const clientPromise = globalForMongo.mongo ?? new MongoClient(uri).connect();
if (process.env.NODE_ENV !== 'production') globalForMongo.mongo = clientPromise;
