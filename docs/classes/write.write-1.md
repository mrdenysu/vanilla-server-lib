[vanilla-server-lib](../README.md) / [Exports](../modules.md) / [Write](../modules/write.md) / Write

# Class: Write

[Write](../modules/write.md).Write

## Table of contents

### Constructors

- [constructor](write.write-1.md#constructor)

### Properties

- [#MinifyOptions](write.write-1.md##minifyoptions)
- [#RESPONSE](write.write-1.md##response)
- [#RenderEngine](write.write-1.md##renderengine)
- [#RenderOptions](write.write-1.md##renderoptions)
- [#RenderViewPath](write.write-1.md##renderviewpath)

### Methods

- [error](write.write-1.md#error)
- [file](write.write-1.md#file)
- [json](write.write-1.md#json)
- [render](write.write-1.md#render)
- [send](write.write-1.md#send)

## Constructors

### constructor

\+ **new Write**(`response`: [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse), `render`: [*Render*](../interfaces/write.render.md)): [*Write*](write.write-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`response` | [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse) |
`render` | [*Render*](../interfaces/write.render.md) |

**Returns:** [*Write*](write.write-1.md)

Defined in: [Write.ts:20](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L20)

## Properties

### #MinifyOptions

• `Private` **#MinifyOptions**: *object*

Defined in: [Write.ts:20](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L20)

___

### #RESPONSE

• `Private` **#RESPONSE**: [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse)

Defined in: [Write.ts:16](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L16)

___

### #RenderEngine

• `Private` **#RenderEngine**: *false* \| [*RenderEngine*](../modules/write.md#renderengine)

Defined in: [Write.ts:17](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L17)

___

### #RenderOptions

• `Private` **#RenderOptions**: *object*

Defined in: [Write.ts:18](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L18)

___

### #RenderViewPath

• `Private` **#RenderViewPath**: *string*

Defined in: [Write.ts:19](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L19)

## Methods

### error

▸ **error**(`status?`: *number*, `message?`: *string*, `data?`: *any*): *void*

Send any status and Error message

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`status` | *number* | 400 |
`message` | *string* | "Error" |
`data` | *any* | - |

**Returns:** *void*

Defined in: [Write.ts:65](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L65)

___

### file

▸ **file**(`filepath`: *string*): *void*

Send file

#### Parameters:

Name | Type |
:------ | :------ |
`filepath` | *string* |

**Returns:** *void*

Defined in: [Write.ts:99](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L99)

___

### json

▸ **json**(`object`: *string* \| *number* \| *boolean* \| *object*): *void*

Send status 200 and any JSON

#### Parameters:

Name | Type |
:------ | :------ |
`object` | *string* \| *number* \| *boolean* \| *object* |

**Returns:** *void*

Defined in: [Write.ts:57](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L57)

___

### render

▸ **render**(`path`: *string*, `data?`: *object*): *void*

Render

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`data` | *object* |

**Returns:** *void*

Defined in: [Write.ts:79](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L79)

___

### send

▸ **send**(`chunk`: *any*): *void*

Send status 200 and any chunk

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |

**Returns:** *void*

Defined in: [Write.ts:49](https://github.com/mrdenysu/vanilla-server-lib/blob/e383c84/src/Write.ts#L49)
