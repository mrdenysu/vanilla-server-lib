"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
const fs_1 = require("fs");
const html_minifier_1 = require("html-minifier");
const mime_types_1 = require("mime-types");
const path_1 = require("path");
class Write {
    constructor(response, render) {
        this.#RESPONSE = response;
        this.#RenderEngine = render?.engine ?? false;
        this.#RenderOptions = render?.options ?? {};
        this.#RenderViewPath = render?.viewPath ?? "views";
        this.#MinifyOptions = {
            removeComments: true,
            removeTagWhitespace: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeEmptyElements: false,
            removeOptionalTags: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        };
    }
    #RESPONSE;
    #RenderEngine;
    #RenderOptions;
    #RenderViewPath;
    #MinifyOptions;
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
    render(path, data = {}) {
        let _path = path_1.join(this.#RenderViewPath, path);
        const cb = async (error, html) => {
            if (error)
                return this.error(500, "Render error", error);
            this.#RESPONSE.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            this.#RESPONSE.end(html_minifier_1.minify(html, this.#MinifyOptions));
        };
        if (this.#RenderEngine) {
            this.#RenderEngine(_path, data, this.#RenderOptions, cb.bind(this));
        }
        else {
            this.error(500, "The rendering engine does not exist");
        }
    }
    file(filepath) {
        const ext = path_1.extname(filepath);
        const file_type = `${mime_types_1.lookup(ext)}`;
        const content_type = `${mime_types_1.contentType(ext)}`;
        let supportsMinifying = ["application/javascript", "text/css", "text/html", "text/markdown", "application/json"];
        fs_1.readFile(filepath, "utf-8", (err, file) => {
            if (err)
                return this.error(500, "Error on send file");
            this.#RESPONSE.writeHead(200, {
                "Content-Type": content_type,
            });
            if (supportsMinifying.includes(file_type)) {
                this.#RESPONSE.end(html_minifier_1.minify(file, this.#MinifyOptions));
            }
            else {
                fs_1.createReadStream(filepath).pipe(this.#RESPONSE);
            }
        });
    }
}
exports.Write = Write;
module.exports = { Write };
//# sourceMappingURL=Write.js.map