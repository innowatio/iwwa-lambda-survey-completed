import {USERS_COLLECTION_NAME} from "../config";
import {mongodb} from "../services/mongodb";

export default async function getUserById (userId) {
    const db = await mongodb;
    const query = {
        "_id": userId
    };
    return db.collection(USERS_COLLECTION_NAME).findOne(query);
}
