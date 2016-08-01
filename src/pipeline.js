import {equals} from "ramda";

import log from "./services/logger";
import getUserById from "./steps/get-user-by-id";
import upsertCompletedSurvey from "./steps/upsert-completed-survey";
import {SURVEY} from "./config";

export default async function (event) {
    log.info(event, "event");
    /*
    *   Workaround: some events have been incorrectly generated and thus don't
    *   have an `element` property. When processing said events, just return and
    *   move on without failing, as failures can block the kinesis stream.
    */
    const rawReading = event.data.element;
    if (!rawReading) {
        return null;
    }
    // Skip if answers type isn't survey
    if (!equals(rawReading.type, SURVEY)) {
        return null;
    }

    // retrieve user
    const user = await getUserById(rawReading.userId);
    if (!user) {
        log.error(`User ${rawReading.userId} not found`);
        return null;
    }

    // Upsert user with new survey set to completed
    await upsertCompletedSurvey(rawReading, user);

    return null;
}
