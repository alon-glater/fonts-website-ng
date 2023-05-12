/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFont = /* GraphQL */ `
  mutation CreateFont(
    $input: CreateFontInput!
    $condition: ModelFontConditionInput
  ) {
    createFont(input: $input, condition: $condition) {
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
export const updateFont = /* GraphQL */ `
  mutation UpdateFont(
    $input: UpdateFontInput!
    $condition: ModelFontConditionInput
  ) {
    updateFont(input: $input, condition: $condition) {
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
export const deleteFont = /* GraphQL */ `
  mutation DeleteFont(
    $input: DeleteFontInput!
    $condition: ModelFontConditionInput
  ) {
    deleteFont(input: $input, condition: $condition) {
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
