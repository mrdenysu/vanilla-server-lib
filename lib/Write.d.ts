import { VanillaWebServerResponse } from "./VanillaWebServer";
export declare class Write {
    #private;
    constructor(response: VanillaWebServerResponse);
    send(chunk: any): void;
    json(object: object | string | number | boolean): void;
    error(status?: number, message?: string, data?: any): void;
    file(filepath: string): void;
}
