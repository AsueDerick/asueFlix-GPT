import { AddContentToWatchlistData, AddContentToWatchlistVariables, GetWatchlistForUserData, GetWatchlistForUserVariables, AddWatchEntryData, AddWatchEntryVariables, GetWatchEntriesForUserData, GetWatchEntriesForUserVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddContentToWatchlist(options?: useDataConnectMutationOptions<AddContentToWatchlistData, FirebaseError, AddContentToWatchlistVariables>): UseDataConnectMutationResult<AddContentToWatchlistData, AddContentToWatchlistVariables>;
export function useAddContentToWatchlist(dc: DataConnect, options?: useDataConnectMutationOptions<AddContentToWatchlistData, FirebaseError, AddContentToWatchlistVariables>): UseDataConnectMutationResult<AddContentToWatchlistData, AddContentToWatchlistVariables>;

export function useGetWatchlistForUser(vars: GetWatchlistForUserVariables, options?: useDataConnectQueryOptions<GetWatchlistForUserData>): UseDataConnectQueryResult<GetWatchlistForUserData, GetWatchlistForUserVariables>;
export function useGetWatchlistForUser(dc: DataConnect, vars: GetWatchlistForUserVariables, options?: useDataConnectQueryOptions<GetWatchlistForUserData>): UseDataConnectQueryResult<GetWatchlistForUserData, GetWatchlistForUserVariables>;

export function useAddWatchEntry(options?: useDataConnectMutationOptions<AddWatchEntryData, FirebaseError, AddWatchEntryVariables>): UseDataConnectMutationResult<AddWatchEntryData, AddWatchEntryVariables>;
export function useAddWatchEntry(dc: DataConnect, options?: useDataConnectMutationOptions<AddWatchEntryData, FirebaseError, AddWatchEntryVariables>): UseDataConnectMutationResult<AddWatchEntryData, AddWatchEntryVariables>;

export function useGetWatchEntriesForUser(vars: GetWatchEntriesForUserVariables, options?: useDataConnectQueryOptions<GetWatchEntriesForUserData>): UseDataConnectQueryResult<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
export function useGetWatchEntriesForUser(dc: DataConnect, vars: GetWatchEntriesForUserVariables, options?: useDataConnectQueryOptions<GetWatchEntriesForUserData>): UseDataConnectQueryResult<GetWatchEntriesForUserData, GetWatchEntriesForUserVariables>;
