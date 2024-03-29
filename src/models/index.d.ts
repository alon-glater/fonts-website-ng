import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFont = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Font, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly displayName: string;
  readonly format: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFont = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Font, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly displayName: string;
  readonly format: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Font = LazyLoading extends LazyLoadingDisabled ? EagerFont : LazyFont

export declare const Font: (new (init: ModelInit<Font>) => Font) & {
  copyOf(source: Font, mutator: (draft: MutableModel<Font>) => MutableModel<Font> | void): Font;
}