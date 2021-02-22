import { createReadStream, readFile } from "fs";
import { minify } from "html-minifier";
import { contentType, lookup } from "mime-types";
import { extname, join } from "path";
import { VanillaWebServerResponse } from "./VanillaWebServer";

export type RenderEngine = (path: string, data: object, options: object, cb: (err: any, html: string) => any) => any;

export interface Render {
  engine?: RenderEngine;
  options?: object;
  viewPath?: string;
}

export class Write {
  #RESPONSE: VanillaWebServerResponse;
  #RenderEngine: RenderEngine | false;
  #RenderOptions: object;
  #RenderViewPath: string;
  #MinifyOptions: object;

  constructor(response: VanillaWebServerResponse, render: Render) {
    this.#RESPONSE = response;
    // render Engine
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

  /**
   * Send status 200 and any chunk
   */
  public send(chunk: any): void {
    this.#RESPONSE.writeHead(200, { "Content-Type": "text/plain" });
    this.#RESPONSE.end(chunk);
  }

  /**
   * Send status 200 and any JSON
   */
  public json(object: object | string | number | boolean): void {
    this.#RESPONSE.writeHead(200, { "Content-Type": "text/plain" });
    this.#RESPONSE.end(JSON.stringify(object));
  }

  /**
   * Send any status and Error message
   */
  public error(status: number = 400, message: string = "Error", data: any = {}): void {
    this.#RESPONSE.writeHead(status, { "Content-Type": " application/json" });
    this.#RESPONSE.end(
      JSON.stringify({
        status: status,
        message: message,
        data: data,
      })
    );
  }

  /**
   * Render
   */
  public render(path: string, data: object = {}) {
    let _path = join(this.#RenderViewPath, path);
    const cb = async (error: any, html: string) => {
      if (error) return this.error(500, "Render error", error);
      this.#RESPONSE.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      this.#RESPONSE.end(minify(html, this.#MinifyOptions));
    };

    if (this.#RenderEngine) {
      this.#RenderEngine(_path, data, this.#RenderOptions, cb.bind(this));
    } else {
      this.error(500, "The rendering engine does not exist");
    }
  }

  /**
   * Send file
   */
  public file(filepath: string): void {
    // todo: Compression - soon (in v1.2.0)
    const ext = extname(filepath);
    const file_type = `${lookup(ext)}`;
    const content_type = `${contentType(ext)}`;

    let supportsMinifying = ["application/javascript", "text/css", "text/html", "text/markdown", "application/json"];

    readFile(filepath, "utf-8", (err, file) => {
      if (err) return this.error(500, "Error on send file");
      this.#RESPONSE.writeHead(200, {
        "Content-Type": content_type,
      });
      if (supportsMinifying.includes(file_type)) {
        this.#RESPONSE.end(minify(file, this.#MinifyOptions));
      } else {
        createReadStream(filepath).pipe(this.#RESPONSE);
      }
    });
  }
}

module.exports = { Write };
