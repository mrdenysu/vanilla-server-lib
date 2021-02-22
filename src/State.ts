import { Fields, Files, IncomingForm } from "formidable";
import { IncomingMessage } from "node:http";
import { parse, ParsedUrlQuery } from "querystring";
import { VanillaWebServerRequest } from "./VanillaWebServer";

export interface StateOptions {
  method: string;
  url: string;
  pathname: string;
  params: NodeJS.Dict<[string]>;
  request: VanillaWebServerRequest;
}

export interface StateOptions {
  // @ts-ignore
  params: Params;
  pathname: string;
  method: string;
}

export interface Body {
  fields: Fields;
  files: Files;
}

interface Params extends NodeJS.Dict<string | string[]> {}

export class State {
  #REQUEST: VanillaWebServerRequest;
  #METHOD: string;
  #URL: string;
  #PATH: string;
  #PARAMS: Params;
  #Query: ParsedUrlQuery;
  #Body: Body;

  constructor(options: StateOptions) {
    this.#METHOD = options.method;
    this.#URL = options.url;
    this.#PATH = options.pathname;
    this.#PARAMS = options.params;
    this.#REQUEST = options.request;
  }

  /**
   * Request method
   */
  get method(): string {
    return this.#METHOD;
  }

  /**
   * Request url
   */
  get url(): string {
    return this.#URL;
  }

  /**
   * Request pathname
   */
  get pathname(): string {
    return this.#PATH;
  }

  /**
   * Request params
   */
  get params(): Params {
    return this.#PARAMS;
  }

  /**
   * Parse query string
   */
  async parseQuery(): Promise<ParsedUrlQuery> {
    if (this.#Query) return this.#Query;
    return (this.#Query = parse(this.#URL.substring(2)));
  }

  /**
   * Parse body data
   */
  async parseBody(): Promise<Body> {
    if (this.#Body) return this.#Body;
    const _body: Body = await new Promise((resolve, reject) => {
      // @ts-ignore
      const form = new IncomingForm({ multiples: true });
      form.parse(<IncomingMessage>this.#REQUEST, (err, fields, files) => {
        if (err) return reject(err);
        return resolve({ fields, files });
      });
    });
    return (this.#Body = _body);
  }
}

module.exports = { State };
