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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

/** Cleaned Access from Proto */
export enum Access {
  Bylink = 'BYLINK',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type AccountModel = {
  __typename?: 'AccountModel';
  /** Account last update date */
  createdAt: Scalars['DateTime']['output'];
  /** User email address */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the account */
  id: Scalars['ID']['output'];
  /** Flag indicating if email is verified */
  isEmailVerified: Scalars['Boolean']['output'];
  /** Flag indicating if phone is verified */
  isPhoneVerified: Scalars['Boolean']['output'];
  /** User phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** Account role (USER, ADMIN, etc.) */
  role: Role;
  /** Account creation date */
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserModel>;
  /** Associated User ID */
  userId?: Maybe<Scalars['String']['output']>;
};

export enum AuthType {
  Email = 'EMAIL',
  Phone = 'PHONE',
  Unrecognized = 'UNRECOGNIZED'
}

export type CategoryModel = {
  __typename?: 'CategoryModel';
  /** Category last update date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of the category */
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  /** Category type (VIDEO, BLOG, etc.) */
  targets: Array<TargetType>;
  thumbnailUrl: Scalars['String']['output'];
  translations: Array<CategoryTranslationModel>;
  /** Category creation date */
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  language: Language;
  title: Scalars['String']['input'];
};

export type CategoryTranslationModel = {
  __typename?: 'CategoryTranslationModel';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language: Language;
  title: Scalars['String']['output'];
};

export type ConfirmVideoUploadInput = {
  contentType: Scalars['String']['input'];
  fileKey: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
};

export type ConfirmVideoUploadPayload = {
  __typename?: 'ConfirmVideoUploadPayload';
  success: Scalars['Boolean']['output'];
};

export type CreateCategoryInput = {
  translations: Array<CategoryTranslationInput>;
};

export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** Response chech delete category */
  status: Scalars['Boolean']['output'];
};

export type GetAccountsInput = {
  ids: Array<Scalars['String']['input']>;
};

export type GetUserMessagesPayload = {
  __typename?: 'GetUserMessagesPayload';
  chatId: Scalars['ID']['output'];
  encryptedChatKey: Scalars['String']['output'];
  messages: Array<SystemMessageModel>;
};

/** Cleaned Language from Proto */
export enum Language {
  En = 'EN',
  Ru = 'RU'
}

export type LoginNotificationPayload = {
  __typename?: 'LoginNotificationPayload';
  authTag: Scalars['String']['output'];
  content: Scalars['String']['output'];
  iv: Scalars['String']['output'];
  messageId: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmVideoUpload: ConfirmVideoUploadPayload;
  createCategoryVideo: CategoryModel;
  deleteAvatarProfile: Scalars['Boolean']['output'];
  deleteCategory: DeleteCategoryPayload;
  loginByPassword: Scalars['Boolean']['output'];
  /** Clears the refresh token cookie and logs the user out. */
  logoutUser: Scalars['Boolean']['output'];
  /** Issues a new access token using the refresh token from cookies. */
  refreshTokens: VerifyOtpPayload;
  /** Sends a one-time password (OTP) to the provided email or phone number. */
  sendOtp: SendOtpPayload;
  updateAvatarProfile: UpdateAvatarPayload;
  updateCategory: CategoryModel;
  updateSettingsVideo: VideoModel;
  /** Verifies the OTP and sets a secure refresh token cookie. Returns an access token. */
  verifyOtp: VerifyOtpPayload;
};


export type MutationConfirmVideoUploadArgs = {
  input: ConfirmVideoUploadInput;
};


export type MutationCreateCategoryVideoArgs = {
  image: Scalars['Upload']['input'];
  input: CreateCategoryInput;
};


export type MutationDeleteAvatarProfileArgs = {
  key: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type MutationSendOtpArgs = {
  input: SendOtpInput;
};


export type MutationUpdateAvatarProfileArgs = {
  avatar: Scalars['Upload']['input'];
};


export type MutationUpdateCategoryArgs = {
  image?: InputMaybe<Scalars['Upload']['input']>;
  input: UpdateCategoryInput;
  slug: Scalars['String']['input'];
};


export type MutationUpdateSettingsVideoArgs = {
  categoryId: Array<Scalars['String']['input']>;
  input: UpdateVideoInput;
  slug: Scalars['String']['input'];
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};

export type Query = {
  __typename?: 'Query';
  GetAccount: AccountModel;
  GetAccounts: Array<AccountModel>;
  checkAvailabilityCategory: CheckAvailabilityCategoryPayload;
  getAllVideosOwner: Array<VideoModel>;
  getCategories: Array<CategoryModel>;
  getCategoryWithTranslations: CategoryModel;
  getMe?: Maybe<UserModel>;
  getPublicVideoBySlug: VideoModel;
  getSettingVideoBySlug: VideoModel;
  getUserSystemMessages: Array<GetUserMessagesPayload>;
  getUsers: Array<UserModel>;
  getVideoUploadTicket: VideoUploadTicket;
  telegramInit: Scalars['Boolean']['output'];
  testInit: Scalars['Boolean']['output'];
};


export type QueryGetAccountsArgs = {
  input: GetAccountsInput;
};


export type QueryCheckAvailabilityCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetCategoriesArgs = {
  targets?: InputMaybe<Array<TargetType>>;
};


export type QueryGetCategoryWithTranslationsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetMeArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPublicVideoBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetSettingVideoBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUserSystemMessagesArgs = {
  publicKey: Scalars['String']['input'];
};


export type QueryGetUsersArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryGetVideoUploadTicketArgs = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

/** User roles in the system */
export enum Role {
  Admin = 'ADMIN',
  Unrecognized = 'UNRECOGNIZED',
  User = 'USER'
}

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

/** Cleaned Status from Proto */
export enum Status {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Ready = 'READY'
}

export type Subscription = {
  __typename?: 'Subscription';
  securityNotification: LoginNotificationPayload;
};

export type SystemMessageModel = {
  __typename?: 'SystemMessageModel';
  authTag: Scalars['String']['output'];
  chatId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  initialVector: Scalars['String']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isEdited: Scalars['Boolean']['output'];
  senderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Category type */
export enum TargetType {
  Unrecognized = 'UNRECOGNIZED',
  Video = 'VIDEO'
}

export type UpdateAvatarPayload = {
  __typename?: 'UpdateAvatarPayload';
  /** The new S3 key */
  key: Scalars['String']['output'];
  /** The synchronized timestamp of the update */
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCategoryInput = {
  /** Список целевых типов контента */
  targets: Array<TargetType>;
  /** Переводы названия и описания */
  translations: Array<CategoryTranslationInput>;
};

export type UpdateVideoInput = {
  access?: InputMaybe<Access>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  /** User last update date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** User creation date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
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

export type VideoCategoryModel = {
  __typename?: 'VideoCategoryModel';
  id: Scalars['ID']['output'];
};

export type VideoModel = {
  __typename?: 'VideoModel';
  access: Access;
  categories: Array<VideoCategoryModel>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  durationSeconds?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  ownerId: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  status: Status;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VideoUploadTicket = {
  __typename?: 'VideoUploadTicket';
  /** Ключ файла в хранилище */
  fileKey: Scalars['String']['output'];
  /** URL для загрузки (S3 Presigned URL) */
  uploadUrl: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type CheckAvailabilityCategoryPayload = {
  __typename?: 'checkAvailabilityCategoryPayload';
  /** Response chech availability category */
  isAvailable: Scalars['Boolean']['output'];
};

export type UpdateSettingsVideoMutationVariables = Exact<{
  categoryId: Array<Scalars['String']['input']> | Scalars['String']['input'];
  input: UpdateVideoInput;
  slug: Scalars['String']['input'];
}>;


export type UpdateSettingsVideoMutation = { __typename?: 'Mutation', updateSettingsVideo: { __typename?: 'VideoModel', access: Access, createdAt: any, description?: string | null, durationSeconds?: number | null, id: string, ownerId: string, path?: string | null, status: Status, thumbnailUrl?: string | null, title: string, slug: string, updatedAt: any, categories: Array<{ __typename?: 'VideoCategoryModel', id: string }> } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type UpdateAvatarProfileMutationVariables = Exact<{
  avatar: Scalars['Upload']['input'];
}>;


export type UpdateAvatarProfileMutation = { __typename?: 'Mutation', updateAvatarProfile: { __typename?: 'UpdateAvatarPayload', key: string, updatedAt: any } };

export type DeleteAvatarProfileMutationVariables = Exact<{
  key: Scalars['String']['input'];
}>;


export type DeleteAvatarProfileMutation = { __typename?: 'Mutation', deleteAvatarProfile: boolean };

export type ConfirmVideoUploadMutationVariables = Exact<{
  input: ConfirmVideoUploadInput;
}>;


export type ConfirmVideoUploadMutation = { __typename?: 'Mutation', confirmVideoUpload: { __typename?: 'ConfirmVideoUploadPayload', success: boolean } };

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

export type CreateCategoryVideoMutationVariables = Exact<{
  image: Scalars['Upload']['input'];
  input: CreateCategoryInput;
}>;


export type CreateCategoryVideoMutation = { __typename?: 'Mutation', createCategoryVideo: { __typename?: 'CategoryModel', createdAt: any, id: string, slug: string, targets: Array<TargetType>, thumbnailUrl: string, updatedAt: any, translations: Array<{ __typename?: 'CategoryTranslationModel', description?: string | null, id: string, language: Language, title: string }> } };

export type DeleteCategoryMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'DeleteCategoryPayload', status: boolean } };

export type UpdateCategoryMutationVariables = Exact<{
  image?: InputMaybe<Scalars['Upload']['input']>;
  input: UpdateCategoryInput;
  slug: Scalars['String']['input'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'CategoryModel', createdAt: any, id: string, slug: string, targets: Array<TargetType>, thumbnailUrl: string, updatedAt: any, translations: Array<{ __typename?: 'CategoryTranslationModel', description?: string | null, id: string, language: Language, title: string }> } };

export type GetAllVideosOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVideosOwnerQuery = { __typename?: 'Query', getAllVideosOwner: Array<{ __typename?: 'VideoModel', access: Access, createdAt: any, description?: string | null, durationSeconds?: number | null, ownerId: string, path?: string | null, slug: string, status: Status, thumbnailUrl?: string | null, title: string, updatedAt: any }> };

export type GetCategoriesVideoQueryVariables = Exact<{
  targets?: InputMaybe<Array<TargetType> | TargetType>;
}>;


export type GetCategoriesVideoQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'CategoryModel', createdAt: any, id: string, slug: string, targets: Array<TargetType>, thumbnailUrl: string, translations: Array<{ __typename?: 'CategoryTranslationModel', title: string, language: Language, id: string, description?: string | null }> }> };

export type GetSettingVideoBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetSettingVideoBySlugQuery = { __typename?: 'Query', getSettingVideoBySlug: { __typename?: 'VideoModel', access: Access, createdAt: any, description?: string | null, durationSeconds?: number | null, id: string, ownerId: string, path?: string | null, slug: string, status: Status, thumbnailUrl?: string | null, title: string, updatedAt: any, categories: Array<{ __typename?: 'VideoCategoryModel', id: string }> } };

export type CheckAvailabilityCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CheckAvailabilityCategoryQuery = { __typename?: 'Query', checkAvailabilityCategory: { __typename?: 'checkAvailabilityCategoryPayload', isAvailable: boolean } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'CategoryModel', id: string, slug: string, targets: Array<TargetType>, thumbnailUrl: string, translations: Array<{ __typename?: 'CategoryTranslationModel', title: string, language: Language, id: string }> }> };

export type GetCategoryWithTranslationsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCategoryWithTranslationsQuery = { __typename?: 'Query', getCategoryWithTranslations: { __typename?: 'CategoryModel', id: string, slug: string, targets: Array<TargetType>, thumbnailUrl: string, translations: Array<{ __typename?: 'CategoryTranslationModel', description?: string | null, id: string, language: Language, title: string }> } };

export type GetAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountQuery = { __typename?: 'Query', GetAccount: { __typename?: 'AccountModel', userId?: string | null, role: Role, phone?: string | null, email?: string | null, createdAt: any, updatedAt: any, user?: { __typename?: 'UserModel', id: string, avatar?: string | null, displayName?: string | null, userName?: string | null, updatedAt?: any | null, createdAt?: any | null } | null } };

export type GetUserSystemMessagesQueryVariables = Exact<{
  publicKey: Scalars['String']['input'];
}>;


export type GetUserSystemMessagesQuery = { __typename?: 'Query', getUserSystemMessages: Array<{ __typename?: 'GetUserMessagesPayload', chatId: string, encryptedChatKey: string, messages: Array<{ __typename?: 'SystemMessageModel', authTag: string, chatId: string, content: string, createdAt: any, id: string, initialVector: string, isDeleted: boolean, isEdited: boolean, senderId: string, updatedAt: any }> }> };

export type GetVideoUploadTicketQueryVariables = Exact<{
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
}>;


export type GetVideoUploadTicketQuery = { __typename?: 'Query', getVideoUploadTicket: { __typename?: 'VideoUploadTicket', fileKey: string, uploadUrl: string, videoId: string } };

export type GetPublicVideoBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPublicVideoBySlugQuery = { __typename?: 'Query', getPublicVideoBySlug: { __typename?: 'VideoModel', access: Access, createdAt: any, description?: string | null, durationSeconds?: number | null, id: string, ownerId: string, path?: string | null, slug: string, status: Status, thumbnailUrl?: string | null, title: string, updatedAt: any, categories: Array<{ __typename?: 'VideoCategoryModel', id: string }> } };

export type SecurityNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SecurityNotificationSubscription = { __typename?: 'Subscription', securityNotification: { __typename?: 'LoginNotificationPayload', authTag: string, content: string, iv: string, messageId: string } };


export const UpdateSettingsVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSettingsVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateVideoInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSettingsVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"durationSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateSettingsVideoMutation, UpdateSettingsVideoMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const UpdateAvatarProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAvatarProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAvatarProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateAvatarProfileMutation, UpdateAvatarProfileMutationVariables>;
export const DeleteAvatarProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAvatarProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAvatarProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}]}}]} as unknown as DocumentNode<DeleteAvatarProfileMutation, DeleteAvatarProfileMutationVariables>;
export const ConfirmVideoUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmVideoUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmVideoUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmVideoUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ConfirmVideoUploadMutation, ConfirmVideoUploadMutationVariables>;
export const RefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const SendOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SendOtpMutation, SendOtpMutationVariables>;
export const VerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const CreateCategoryVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCategoryVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategoryVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"targets"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateCategoryVideoMutation, CreateCategoryVideoMutationVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const UpdateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCategoryInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"targets"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const GetAllVideosOwnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllVideosOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllVideosOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"durationSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllVideosOwnerQuery, GetAllVideosOwnerQueryVariables>;
export const GetCategoriesVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoriesVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targets"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetType"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targets"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"targets"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesVideoQuery, GetCategoriesVideoQueryVariables>;
export const GetSettingVideoBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSettingVideoBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSettingVideoBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"durationSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetSettingVideoBySlugQuery, GetSettingVideoBySlugQueryVariables>;
export const CheckAvailabilityCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckAvailabilityCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkAvailabilityCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAvailable"}}]}}]}}]} as unknown as DocumentNode<CheckAvailabilityCategoryQuery, CheckAvailabilityCategoryQueryVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"targets"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryWithTranslationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryWithTranslations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategoryWithTranslations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"targets"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoryWithTranslationsQuery, GetCategoryWithTranslationsQueryVariables>;
export const GetAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAccountQuery, GetAccountQueryVariables>;
export const GetUserSystemMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSystemMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserSystemMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","name":{"kind":"Name","value":"encryptedChatKey"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authTag"}},{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"initialVector"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isEdited"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserSystemMessagesQuery, GetUserSystemMessagesQueryVariables>;
export const GetVideoUploadTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVideoUploadTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getVideoUploadTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}}]}}]}}]} as unknown as DocumentNode<GetVideoUploadTicketQuery, GetVideoUploadTicketQueryVariables>;
export const GetPublicVideoBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublicVideoBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPublicVideoBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"durationSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetPublicVideoBySlugQuery, GetPublicVideoBySlugQueryVariables>;
export const SecurityNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SecurityNotification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"securityNotification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authTag"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"iv"}},{"kind":"Field","name":{"kind":"Name","value":"messageId"}}]}}]}}]} as unknown as DocumentNode<SecurityNotificationSubscription, SecurityNotificationSubscriptionVariables>;