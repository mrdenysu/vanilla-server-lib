[vanilla-server-lib](../README.md) / [Exports](../modules.md) / VanillaWebServer

# Module: VanillaWebServer

## Table of contents

### Classes

- [VanillaWebServer](../classes/vanillawebserver.vanillawebserver-1.md)

### Interfaces

- [VanillaWebServerOptions](../interfaces/vanillawebserver.vanillawebserveroptions.md)

### Type aliases

- [Method](vanillawebserver.md#method)
- [RouterValue](vanillawebserver.md#routervalue)
- [VanillaWebServerRequest](vanillawebserver.md#vanillawebserverrequest)
- [VanillaWebServerResponse](vanillawebserver.md#vanillawebserverresponse)

## Type aliases

### Method

Ƭ **Method**: *GET* \| *POST* \| *PUT* \| *DELETE*

Defined in: VanillaWebServer.ts:19

___

### RouterValue

Ƭ **RouterValue**: (`state`: [*State*](../classes/state.state-1.md), `write`: [*Write*](../classes/write.write-1.md)) => *Promise*<any\>

#### Type declaration:

▸ (`state`: [*State*](../classes/state.state-1.md), `write`: [*Write*](../classes/write.write-1.md)): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`state` | [*State*](../classes/state.state-1.md) |
`write` | [*Write*](../classes/write.write-1.md) |

**Returns:** *Promise*<any\>

Defined in: VanillaWebServer.ts:21

___

### VanillaWebServerRequest

Ƭ **VanillaWebServerRequest**: IncomingMessage \| Http2ServerRequest

Defined in: VanillaWebServer.ts:11

___

### VanillaWebServerResponse

Ƭ **VanillaWebServerResponse**: ServerResponse \| Http2ServerResponse

Defined in: VanillaWebServer.ts:13
