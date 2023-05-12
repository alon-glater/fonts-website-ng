/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFontInput = {
  id?: string | null,
  name: string,
  url: string,
  displayName: string,
  format: string,
  _version?: number | null,
};

export type ModelFontConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  format?: ModelStringInput | null,
  and?: Array< ModelFontConditionInput | null > | null,
  or?: Array< ModelFontConditionInput | null > | null,
  not?: ModelFontConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Font = {
  __typename: "Font",
  id: string,
  name: string,
  url: string,
  displayName: string,
  format: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateFontInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  displayName?: string | null,
  format?: string | null,
  _version?: number | null,
};

export type DeleteFontInput = {
  id: string,
  _version?: number | null,
};

export type ModelFontFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  format?: ModelStringInput | null,
  and?: Array< ModelFontFilterInput | null > | null,
  or?: Array< ModelFontFilterInput | null > | null,
  not?: ModelFontFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFontConnection = {
  __typename: "ModelFontConnection",
  items:  Array<Font | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionFontFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  format?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFontFilterInput | null > | null,
  or?: Array< ModelSubscriptionFontFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateFontMutationVariables = {
  input: CreateFontInput,
  condition?: ModelFontConditionInput | null,
};

export type CreateFontMutation = {
  createFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFontMutationVariables = {
  input: UpdateFontInput,
  condition?: ModelFontConditionInput | null,
};

export type UpdateFontMutation = {
  updateFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFontMutationVariables = {
  input: DeleteFontInput,
  condition?: ModelFontConditionInput | null,
};

export type DeleteFontMutation = {
  deleteFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetFontQueryVariables = {
  id: string,
};

export type GetFontQuery = {
  getFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFontsQueryVariables = {
  filter?: ModelFontFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFontsQuery = {
  listFonts?:  {
    __typename: "ModelFontConnection",
    items:  Array< {
      __typename: "Font",
      id: string,
      name: string,
      url: string,
      displayName: string,
      format: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFontsQueryVariables = {
  filter?: ModelFontFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFontsQuery = {
  syncFonts?:  {
    __typename: "ModelFontConnection",
    items:  Array< {
      __typename: "Font",
      id: string,
      name: string,
      url: string,
      displayName: string,
      format: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateFontSubscriptionVariables = {
  filter?: ModelSubscriptionFontFilterInput | null,
};

export type OnCreateFontSubscription = {
  onCreateFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFontSubscriptionVariables = {
  filter?: ModelSubscriptionFontFilterInput | null,
};

export type OnUpdateFontSubscription = {
  onUpdateFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFontSubscriptionVariables = {
  filter?: ModelSubscriptionFontFilterInput | null,
};

export type OnDeleteFontSubscription = {
  onDeleteFont?:  {
    __typename: "Font",
    id: string,
    name: string,
    url: string,
    displayName: string,
    format: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
