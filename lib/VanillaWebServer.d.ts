/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { State } from "./State";
import { Write } from "./Write";
export declare type VanillaWebServerRequest = IncomingMessage | Http2ServerRequest;
export declare type VanillaWebServerResponse = ServerResponse | Http2ServerResponse;
export interface VanillaWebServerOptions {
    logger?: Console;
}
export declare type Method = "GET" | "POST" | "PUT" | "DELETE";
export declare type RouterValue = (state: State, write: Write) => Promise<any>;
export declare class VanillaWebServer {
    #private;
    constructor(options: VanillaWebServerOptions);
    private findRoute;
    private requestListener;
    get listener(): (req: VanillaWebServerRequest, res: VanillaWebServerResponse) => void;
    route(method: Method, path: string, func: RouterValue): this;
    share(path: string, dir: string): this;
    private setRoute;
    error404(func: RouterValue): this;
    error500(func: RouterValue): this;
}
