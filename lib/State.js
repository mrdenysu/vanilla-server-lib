"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const formidable_1 = require("formidable");
const querystring_1 = require("querystring");
class State {
    constructor(options) {
        this.#METHOD = options.method;
        this.#URL = options.url;
        this.#PATH = options.pathname;
        this.#PARAMS = options.params;
        this.#REQUEST = options.request;
    }
    #REQUEST;
    #METHOD;
    #URL;
    #PATH;
    #PARAMS;
    #Query;
    #Body;
    get method() {
        return this.#METHOD;
    }
    get url() {
        return this.#URL;
    }
    get pathname() {
        return this.#PATH;
    }
    get params() {
        return this.#PARAMS;
    }
    async parseQuery() {
        if (this.#Query)
            return this.#Query;
        return (this.#Query = querystring_1.parse(this.#URL.substring(2)));
    }
    async parseBody() {
        if (this.#Body)
            return this.#Body;
        const _body = await new Promise((resolve, reject) => {
            const form = new formidable_1.IncomingForm({ multiples: true });
            form.parse(this.#REQUEST, (err, fields, files) => {
                if (err)
                    return reject(err);
                return resolve({ fields, files });
            });
        });
        return (this.#Body = _body);
    }
}
exports.State = State;
module.exports = { State };
//# sourceMappingURL=State.js.map