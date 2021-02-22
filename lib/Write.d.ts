import { VanillaWebServerResponse } from "./VanillaWebServer";
export declare type RenderEngine = (path: string, data: object, options: object, cb: (err: any, html: string) => any) => any;
export interface Render {
    engine?: RenderEngine;
    options?: object;
    viewPath?: string;
}
export declare class Write {
    #private;
    constructor(response: VanillaWebServerResponse, render: Render);
    send(chunk: any): void;
    json(object: object | string | number | boolean): void;
    error(status?: number, message?: string, data?: any): void;
    render(path: string, data?: object): void;
    file(filepath: string): void;
}
