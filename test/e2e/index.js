import {expect} from "chai";

import {handler} from "index";
import {mongodb} from "services/mongodb";
import {USERS_COLLECTION_NAME} from "config";
import {getAnswers} from "../utils";
import {getEventFromObject, run} from "../mocks";


describe("On answers", () => {

    var users;
    var db;

    before(async () => {
        db = await mongodb;
        users = db.collection(USERS_COLLECTION_NAME);
    });

    after(async () => {
        db.dropCollection(USERS_COLLECTION_NAME);
        await db.close();
    });

    afterEach(async () => {
        users.remove({});
    });

    it("skip if reading type is not `survey`", async () => {
        const user = {
            _id: "userId"
        };
        await users.insert(user);
        const event = getEventFromObject(
            getAnswers("questionnaire", "buildings")
        );
        await run(handler, event);
        const newUser = await users.find({}).toArray();
        expect(newUser).to.deep.equal([user]);
    });

    it("update the selected users and add surveys field", async () => {
        const user = {
            _id: "userId"
        };
        const expected = {
            _id: "userId",
            surveys: [
                {id: "questionId", completed: true}
            ]
        };
        await users.insert(user);
        const event = getEventFromObject(getAnswers());
        await run(handler, event);
        const newUser = await users.find({}).toArray();
        expect(newUser).to.deep.equal([expected]);
    });

    it("update the field surveys in the selected user [CASE: user.surveys without selected survey id]", async () => {
        const user = {
            _id: "userId",
            surveys: [
                {id: "questionId1", completed: true},
                {id: "questionId2", completed: true}
            ]
        };
        const expected = {
            _id: "userId",
            surveys: [
                {id: "questionId1", completed: true},
                {id: "questionId2", completed: true},
                {id: "questionId", completed: true}
            ]
        };
        await users.insert(user);
        const event = getEventFromObject(getAnswers());
        await run(handler, event);
        const newUser = await users.find({}).toArray();
        expect(newUser).to.deep.equal([expected]);
    });

    it("update the field surveys in the selected user [CASE: user.surveys with selected survey id and completed false]", async () => {
        const user = {
            _id: "userId",
            surveys: [
                {id: "questionId1", completed: true},
                {id: "questionId2", completed: true},
                {id: "questionId", completed: false}
            ]
        };
        const expected = {
            _id: "userId",
            surveys: [
                {id: "questionId1", completed: true},
                {id: "questionId2", completed: true},
                {id: "questionId", completed: true}
            ]
        };
        await users.insert(user);
        const event = getEventFromObject(getAnswers());
        await run(handler, event);
        const newUser = await users.find({}).toArray();
        expect(newUser).to.deep.equal([expected]);
    });

});
