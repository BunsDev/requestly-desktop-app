import { Static } from "@sinclair/typebox";
import { type ApiRecord } from "./schemas";

export type FileSystemError = { message: string };
export type ContentfulSuccess<T> = T extends void
  ? { type: "success" }
  : { type: "success"; content: T };
export type FileSystemResult<T> =
  | ContentfulSuccess<T>
  | {
      type: "error";
      error: FileSystemError;
    };
export type ContentParseError = { message: string };
export type ContentParseResult<T> =
  | ContentfulSuccess<T>
  | {
      type: "error";
      error: ContentParseError;
    };

export type FolderResource = {
  type: "folder";
  path: string;
} & { readonly __tag: unique symbol };
export type FileResource = {
  type: "file";
  path: string;
} & { readonly __tag: unique symbol };

export type FsResource = FolderResource | FileResource;

export type Collection = {
  type: "collection";
  collectionId?: string;
  id: string;
  name: string;
  variables?: Record<string, any>;
};

export type API = {
  type: "api";
  collectionId?: string;
  id: string;
  request: {
    name: string;
    url: string;
    method: string;
  };
};

export type APIEntity = Collection | API;
