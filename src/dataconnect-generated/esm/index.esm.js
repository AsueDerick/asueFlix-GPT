import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'asueflix',
  location: 'us-east4'
};

export const addContentToWatchlistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddContentToWatchlist', inputVars);
}
addContentToWatchlistRef.operationName = 'AddContentToWatchlist';

export function addContentToWatchlist(dcOrVars, vars) {
  return executeMutation(addContentToWatchlistRef(dcOrVars, vars));
}

export const getWatchlistForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWatchlistForUser', inputVars);
}
getWatchlistForUserRef.operationName = 'GetWatchlistForUser';

export function getWatchlistForUser(dcOrVars, vars) {
  return executeQuery(getWatchlistForUserRef(dcOrVars, vars));
}

export const addWatchEntryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddWatchEntry', inputVars);
}
addWatchEntryRef.operationName = 'AddWatchEntry';

export function addWatchEntry(dcOrVars, vars) {
  return executeMutation(addWatchEntryRef(dcOrVars, vars));
}

export const getWatchEntriesForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWatchEntriesForUser', inputVars);
}
getWatchEntriesForUserRef.operationName = 'GetWatchEntriesForUser';

export function getWatchEntriesForUser(dcOrVars, vars) {
  return executeQuery(getWatchEntriesForUserRef(dcOrVars, vars));
}

