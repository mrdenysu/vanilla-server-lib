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

Defined in: State.ts:34

## Properties

### #Body

• `Private` **#Body**: [*Body*](../interfaces/state.body.md)

Defined in: State.ts:34

___

### #METHOD

• `Private` **#METHOD**: *string*

Defined in: State.ts:29

___

### #PARAMS

• `Private` **#PARAMS**: *Params*

Defined in: State.ts:32

___

### #PATH

• `Private` **#PATH**: *string*

Defined in: State.ts:31

___

### #Query

• `Private` **#Query**: *ParsedUrlQuery*

Defined in: State.ts:33

___

### #REQUEST

• `Private` **#REQUEST**: [*VanillaWebServerRequest*](../modules/vanillawebserver.md#vanillawebserverrequest)

Defined in: State.ts:28

___

### #URL

• `Private` **#URL**: *string*

Defined in: State.ts:30

## Accessors

### method

• get **method**(): *string*

Request method

**Returns:** *string*

Defined in: State.ts:47

___

### params

• get **params**(): *Params*

Request params

**Returns:** *Params*

Defined in: State.ts:68

___

### pathname

• get **pathname**(): *string*

Request pathname

**Returns:** *string*

Defined in: State.ts:61

___

### url

• get **url**(): *string*

Request url

**Returns:** *string*

Defined in: State.ts:54

## Methods

### parseBody

▸ **parseBody**(): *Promise*<[*Body*](../interfaces/state.body.md)\>

Parse body data

**Returns:** *Promise*<[*Body*](../interfaces/state.body.md)\>

Defined in: State.ts:83

___

### parseQuery

▸ **parseQuery**(): *Promise*<ParsedUrlQuery\>

Parse query string

**Returns:** *Promise*<ParsedUrlQuery\>

Defined in: State.ts:75
