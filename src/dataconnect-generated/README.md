# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetWatchlistForUser*](#getwatchlistforuser)
  - [*GetWatchEntriesForUser*](#getwatchentriesforuser)
- [**Mutations**](#mutations)
  - [*AddContentToWatchlist*](#addcontenttowatchlist)
  - [*AddWatchEntry*](#addwatchentry)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetWatchlistForUser
You can execute the `GetWatchlistForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWatchlistForUser(vars: GetWatchlistForUserVariables): QueryPromise<GetWatchlistForUserData, GetWatchlistForUserVariables>;

interface GetWatchlistForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWatchlistForUserVariables): QueryRef<GetWatchlistForUserData, GetWatchlistForUserVariables>;
}
export const getWatchlistForUserRef: GetWatchlistForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWatchlistForUser(dc: DataConnect, vars: GetWatchlistForUserVariables): QueryPromise<GetWatchlistForUserData, GetWatchlistForUserVariables>;

interface GetWatchlistForUserRef {
  ...
  (dc: DataConnect, vars: GetWatchlistForUserVariables): QueryRef<GetWatchlistForUserData, GetWatchlistForUserVariables>;
}
export const getWatchlistForUserRef: GetWatchlistForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWatchlistForUserRef:
```typescript
const name = getWatchlistForUserRef.operationName;
console.log(name);
```

### Variables
The `GetWatchlistForUser` query requires an argument of type `GetWatchlistForUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWatchlistForUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWatchlistForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWatchlistForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetWatchlistForUserData {
  watchlistEntries: ({
    id: UUIDString;
    content: {
      id: UUIDString;
      title: string;
      contentType: string;
      posterUrl?: string | null;
    } & Content_Key;
      priority?: number | null;
      addedAt: TimestampString;
  } & WatchlistEntry_Key)[];
}
```
### Using `GetWatchlistForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWatchlistForUser, GetWatchlistForUserVariables } from '@dataconnect/generated';

// The `GetWatchlistForUser` query requires an argument of type `GetWatchlistForUserVariables`:
const getWatchlistForUserVars: GetWatchlistForUserVariables = {
  userId: ..., 
};

// Call the `getWatchlistForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWatchlistForUser(getWatchlistForUserVars);
// Variables can be defined inline as well.
const { data } = await getWatchlistForUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWatchlistForUser(dataConnect, getWatchlistForUserVars);

console.log(data.watchlistEntries);

// Or, you can use the `Promise` API.
getWatchlistForUser(getWatchlistForUserVars).then((response) => {
  const data = response.data;
  console.log(data.watchlistEntries);
});
```

### Using `GetWatchlistForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWatchlistForUserRef, GetWatchlistForUserVariables } from '@dataconnect/generated';

// The `GetWatchlistForUser` query requires an argument of type `GetWatchlistForUserVariables`:
const getWatchlistForUserVars: GetWatchlistForUserVariables = {
  userId: ..., 
};

// Call the `getWatchlistForUserRef()` function to get a reference to the query.
const ref = getWatchlistForUserRef(getWatchlistForUserVars);
// Variables can be defined inline as well.
const ref = getWatchlistForUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWatchlistForUserRef(dataConnect, getWatchlistForUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.watchlistEntries);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.watchlistEntries);
});
```

## GetWatchEntriesForUser
You can execute the `GetWatchEntriesForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWatchEntriesForUser(vars: GetWatchEntriesForUserVariables): QueryPromise<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;

interface GetWatchEntriesForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWatchEntriesForUserVariables): QueryRef<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
}
export const getWatchEntriesForUserRef: GetWatchEntriesForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWatchEntriesForUser(dc: DataConnect, vars: GetWatchEntriesForUserVariables): QueryPromise<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;

interface GetWatchEntriesForUserRef {
  ...
  (dc: DataConnect, vars: GetWatchEntriesForUserVariables): QueryRef<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
}
export const getWatchEntriesForUserRef: GetWatchEntriesForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWatchEntriesForUserRef:
```typescript
const name = getWatchEntriesForUserRef.operationName;
console.log(name);
```

### Variables
The `GetWatchEntriesForUser` query requires an argument of type `GetWatchEntriesForUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWatchEntriesForUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWatchEntriesForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWatchEntriesForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetWatchEntriesForUserData {
  watchEntries: ({
    id: UUIDString;
    content: {
      id: UUIDString;
      title: string;
      contentType: string;
      posterUrl?: string | null;
    } & Content_Key;
      watchDate: DateString;
      rating?: number | null;
      notes?: string | null;
  } & WatchEntry_Key)[];
}
```
### Using `GetWatchEntriesForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWatchEntriesForUser, GetWatchEntriesForUserVariables } from '@dataconnect/generated';

// The `GetWatchEntriesForUser` query requires an argument of type `GetWatchEntriesForUserVariables`:
const getWatchEntriesForUserVars: GetWatchEntriesForUserVariables = {
  userId: ..., 
};

// Call the `getWatchEntriesForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWatchEntriesForUser(getWatchEntriesForUserVars);
// Variables can be defined inline as well.
const { data } = await getWatchEntriesForUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWatchEntriesForUser(dataConnect, getWatchEntriesForUserVars);

console.log(data.watchEntries);

// Or, you can use the `Promise` API.
getWatchEntriesForUser(getWatchEntriesForUserVars).then((response) => {
  const data = response.data;
  console.log(data.watchEntries);
});
```

### Using `GetWatchEntriesForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWatchEntriesForUserRef, GetWatchEntriesForUserVariables } from '@dataconnect/generated';

// The `GetWatchEntriesForUser` query requires an argument of type `GetWatchEntriesForUserVariables`:
const getWatchEntriesForUserVars: GetWatchEntriesForUserVariables = {
  userId: ..., 
};

// Call the `getWatchEntriesForUserRef()` function to get a reference to the query.
const ref = getWatchEntriesForUserRef(getWatchEntriesForUserVars);
// Variables can be defined inline as well.
const ref = getWatchEntriesForUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWatchEntriesForUserRef(dataConnect, getWatchEntriesForUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.watchEntries);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.watchEntries);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddContentToWatchlist
You can execute the `AddContentToWatchlist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addContentToWatchlist(vars: AddContentToWatchlistVariables): MutationPromise<AddContentToWatchlistData, AddContentToWatchlistVariables>;

interface AddContentToWatchlistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddContentToWatchlistVariables): MutationRef<AddContentToWatchlistData, AddContentToWatchlistVariables>;
}
export const addContentToWatchlistRef: AddContentToWatchlistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addContentToWatchlist(dc: DataConnect, vars: AddContentToWatchlistVariables): MutationPromise<AddContentToWatchlistData, AddContentToWatchlistVariables>;

interface AddContentToWatchlistRef {
  ...
  (dc: DataConnect, vars: AddContentToWatchlistVariables): MutationRef<AddContentToWatchlistData, AddContentToWatchlistVariables>;
}
export const addContentToWatchlistRef: AddContentToWatchlistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addContentToWatchlistRef:
```typescript
const name = addContentToWatchlistRef.operationName;
console.log(name);
```

### Variables
The `AddContentToWatchlist` mutation requires an argument of type `AddContentToWatchlistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddContentToWatchlistVariables {
  contentId: UUIDString;
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `AddContentToWatchlist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddContentToWatchlistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddContentToWatchlistData {
  watchlistEntry_insert: WatchlistEntry_Key;
}
```
### Using `AddContentToWatchlist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addContentToWatchlist, AddContentToWatchlistVariables } from '@dataconnect/generated';

// The `AddContentToWatchlist` mutation requires an argument of type `AddContentToWatchlistVariables`:
const addContentToWatchlistVars: AddContentToWatchlistVariables = {
  contentId: ..., 
  userId: ..., 
};

// Call the `addContentToWatchlist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addContentToWatchlist(addContentToWatchlistVars);
// Variables can be defined inline as well.
const { data } = await addContentToWatchlist({ contentId: ..., userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addContentToWatchlist(dataConnect, addContentToWatchlistVars);

console.log(data.watchlistEntry_insert);

// Or, you can use the `Promise` API.
addContentToWatchlist(addContentToWatchlistVars).then((response) => {
  const data = response.data;
  console.log(data.watchlistEntry_insert);
});
```

### Using `AddContentToWatchlist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addContentToWatchlistRef, AddContentToWatchlistVariables } from '@dataconnect/generated';

// The `AddContentToWatchlist` mutation requires an argument of type `AddContentToWatchlistVariables`:
const addContentToWatchlistVars: AddContentToWatchlistVariables = {
  contentId: ..., 
  userId: ..., 
};

// Call the `addContentToWatchlistRef()` function to get a reference to the mutation.
const ref = addContentToWatchlistRef(addContentToWatchlistVars);
// Variables can be defined inline as well.
const ref = addContentToWatchlistRef({ contentId: ..., userId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addContentToWatchlistRef(dataConnect, addContentToWatchlistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.watchlistEntry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.watchlistEntry_insert);
});
```

## AddWatchEntry
You can execute the `AddWatchEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addWatchEntry(vars: AddWatchEntryVariables): MutationPromise<AddWatchEntryData, AddWatchEntryVariables>;

interface AddWatchEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddWatchEntryVariables): MutationRef<AddWatchEntryData, AddWatchEntryVariables>;
}
export const addWatchEntryRef: AddWatchEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addWatchEntry(dc: DataConnect, vars: AddWatchEntryVariables): MutationPromise<AddWatchEntryData, AddWatchEntryVariables>;

interface AddWatchEntryRef {
  ...
  (dc: DataConnect, vars: AddWatchEntryVariables): MutationRef<AddWatchEntryData, AddWatchEntryVariables>;
}
export const addWatchEntryRef: AddWatchEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addWatchEntryRef:
```typescript
const name = addWatchEntryRef.operationName;
console.log(name);
```

### Variables
The `AddWatchEntry` mutation requires an argument of type `AddWatchEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddWatchEntryVariables {
  contentId: UUIDString;
  userId: UUIDString;
  watchDate: DateString;
  rating?: number | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `AddWatchEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddWatchEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddWatchEntryData {
  watchEntry_insert: WatchEntry_Key;
}
```
### Using `AddWatchEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addWatchEntry, AddWatchEntryVariables } from '@dataconnect/generated';

// The `AddWatchEntry` mutation requires an argument of type `AddWatchEntryVariables`:
const addWatchEntryVars: AddWatchEntryVariables = {
  contentId: ..., 
  userId: ..., 
  watchDate: ..., 
  rating: ..., // optional
  notes: ..., // optional
};

// Call the `addWatchEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addWatchEntry(addWatchEntryVars);
// Variables can be defined inline as well.
const { data } = await addWatchEntry({ contentId: ..., userId: ..., watchDate: ..., rating: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addWatchEntry(dataConnect, addWatchEntryVars);

console.log(data.watchEntry_insert);

// Or, you can use the `Promise` API.
addWatchEntry(addWatchEntryVars).then((response) => {
  const data = response.data;
  console.log(data.watchEntry_insert);
});
```

### Using `AddWatchEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addWatchEntryRef, AddWatchEntryVariables } from '@dataconnect/generated';

// The `AddWatchEntry` mutation requires an argument of type `AddWatchEntryVariables`:
const addWatchEntryVars: AddWatchEntryVariables = {
  contentId: ..., 
  userId: ..., 
  watchDate: ..., 
  rating: ..., // optional
  notes: ..., // optional
};

// Call the `addWatchEntryRef()` function to get a reference to the mutation.
const ref = addWatchEntryRef(addWatchEntryVars);
// Variables can be defined inline as well.
const ref = addWatchEntryRef({ contentId: ..., userId: ..., watchDate: ..., rating: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addWatchEntryRef(dataConnect, addWatchEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.watchEntry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.watchEntry_insert);
});
```

