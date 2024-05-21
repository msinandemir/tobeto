"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoLogger = exports.ElasticLogger = exports.BaseLogger = void 0;
class BaseLogger {
    log(data) {
        console.log("default logger");
    }
}
exports.BaseLogger = BaseLogger;
class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("logged by elastic", data);
    }
}
exports.ElasticLogger = ElasticLogger;
class MongoLogger extends BaseLogger {
    log(data) {
        console.log("logged by mongo", data);
    }
}
exports.MongoLogger = MongoLogger;
