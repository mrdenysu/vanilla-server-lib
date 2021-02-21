// Types
import { existsSync, statSync } from "fs";
import { IncomingMessage, ServerResponse } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { join } from "path";
import { match } from "path-to-regexp";
import { parse } from "url";
import { State } from "./State";
import { Write } from "./Write";

export type VanillaWebServerRequest = IncomingMessage | Http2ServerRequest;

export type VanillaWebServerResponse = ServerResponse | Http2ServerResponse;

export interface VanillaWebServerOptions {
  logger?: Console;
}

export type Method = "GET" | "POST" | "PUT" | "DELETE";

export type RouterValue = (state: State, write: Write) => Promise<any>;

export class VanillaWebServer {
  #Logger: Console;
  #GET: Map<string, RouterValue>;
  #POST: Map<string, RouterValue>;
  #PUT: Map<string, RouterValue>;
  #DELETE: Map<string, RouterValue>;
  #ERROR_HANDLER_404: RouterValue;
  #ERROR_HANDLER_500: RouterValue;

  constructor(options: VanillaWebServerOptions) {
    this.#Logger = options?.logger ?? console;
    this.#GET = new Map();
    this.#POST = new Map();
    this.#PUT = new Map();
    this.#DELETE = new Map();

    this.#ERROR_HANDLER_404 = async (s, w) => {
      w.error(404, "Not Found");
    };
    this.#ERROR_HANDLER_500 = async (s, w) => {
      w.error(500, "Internal Server Error");
    };

    this.#Logger.log(`Server create at: ${new Date().toLocaleTimeString("ru")}`);
  }

  private findRoute(router: Map<string, RouterValue>, pathname: string) {
    let func: RouterValue | boolean = false;
    let params = {};
    for (const iterator of router) {
      const _path: string = iterator[0];
      const _func = iterator[1];
      const data = match(_path)(pathname);
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

  private async requestListener(req: VanillaWebServerRequest, res: VanillaWebServerResponse): Promise<void> {
    const timeStart = new Date().getTime();
    const pathname = parse(req.url).pathname.replace(/\/+/g, "/").trim();
    const method = req?.method;
    let func: RouterValue | boolean = false;
    let params: object = {};
    let condidate: { func: RouterValue | boolean; params: object };

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

    const state = new State({
      method,
      url: req.url,
      // @ts-ignore
      params,
      pathname,
      request: req,
    });

    const write = new Write(res);

    try {
      if (typeof func === "function") {
        await func(state, write);
      } else {
        this.#ERROR_HANDLER_404(state, write);
      }
      return this.#Logger.log("Request", { method: req?.method, url: req?.url }, `${new Date().getTime() - timeStart} ms}`);
    } catch (error) {
      this.#ERROR_HANDLER_500(state, write);
      return this.#Logger.error(error);
    }
  }

  /**
   * Get listener for any server kernel (http, https, http2)
   */
  get listener(): (req: VanillaWebServerRequest, res: VanillaWebServerResponse) => void {
    return this.requestListener.bind(this);
  }

  /**
   *Add route
   */
  public route(method: Method, path: string, func: RouterValue): this {
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

  /**
   * Static files
   */
  public share(path: string, dir: string): this {
    async function func(state: State, write: Write): Promise<void> {
      const filePath = join(dir, [...state.params.f].join("/").replace(path, "/"));
      if (!existsSync(filePath)) return write.error(404);
      if (statSync(filePath).isDirectory()) return write.error(403);
      return write.file(filePath);
    }

    this.setRoute(this.#GET, "GET", `${path}/:f+`, func);
    return this;
  }

  private setRoute(router: Map<string, RouterValue>, method: Method, path: string, func: RouterValue): void {
    if (router.has(path)) {
      this.#Logger.warn(`The route is busy`, { method, path });
    } else {
      router.set(path, func);
    }
  }

  /**
   * Error 404 handler
   */
  public error404(func: RouterValue) {
    this.#ERROR_HANDLER_404 = func;
    return this;
  }

  /**
   * Error 500 handler
   */
  public error500(func: RouterValue) {
    this.#ERROR_HANDLER_500 = func;
    return this;
  }
}

module.exports = { VanillaWebServer };
