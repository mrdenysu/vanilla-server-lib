import { createReadStream, readFile } from "fs";
import { contentType } from "mime-types";
import { extname } from "path";
import { VanillaWebServerResponse } from "./VanillaWebServer";

export class Write {
  #RESPONSE;
  constructor(response: VanillaWebServerResponse) {
    this.#RESPONSE = response;
  }

  /**
   * Send status 200 and any chunk
   */
  send(chunk: any): void {
    this.#RESPONSE.writeHead(200, { "Content-Type": "text/plain" });
    this.#RESPONSE.end(chunk);
  }

  /**
   * Send status 200 and any JSON
   */
  json(object: object | string | number | boolean): void {
    this.#RESPONSE.writeHead(200, { "Content-Type": "text/plain" });
    this.#RESPONSE.end(JSON.stringify(object));
  }

  /**
   * Send any status and Error message
   */
  error(status: number = 400, message: string = "Error", data: any = {}): void {
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
   * Send file
   */
  file(filepath: string): void {
    // todo: Compression - soon (in v1.2.0)
    // todo: Minify - soon (in v1.1.0)
    // Send (in v 1.0.0)
    readFile(filepath, "binary", (err, file) => {
      if (err) return this.error(500, "Error on send file");
      this.#RESPONSE.writeHead(200, {
        "Content-Type": contentType(extname(filepath)),
      });
      createReadStream(filepath).pipe(this.#RESPONSE);
    });
  }
}

module.exports = { Write };
