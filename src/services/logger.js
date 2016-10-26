import bunyan from "bunyan";

import {LOG_LEVEL} from "../config";

const logger = bunyan.createLogger({name: "survey-completed"});

logger.level(process.env.NODE_ENV === "test" ? "fatal" : LOG_LEVEL);

export default logger;
