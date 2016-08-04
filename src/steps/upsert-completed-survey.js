import {equals, filter} from "ramda";

import {USERS_COLLECTION_NAME} from "../config";
import log from "../services/logger";
import {upsert} from "../services/mongodb";

export default async function upsertCompletedSurvey (reading, user) {
    const userSurveys = user.surveys || [];
    const surveyId = reading.questionId;
    // if the selected survey is already in surveys array, remove it
    const filteredSurveys = filter(userSurvey => !equals(userSurvey.id, surveyId), userSurveys);
    const surveys = filteredSurveys.concat([{id: surveyId, completed: true}]);
    log.info(surveys);
    return await upsert(USERS_COLLECTION_NAME, {surveys}, user._id);
}
