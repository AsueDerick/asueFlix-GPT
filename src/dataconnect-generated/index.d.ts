import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddContentToWatchlistData {
  watchlistEntry_insert: WatchlistEntry_Key;
}

export interface AddContentToWatchlistVariables {
  contentId: UUIDString;
  userId: UUIDString;
}

export interface AddWatchEntryData {
  watchEntry_insert: WatchEntry_Key;
}

export interface AddWatchEntryVariables {
  contentId: UUIDString;
  userId: UUIDString;
  watchDate: DateString;
  rating?: number | null;
  notes?: string | null;
}

export interface Content_Key {
  id: UUIDString;
  __typename?: 'Content_Key';
}

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

export interface GetWatchEntriesForUserVariables {
  userId: UUIDString;
}

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

export interface GetWatchlistForUserVariables {
  userId: UUIDString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WatchEntry_Key {
  id: UUIDString;
  __typename?: 'WatchEntry_Key';
}

export interface WatchlistEntry_Key {
  id: UUIDString;
  __typename?: 'WatchlistEntry_Key';
}

interface AddContentToWatchlistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddContentToWatchlistVariables): MutationRef<AddContentToWatchlistData, AddContentToWatchlistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddContentToWatchlistVariables): MutationRef<AddContentToWatchlistData, AddContentToWatchlistVariables>;
  operationName: string;
}
export const addContentToWatchlistRef: AddContentToWatchlistRef;

export function addContentToWatchlist(vars: AddContentToWatchlistVariables): MutationPromise<AddContentToWatchlistData, AddContentToWatchlistVariables>;
export function addContentToWatchlist(dc: DataConnect, vars: AddContentToWatchlistVariables): MutationPromise<AddContentToWatchlistData, AddContentToWatchlistVariables>;

interface GetWatchlistForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWatchlistForUserVariables): QueryRef<GetWatchlistForUserData, GetWatchlistForUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWatchlistForUserVariables): QueryRef<GetWatchlistForUserData, GetWatchlistForUserVariables>;
  operationName: string;
}
export const getWatchlistForUserRef: GetWatchlistForUserRef;

export function getWatchlistForUser(vars: GetWatchlistForUserVariables): QueryPromise<GetWatchlistForUserData, GetWatchlistForUserVariables>;
export function getWatchlistForUser(dc: DataConnect, vars: GetWatchlistForUserVariables): QueryPromise<GetWatchlistForUserData, GetWatchlistForUserVariables>;

interface AddWatchEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddWatchEntryVariables): MutationRef<AddWatchEntryData, AddWatchEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddWatchEntryVariables): MutationRef<AddWatchEntryData, AddWatchEntryVariables>;
  operationName: string;
}
export const addWatchEntryRef: AddWatchEntryRef;

export function addWatchEntry(vars: AddWatchEntryVariables): MutationPromise<AddWatchEntryData, AddWatchEntryVariables>;
export function addWatchEntry(dc: DataConnect, vars: AddWatchEntryVariables): MutationPromise<AddWatchEntryData, AddWatchEntryVariables>;

interface GetWatchEntriesForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWatchEntriesForUserVariables): QueryRef<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWatchEntriesForUserVariables): QueryRef<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
  operationName: string;
}
export const getWatchEntriesForUserRef: GetWatchEntriesForUserRef;

export function getWatchEntriesForUser(vars: GetWatchEntriesForUserVariables): QueryPromise<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
export function getWatchEntriesForUser(dc: DataConnect, vars: GetWatchEntriesForUserVariables): QueryPromise<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;

