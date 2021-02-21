[vanilla-server-lib](../README.md) / [Exports](../modules.md) / [VanillaWebServer](../modules/vanillawebserver.md) / VanillaWebServer

# Class: VanillaWebServer

[VanillaWebServer](../modules/vanillawebserver.md).VanillaWebServer

## Table of contents

### Constructors

- [constructor](vanillawebserver.vanillawebserver-1.md#constructor)

### Properties

- [#DELETE](vanillawebserver.vanillawebserver-1.md##delete)
- [#ERROR\_HANDLER\_404](vanillawebserver.vanillawebserver-1.md##error_handler_404)
- [#ERROR\_HANDLER\_500](vanillawebserver.vanillawebserver-1.md##error_handler_500)
- [#GET](vanillawebserver.vanillawebserver-1.md##get)
- [#Logger](vanillawebserver.vanillawebserver-1.md##logger)
- [#POST](vanillawebserver.vanillawebserver-1.md##post)
- [#PUT](vanillawebserver.vanillawebserver-1.md##put)

### Accessors

- [listener](vanillawebserver.vanillawebserver-1.md#listener)

### Methods

- [error404](vanillawebserver.vanillawebserver-1.md#error404)
- [error500](vanillawebserver.vanillawebserver-1.md#error500)
- [findRoute](vanillawebserver.vanillawebserver-1.md#findroute)
- [requestListener](vanillawebserver.vanillawebserver-1.md#requestlistener)
- [route](vanillawebserver.vanillawebserver-1.md#route)
- [setRoute](vanillawebserver.vanillawebserver-1.md#setroute)
- [share](vanillawebserver.vanillawebserver-1.md#share)

## Constructors

### constructor

\+ **new VanillaWebServer**(`options`: [*VanillaWebServerOptions*](../interfaces/vanillawebserver.vanillawebserveroptions.md)): [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*VanillaWebServerOptions*](../interfaces/vanillawebserver.vanillawebserveroptions.md) |

**Returns:** [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Defined in: VanillaWebServer.ts:30

## Properties

### #DELETE

• `Private` **#DELETE**: *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\>

Defined in: VanillaWebServer.ts:28

___

### #ERROR\_HANDLER\_404

• `Private` **#ERROR\_HANDLER\_404**: [*RouterValue*](../modules/vanillawebserver.md#routervalue)

Defined in: VanillaWebServer.ts:29

___

### #ERROR\_HANDLER\_500

• `Private` **#ERROR\_HANDLER\_500**: [*RouterValue*](../modules/vanillawebserver.md#routervalue)

Defined in: VanillaWebServer.ts:30

___

### #GET

• `Private` **#GET**: *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\>

Defined in: VanillaWebServer.ts:25

___

### #Logger

• `Private` **#Logger**: Console

Defined in: VanillaWebServer.ts:24

___

### #POST

• `Private` **#POST**: *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\>

Defined in: VanillaWebServer.ts:26

___

### #PUT

• `Private` **#PUT**: *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\>

Defined in: VanillaWebServer.ts:27

## Accessors

### listener

• get **listener**(): (`req`: [*VanillaWebServerRequest*](../modules/vanillawebserver.md#vanillawebserverrequest), `res`: [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse)) => *void*

Get listener for any server kernel (http, https, http2)

**Returns:** *function*

Defined in: VanillaWebServer.ts:130

## Methods

### error404

▸ **error404**(`func`: [*RouterValue*](../modules/vanillawebserver.md#routervalue)): [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Error 404 handler

#### Parameters:

Name | Type |
:------ | :------ |
`func` | [*RouterValue*](../modules/vanillawebserver.md#routervalue) |

**Returns:** [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Defined in: VanillaWebServer.ts:184

___

### error500

▸ **error500**(`func`: [*RouterValue*](../modules/vanillawebserver.md#routervalue)): [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Error 500 handler

#### Parameters:

Name | Type |
:------ | :------ |
`func` | [*RouterValue*](../modules/vanillawebserver.md#routervalue) |

**Returns:** [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Defined in: VanillaWebServer.ts:192

___

### findRoute

▸ `Private`**findRoute**(`router`: *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\>, `pathname`: *string*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`router` | *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\> |
`pathname` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`func` | *boolean* \| [*RouterValue*](../modules/vanillawebserver.md#routervalue) |
`params` | *object* |

Defined in: VanillaWebServer.ts:49

___

### requestListener

▸ `Private`**requestListener**(`req`: [*VanillaWebServerRequest*](../modules/vanillawebserver.md#vanillawebserverrequest), `res`: [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`req` | [*VanillaWebServerRequest*](../modules/vanillawebserver.md#vanillawebserverrequest) |
`res` | [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse) |

**Returns:** *Promise*<void\>

Defined in: VanillaWebServer.ts:69

___

### route

▸ **route**(`method`: [*Method*](../modules/vanillawebserver.md#method), `path`: *string*, `func`: [*RouterValue*](../modules/vanillawebserver.md#routervalue)): [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Add route

#### Parameters:

Name | Type |
:------ | :------ |
`method` | [*Method*](../modules/vanillawebserver.md#method) |
`path` | *string* |
`func` | [*RouterValue*](../modules/vanillawebserver.md#routervalue) |

**Returns:** [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Defined in: VanillaWebServer.ts:137

___

### setRoute

▸ `Private`**setRoute**(`router`: *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\>, `method`: [*Method*](../modules/vanillawebserver.md#method), `path`: *string*, `func`: [*RouterValue*](../modules/vanillawebserver.md#routervalue)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`router` | *Map*<string, [*RouterValue*](../modules/vanillawebserver.md#routervalue)\> |
`method` | [*Method*](../modules/vanillawebserver.md#method) |
`path` | *string* |
`func` | [*RouterValue*](../modules/vanillawebserver.md#routervalue) |

**Returns:** *void*

Defined in: VanillaWebServer.ts:173

___

### share

▸ **share**(`path`: *string*, `dir`: *string*): [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Static files

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`dir` | *string* |

**Returns:** [*VanillaWebServer*](vanillawebserver.vanillawebserver-1.md)

Defined in: VanillaWebServer.ts:161
