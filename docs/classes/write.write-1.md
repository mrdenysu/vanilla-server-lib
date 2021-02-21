[vanilla-server-lib](../README.md) / [Exports](../modules.md) / [Write](../modules/write.md) / Write

# Class: Write

[Write](../modules/write.md).Write

## Table of contents

### Constructors

- [constructor](write.write-1.md#constructor)

### Properties

- [#RESPONSE](write.write-1.md##response)

### Methods

- [error](write.write-1.md#error)
- [file](write.write-1.md#file)
- [json](write.write-1.md#json)
- [send](write.write-1.md#send)

## Constructors

### constructor

\+ **new Write**(`response`: [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse)): [*Write*](write.write-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`response` | [*VanillaWebServerResponse*](../modules/vanillawebserver.md#vanillawebserverresponse) |

**Returns:** [*Write*](write.write-1.md)

Defined in: Write.ts:7

## Properties

### #RESPONSE

• `Private` **#RESPONSE**: *any*

Defined in: Write.ts:7

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

Defined in: Write.ts:31

___

### file

▸ **file**(`filepath`: *string*): *void*

Send file

#### Parameters:

Name | Type |
:------ | :------ |
`filepath` | *string* |

**Returns:** *void*

Defined in: Write.ts:45

___

### json

▸ **json**(`object`: *string* \| *number* \| *boolean* \| *object*): *void*

Send status 200 and any JSON

#### Parameters:

Name | Type |
:------ | :------ |
`object` | *string* \| *number* \| *boolean* \| *object* |

**Returns:** *void*

Defined in: Write.ts:23

___

### send

▸ **send**(`chunk`: *any*): *void*

Send status 200 and any chunk

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |

**Returns:** *void*

Defined in: Write.ts:15
