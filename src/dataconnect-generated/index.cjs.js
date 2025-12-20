const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'asueflix',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addContentToWatchlistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddContentToWatchlist', inputVars);
}
addContentToWatchlistRef.operationName = 'AddContentToWatchlist';
exports.addContentToWatchlistRef = addContentToWatchlistRef;

exports.addContentToWatchlist = function addContentToWatchlist(dcOrVars, vars) {
  return executeMutation(addContentToWatchlistRef(dcOrVars, vars));
};

const getWatchlistForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWatchlistForUser', inputVars);
}
getWatchlistForUserRef.operationName = 'GetWatchlistForUser';
exports.getWatchlistForUserRef = getWatchlistForUserRef;

exports.getWatchlistForUser = function getWatchlistForUser(dcOrVars, vars) {
  return executeQuery(getWatchlistForUserRef(dcOrVars, vars));
};

const addWatchEntryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddWatchEntry', inputVars);
}
addWatchEntryRef.operationName = 'AddWatchEntry';
exports.addWatchEntryRef = addWatchEntryRef;

exports.addWatchEntry = function addWatchEntry(dcOrVars, vars) {
  return executeMutation(addWatchEntryRef(dcOrVars, vars));
};

const getWatchEntriesForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWatchEntriesForUser', inputVars);
}
getWatchEntriesForUserRef.operationName = 'GetWatchEntriesForUser';
exports.getWatchEntriesForUserRef = getWatchEntriesForUserRef;

exports.getWatchEntriesForUser = function getWatchEntriesForUser(dcOrVars, vars) {
  return executeQuery(getWatchEntriesForUserRef(dcOrVars, vars));
};
