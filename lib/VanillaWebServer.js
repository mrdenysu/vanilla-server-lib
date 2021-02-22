"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VanillaWebServer = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const path_to_regexp_1 = require("path-to-regexp");
const url_1 = require("url");
const State_1 = require("./State");
const Write_1 = require("./Write");
class VanillaWebServer {
    constructor(options) {
        this.#Logger = options?.logger ?? console;
        this.#Render = {
            engine: options?.render?.engine,
            options: options?.render?.options,
            viewPath: options?.render?.viewPath,
        };
        this.#GET = new Map();
        this.#POST = new Map();
        this.#PUT = new Map();
        this.#DELETE = new Map();
        this.#ErrorHandler404 = async (s, w) => {
            w.error(404, "Not Found");
        };
        this.#ErrorHandler500 = async (s, w) => {
            w.error(500, "Internal Server Error");
        };
        this.#Logger.log(`Server create at: ${new Date().toLocaleTimeString("ru")}`);
    }
    #Logger;
    #GET;
    #POST;
    #PUT;
    #DELETE;
    #ErrorHandler404;
    #ErrorHandler500;
    #Render;
    findRoute(router, pathname) {
        let func = false;
        let params = {};
        for (const iterator of router) {
            const _path = iterator[0];
            const _func = iterator[1];
            const data = path_to_regexp_1.match(_path)(pathname);
            if (data) {
                params = data.params;
                func = _func;
                break;
            }
            continue;
        }
        return {
            func,
            params,
        };
    }
    async requestListener(req, res) {
        const timeStart = new Date().getTime();
        const pathname = url_1.parse(req.url).pathname.replace(/\/+/g, "/").trim();
        const method = req?.method;
        let func = false;
        let params = {};
        let condidate;
        switch (method) {
            case "GET":
                condidate = this.findRoute(this.#GET, pathname);
                func = condidate.func;
                params = condidate.params;
                break;
            case "POST":
                condidate = this.findRoute(this.#GET, pathname);
                func = condidate.func;
                params = condidate.params;
                break;
            case "PUT":
                condidate = this.findRoute(this.#GET, pathname);
                func = condidate.func;
                params = condidate.params;
                break;
            case "DELETE":
                condidate = this.findRoute(this.#GET, pathname);
                func = condidate.func;
                params = condidate.params;
                break;
        }
        const state = new State_1.State({
            method,
            url: req.url,
            params,
            pathname,
            request: req,
        });
        const write = new Write_1.Write(res, this.#Render);
        try {
            if (typeof func === "function") {
                await func(state, write);
            }
            else {
                this.#ErrorHandler404(state, write);
            }
            return this.#Logger.log("Request", { method: req?.method, url: req?.url }, `${new Date().getTime() - timeStart} ms}`);
        }
        catch (error) {
            this.#ErrorHandler500(state, write);
            return this.#Logger.error(error);
        }
    }
    get listener() {
        return this.requestListener.bind(this);
    }
    route(method, path, func) {
        switch (method) {
            case "GET":
                this.setRoute(this.#GET, method, path, func);
                break;
            case "POST":
                this.setRoute(this.#POST, method, path, func);
                break;
            case "PUT":
                this.setRoute(this.#PUT, method, path, func);
                break;
            case "DELETE":
                this.setRoute(this.#DELETE, method, path, func);
                break;
        }
        return this;
    }
    share(path, dir) {
        async function func(state, write) {
            const filePath = path_1.join(dir, [...state.params.f].join("/").replace(path, "/"));
            if (!fs_1.existsSync(filePath))
                return write.error(404);
            if (fs_1.statSync(filePath).isDirectory())
                return write.error(403);
            return write.file(filePath);
        }
        this.setRoute(this.#GET, "GET", `${path}/:f+`, func);
        return this;
    }
    setRoute(router, method, path, func) {
        if (router.has(path)) {
            this.#Logger.warn(`The route is busy`, { method, path });
        }
        else {
            router.set(path, func);
        }
    }
    error404(func) {
        this.#ErrorHandler404 = func;
        return this;
    }
    error500(func) {
        this.#ErrorHandler500 = func;
        return this;
    }
}
exports.VanillaWebServer = VanillaWebServer;
module.exports = { VanillaWebServer };
//# sourceMappingURL=VanillaWebServer.js.map