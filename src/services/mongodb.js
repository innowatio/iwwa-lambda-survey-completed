import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

export const mongodb = MongoClient.connect(MONGODB_URL);

export async function upsert (collectionName, data, id) {
    const db = await mongodb;
    return db.collection(collectionName).update(
        {_id: id},
        {$set: data},
        {upsert: true}
    );
}
