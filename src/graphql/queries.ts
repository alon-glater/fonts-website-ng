/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFont = /* GraphQL */ `
  query GetFont($id: ID!) {
    getFont(id: $id) {
      id
      name
      url
      displayName
      format
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFonts = /* GraphQL */ `
  query ListFonts(
    $filter: ModelFontFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFonts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        displayName
        format
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFonts = /* GraphQL */ `
  query SyncFonts(
    $filter: ModelFontFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFonts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        url
        displayName
        format
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
