"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
const fs_1 = require("fs");
const mime_types_1 = require("mime-types");
const path_1 = require("path");
class Write {
    constructor(response) {
        this.#RESPONSE = response;
    }
    #RESPONSE;
    send(chunk) {
        this.#RESPONSE.writeHead(200, { "Content-Type": "text/plain" });
        this.#RESPONSE.end(chunk);
    }
    json(object) {
        this.#RESPONSE.writeHead(200, { "Content-Type": "text/plain" });
        this.#RESPONSE.end(JSON.stringify(object));
    }
    error(status = 400, message = "Error", data = {}) {
        this.#RESPONSE.writeHead(status, { "Content-Type": " application/json" });
        this.#RESPONSE.end(JSON.stringify({
            status: status,
            message: message,
            data: data,
        }));
    }
    file(filepath) {
        fs_1.readFile(filepath, "binary", (err, file) => {
            if (err)
                return this.error(500, "Error on send file");
            this.#RESPONSE.writeHead(200, {
                "Content-Type": mime_types_1.contentType(path_1.extname(filepath)),
            });
            fs_1.createReadStream(filepath).pipe(this.#RESPONSE);
        });
    }
}
exports.Write = Write;
module.exports = { Write };
//# sourceMappingURL=Write.js.map