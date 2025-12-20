# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useAddContentToWatchlist, useGetWatchlistForUser, useAddWatchEntry, useGetWatchEntriesForUser } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useAddContentToWatchlist(addContentToWatchlistVars);

const { data, isPending, isSuccess, isError, error } = useGetWatchlistForUser(getWatchlistForUserVars);

const { data, isPending, isSuccess, isError, error } = useAddWatchEntry(addWatchEntryVars);

const { data, isPending, isSuccess, isError, error } = useGetWatchEntriesForUser(getWatchEntriesForUserVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { addContentToWatchlist, getWatchlistForUser, addWatchEntry, getWatchEntriesForUser } from '@dataconnect/generated';


// Operation AddContentToWatchlist:  For variables, look at type AddContentToWatchlistVars in ../index.d.ts
const { data } = await AddContentToWatchlist(dataConnect, addContentToWatchlistVars);

// Operation GetWatchlistForUser:  For variables, look at type GetWatchlistForUserVars in ../index.d.ts
const { data } = await GetWatchlistForUser(dataConnect, getWatchlistForUserVars);

// Operation AddWatchEntry:  For variables, look at type AddWatchEntryVars in ../index.d.ts
const { data } = await AddWatchEntry(dataConnect, addWatchEntryVars);

// Operation GetWatchEntriesForUser:  For variables, look at type GetWatchEntriesForUserVars in ../index.d.ts
const { data } = await GetWatchEntriesForUser(dataConnect, getWatchEntriesForUserVars);


```