/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation LogoutUser {\n  logoutUser\n}": typeof types.LogoutUserDocument,
    "mutation RefreshTokens {\n  refreshTokens {\n    accessToken\n  }\n}": typeof types.RefreshTokensDocument,
    "mutation SendOtp($input: SendOtpInput!) {\n  sendOtp(input: $input) {\n    ok\n  }\n}": typeof types.SendOtpDocument,
    "mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input) {\n    accessToken\n  }\n}": typeof types.VerifyOtpDocument,
    "query GetAccount {\n  GetAccount {\n    userId\n    user {\n      avatar\n      displayName\n      userName\n    }\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetAccountDocument,
};
const documents: Documents = {
    "mutation LogoutUser {\n  logoutUser\n}": types.LogoutUserDocument,
    "mutation RefreshTokens {\n  refreshTokens {\n    accessToken\n  }\n}": types.RefreshTokensDocument,
    "mutation SendOtp($input: SendOtpInput!) {\n  sendOtp(input: $input) {\n    ok\n  }\n}": types.SendOtpDocument,
    "mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input) {\n    accessToken\n  }\n}": types.VerifyOtpDocument,
    "query GetAccount {\n  GetAccount {\n    userId\n    user {\n      avatar\n      displayName\n      userName\n    }\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}": types.GetAccountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LogoutUser {\n  logoutUser\n}"): (typeof documents)["mutation LogoutUser {\n  logoutUser\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RefreshTokens {\n  refreshTokens {\n    accessToken\n  }\n}"): (typeof documents)["mutation RefreshTokens {\n  refreshTokens {\n    accessToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SendOtp($input: SendOtpInput!) {\n  sendOtp(input: $input) {\n    ok\n  }\n}"): (typeof documents)["mutation SendOtp($input: SendOtpInput!) {\n  sendOtp(input: $input) {\n    ok\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input) {\n    accessToken\n  }\n}"): (typeof documents)["mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input) {\n    accessToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAccount {\n  GetAccount {\n    userId\n    user {\n      avatar\n      displayName\n      userName\n    }\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetAccount {\n  GetAccount {\n    userId\n    user {\n      avatar\n      displayName\n      userName\n    }\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;