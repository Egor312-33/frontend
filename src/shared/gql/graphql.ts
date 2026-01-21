/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AuthType {
  Email = 'EMAIL',
  Phone = 'PHONE',
  Unrecognized = 'UNRECOGNIZED'
}

export type Mutation = {
  __typename?: 'Mutation';
  loginByPassword: Scalars['Boolean']['output'];
  /** Clears the refresh token cookie and logs the user out. */
  logoutUser: Scalars['Boolean']['output'];
  /** Issues a new access token using the refresh token from cookies. */
  refreshTokens: VerifyOtpPayload;
  /** Sends a one-time password (OTP) to the provided email or phone number. */
  sendOtp: SendOtpPayload;
  /** Verifies the OTP and sets a secure refresh token cookie. Returns an access token. */
  verifyOtp: VerifyOtpPayload;
};


export type MutationSendOtpArgs = {
  input: SendOtpInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};

export type Query = {
  __typename?: 'Query';
  telegramInit: Scalars['Boolean']['output'];
  testInit: Scalars['Boolean']['output'];
};

/** Data required to request a new one-time password (OTP) */
export type SendOtpInput = {
  /** User identifier where the code will be sent (email or phone) */
  identifier: Scalars['String']['input'];
  /** Method of delivery for the OTP */
  type: AuthType;
};

/** Result of the OTP request */
export type SendOtpPayload = {
  __typename?: 'SendOtpPayload';
  /** Indicates if the OTP was successfully sent */
  ok: Scalars['Boolean']['output'];
};

/** Data required to verify the one-time password (OTP) */
export type VerifyOtpInput = {
  /** The 6-digit verification code received by the user */
  code: Scalars['String']['input'];
  /** User identifier (email address or phone number) */
  identifier: Scalars['String']['input'];
  /** The delivery method used for the OTP */
  type: AuthType;
};

export type VerifyOtpPayload = {
  __typename?: 'VerifyOtpPayload';
  /** JWT access token for authorized requests */
  accessToken: Scalars['String']['output'];
};

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'VerifyOtpPayload', accessToken: string } };

export type SendOtpMutationVariables = Exact<{
  input: SendOtpInput;
}>;


export type SendOtpMutation = { __typename?: 'Mutation', sendOtp: { __typename?: 'SendOtpPayload', ok: boolean } };

export type VerifyOtpMutationVariables = Exact<{
  input: VerifyOtpInput;
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp: { __typename?: 'VerifyOtpPayload', accessToken: string } };


export const RefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const SendOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SendOtpMutation, SendOtpMutationVariables>;
export const VerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;