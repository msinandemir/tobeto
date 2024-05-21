"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataError {
    constructor(message, data) {
        this.message = message,
            this.data = data;
    }
}
exports.default = DataError;
