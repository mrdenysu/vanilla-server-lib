/// <reference types="node" />
import { Fields, Files } from "formidable";
import { ParsedUrlQuery } from "querystring";
import { VanillaWebServerRequest } from "./VanillaWebServer";
export interface StateOptions {
    method: string;
    url: string;
    pathname: string;
    params: NodeJS.Dict<[string]>;
    request: VanillaWebServerRequest;
}
export interface StateOptions {
    params: Params;
    pathname: string;
    method: string;
}
export interface Body {
    fields: Fields;
    files: Files;
}
interface Params extends NodeJS.Dict<string | string[]> {
}
export declare class State {
    #private;
    constructor(options: StateOptions);
    get method(): string;
    get url(): string;
    get pathname(): string;
    get params(): Params;
    parseQuery(): Promise<ParsedUrlQuery>;
    parseBody(): Promise<Body>;
}
export {};
