[vanilla-server-lib](../README.md) / [Exports](../modules.md) / [State](../modules/state.md) / State

# Class: State

[State](../modules/state.md).State

## Table of contents

### Constructors

- [constructor](state.state-1.md#constructor)

### Properties

- [#Body](state.state-1.md##body)
- [#METHOD](state.state-1.md##method)
- [#PARAMS](state.state-1.md##params)
- [#PATH](state.state-1.md##path)
- [#Query](state.state-1.md##query)
- [#REQUEST](state.state-1.md##request)
- [#URL](state.state-1.md##url)

### Accessors

- [method](state.state-1.md#method)
- [params](state.state-1.md#params)
- [pathname](state.state-1.md#pathname)
- [url](state.state-1.md#url)

### Methods

- [parseBody](state.state-1.md#parsebody)
- [parseQuery](state.state-1.md#parsequery)

## Constructors

### constructor

\+ **new State**(`options`: [*StateOptions*](../interfaces/state.stateoptions.md)): [*State*](state.state-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*StateOptions*](../interfaces/state.stateoptions.md) |

**Returns:** [*State*](state.state-1.md)

Defined in: [State.ts:35](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L35)

## Properties

### #Body

• `Private` **#Body**: [*Body*](../interfaces/state.body.md)

Defined in: [State.ts:35](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L35)

___

### #METHOD

• `Private` **#METHOD**: *string*

Defined in: [State.ts:30](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L30)

___

### #PARAMS

• `Private` **#PARAMS**: *Params*

Defined in: [State.ts:33](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L33)

___

### #PATH

• `Private` **#PATH**: *string*

Defined in: [State.ts:32](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L32)

___

### #Query

• `Private` **#Query**: *ParsedUrlQuery*

Defined in: [State.ts:34](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L34)

___

### #REQUEST

• `Private` **#REQUEST**: [*VanillaWebServerRequest*](../modules/vanillawebserver.md#vanillawebserverrequest)

Defined in: [State.ts:29](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L29)

___

### #URL

• `Private` **#URL**: *string*

Defined in: [State.ts:31](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L31)

## Accessors

### method

• get **method**(): *string*

Request method

**Returns:** *string*

Defined in: [State.ts:48](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L48)

___

### params

• get **params**(): *Params*

Request params

**Returns:** *Params*

Defined in: [State.ts:69](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L69)

___

### pathname

• get **pathname**(): *string*

Request pathname

**Returns:** *string*

Defined in: [State.ts:62](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L62)

___

### url

• get **url**(): *string*

Request url

**Returns:** *string*

Defined in: [State.ts:55](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L55)

## Methods

### parseBody

▸ **parseBody**(): *Promise*<[*Body*](../interfaces/state.body.md)\>

Parse body data

**Returns:** *Promise*<[*Body*](../interfaces/state.body.md)\>

Defined in: [State.ts:84](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L84)

___

### parseQuery

▸ **parseQuery**(): *Promise*<ParsedUrlQuery\>

Parse query string

**Returns:** *Promise*<ParsedUrlQuery\>

Defined in: [State.ts:76](https://github.com/mrdenysu/vanilla-server-lib/blob/609fa12/src/State.ts#L76)
