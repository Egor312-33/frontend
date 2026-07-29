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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  epoch_participants?: Maybe<Epoch_ParticipantsAccess>;
  epochs?: Maybe<EpochsAccess>;
  events?: Maybe<EventsAccess>;
  media?: Maybe<MediaAccess>;
  payload_kv?: Maybe<Payload_KvAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  reviews?: Maybe<ReviewsAccess>;
  squad_members?: Maybe<Squad_MembersAccess>;
  squads?: Maybe<SquadsAccess>;
  stream_grids?: Maybe<Stream_GridsAccess>;
  streamers?: Maybe<StreamersAccess>;
  users?: Maybe<UsersAccess>;
};

export type Epoch = {
  __typename?: 'Epoch';
  coverImage?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateEnd?: Maybe<Scalars['DateTime']['output']>;
  dateStart: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['JSON']['output']>;
  events?: Maybe<Epoch_Events>;
  highlightEvent?: Maybe<Event>;
  id: Scalars['Int']['output'];
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  participants?: Maybe<Epoch_Participants>;
  slug: Scalars['String']['output'];
  squad?: Maybe<Squad>;
  summary?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EpochDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type EpochEventsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Event_Where>;
};


export type EpochParticipantsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EpochParticipant_Where>;
};

export type EpochParticipant = {
  __typename?: 'EpochParticipant';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  epoch?: Maybe<Epoch>;
  id: Scalars['Int']['output'];
  roleInEpoch: EpochParticipant_RoleInEpoch;
  streamer?: Maybe<Streamer>;
  styleStrategy?: Maybe<EpochParticipant_StyleStrategy>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum EpochParticipantUpdate_RoleInEpoch_MutationInput {
  CoreMember = 'core_member',
  ExMember = 'ex_member',
  Guest = 'guest',
  Legend = 'legend',
  Secondary = 'secondary'
}

export enum EpochParticipantUpdate_StyleStrategy_MutationInput {
  ForcePersonalStyle = 'force_personal_style',
  InheritEpoch = 'inherit_epoch'
}

export type EpochParticipant_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EpochParticipant_Epoch_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type EpochParticipant_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export enum EpochParticipant_RoleInEpoch {
  CoreMember = 'core_member',
  ExMember = 'ex_member',
  Guest = 'guest',
  Legend = 'legend',
  Secondary = 'secondary'
}

export enum EpochParticipant_RoleInEpoch_Input {
  CoreMember = 'core_member',
  ExMember = 'ex_member',
  Guest = 'guest',
  Legend = 'legend',
  Secondary = 'secondary'
}

export enum EpochParticipant_RoleInEpoch_MutationInput {
  CoreMember = 'core_member',
  ExMember = 'ex_member',
  Guest = 'guest',
  Legend = 'legend',
  Secondary = 'secondary'
}

export type EpochParticipant_RoleInEpoch_Operator = {
  all?: InputMaybe<Array<InputMaybe<EpochParticipant_RoleInEpoch_Input>>>;
  equals?: InputMaybe<EpochParticipant_RoleInEpoch_Input>;
  in?: InputMaybe<Array<InputMaybe<EpochParticipant_RoleInEpoch_Input>>>;
  not_equals?: InputMaybe<EpochParticipant_RoleInEpoch_Input>;
  not_in?: InputMaybe<Array<InputMaybe<EpochParticipant_RoleInEpoch_Input>>>;
};

export type EpochParticipant_Streamer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum EpochParticipant_StyleStrategy {
  ForcePersonalStyle = 'force_personal_style',
  InheritEpoch = 'inherit_epoch'
}

export enum EpochParticipant_StyleStrategy_Input {
  ForcePersonalStyle = 'force_personal_style',
  InheritEpoch = 'inherit_epoch'
}

export enum EpochParticipant_StyleStrategy_MutationInput {
  ForcePersonalStyle = 'force_personal_style',
  InheritEpoch = 'inherit_epoch'
}

export type EpochParticipant_StyleStrategy_Operator = {
  all?: InputMaybe<Array<InputMaybe<EpochParticipant_StyleStrategy_Input>>>;
  equals?: InputMaybe<EpochParticipant_StyleStrategy_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<EpochParticipant_StyleStrategy_Input>>>;
  not_equals?: InputMaybe<EpochParticipant_StyleStrategy_Input>;
  not_in?: InputMaybe<Array<InputMaybe<EpochParticipant_StyleStrategy_Input>>>;
};

export type EpochParticipant_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EpochParticipant_Where = {
  AND?: InputMaybe<Array<InputMaybe<EpochParticipant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<EpochParticipant_Where_Or>>>;
  createdAt?: InputMaybe<EpochParticipant_CreatedAt_Operator>;
  epoch?: InputMaybe<EpochParticipant_Epoch_Operator>;
  id?: InputMaybe<EpochParticipant_Id_Operator>;
  roleInEpoch?: InputMaybe<EpochParticipant_RoleInEpoch_Operator>;
  streamer?: InputMaybe<EpochParticipant_Streamer_Operator>;
  styleStrategy?: InputMaybe<EpochParticipant_StyleStrategy_Operator>;
  updatedAt?: InputMaybe<EpochParticipant_UpdatedAt_Operator>;
};

export type EpochParticipant_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<EpochParticipant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<EpochParticipant_Where_Or>>>;
  createdAt?: InputMaybe<EpochParticipant_CreatedAt_Operator>;
  epoch?: InputMaybe<EpochParticipant_Epoch_Operator>;
  id?: InputMaybe<EpochParticipant_Id_Operator>;
  roleInEpoch?: InputMaybe<EpochParticipant_RoleInEpoch_Operator>;
  streamer?: InputMaybe<EpochParticipant_Streamer_Operator>;
  styleStrategy?: InputMaybe<EpochParticipant_StyleStrategy_Operator>;
  updatedAt?: InputMaybe<EpochParticipant_UpdatedAt_Operator>;
};

export type EpochParticipant_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<EpochParticipant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<EpochParticipant_Where_Or>>>;
  createdAt?: InputMaybe<EpochParticipant_CreatedAt_Operator>;
  epoch?: InputMaybe<EpochParticipant_Epoch_Operator>;
  id?: InputMaybe<EpochParticipant_Id_Operator>;
  roleInEpoch?: InputMaybe<EpochParticipant_RoleInEpoch_Operator>;
  streamer?: InputMaybe<EpochParticipant_Streamer_Operator>;
  styleStrategy?: InputMaybe<EpochParticipant_StyleStrategy_Operator>;
  updatedAt?: InputMaybe<EpochParticipant_UpdatedAt_Operator>;
};

export type EpochParticipants = {
  __typename?: 'EpochParticipants';
  docs: Array<EpochParticipant>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type EpochParticipantsCreateAccess = {
  __typename?: 'EpochParticipantsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsCreateDocAccess = {
  __typename?: 'EpochParticipantsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsDeleteAccess = {
  __typename?: 'EpochParticipantsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsDeleteDocAccess = {
  __typename?: 'EpochParticipantsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsDocAccessFields = {
  __typename?: 'EpochParticipantsDocAccessFields';
  createdAt?: Maybe<EpochParticipantsDocAccessFields_CreatedAt>;
  epoch?: Maybe<EpochParticipantsDocAccessFields_Epoch>;
  roleInEpoch?: Maybe<EpochParticipantsDocAccessFields_RoleInEpoch>;
  streamer?: Maybe<EpochParticipantsDocAccessFields_Streamer>;
  styleStrategy?: Maybe<EpochParticipantsDocAccessFields_StyleStrategy>;
  updatedAt?: Maybe<EpochParticipantsDocAccessFields_UpdatedAt>;
};

export type EpochParticipantsDocAccessFields_CreatedAt = {
  __typename?: 'EpochParticipantsDocAccessFields_createdAt';
  create?: Maybe<EpochParticipantsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<EpochParticipantsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<EpochParticipantsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<EpochParticipantsDocAccessFields_CreatedAt_Update>;
};

export type EpochParticipantsDocAccessFields_CreatedAt_Create = {
  __typename?: 'EpochParticipantsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'EpochParticipantsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_CreatedAt_Read = {
  __typename?: 'EpochParticipantsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_CreatedAt_Update = {
  __typename?: 'EpochParticipantsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Epoch = {
  __typename?: 'EpochParticipantsDocAccessFields_epoch';
  create?: Maybe<EpochParticipantsDocAccessFields_Epoch_Create>;
  delete?: Maybe<EpochParticipantsDocAccessFields_Epoch_Delete>;
  read?: Maybe<EpochParticipantsDocAccessFields_Epoch_Read>;
  update?: Maybe<EpochParticipantsDocAccessFields_Epoch_Update>;
};

export type EpochParticipantsDocAccessFields_Epoch_Create = {
  __typename?: 'EpochParticipantsDocAccessFields_epoch_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Epoch_Delete = {
  __typename?: 'EpochParticipantsDocAccessFields_epoch_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Epoch_Read = {
  __typename?: 'EpochParticipantsDocAccessFields_epoch_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Epoch_Update = {
  __typename?: 'EpochParticipantsDocAccessFields_epoch_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_RoleInEpoch = {
  __typename?: 'EpochParticipantsDocAccessFields_roleInEpoch';
  create?: Maybe<EpochParticipantsDocAccessFields_RoleInEpoch_Create>;
  delete?: Maybe<EpochParticipantsDocAccessFields_RoleInEpoch_Delete>;
  read?: Maybe<EpochParticipantsDocAccessFields_RoleInEpoch_Read>;
  update?: Maybe<EpochParticipantsDocAccessFields_RoleInEpoch_Update>;
};

export type EpochParticipantsDocAccessFields_RoleInEpoch_Create = {
  __typename?: 'EpochParticipantsDocAccessFields_roleInEpoch_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_RoleInEpoch_Delete = {
  __typename?: 'EpochParticipantsDocAccessFields_roleInEpoch_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_RoleInEpoch_Read = {
  __typename?: 'EpochParticipantsDocAccessFields_roleInEpoch_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_RoleInEpoch_Update = {
  __typename?: 'EpochParticipantsDocAccessFields_roleInEpoch_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Streamer = {
  __typename?: 'EpochParticipantsDocAccessFields_streamer';
  create?: Maybe<EpochParticipantsDocAccessFields_Streamer_Create>;
  delete?: Maybe<EpochParticipantsDocAccessFields_Streamer_Delete>;
  read?: Maybe<EpochParticipantsDocAccessFields_Streamer_Read>;
  update?: Maybe<EpochParticipantsDocAccessFields_Streamer_Update>;
};

export type EpochParticipantsDocAccessFields_Streamer_Create = {
  __typename?: 'EpochParticipantsDocAccessFields_streamer_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Streamer_Delete = {
  __typename?: 'EpochParticipantsDocAccessFields_streamer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Streamer_Read = {
  __typename?: 'EpochParticipantsDocAccessFields_streamer_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_Streamer_Update = {
  __typename?: 'EpochParticipantsDocAccessFields_streamer_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_StyleStrategy = {
  __typename?: 'EpochParticipantsDocAccessFields_styleStrategy';
  create?: Maybe<EpochParticipantsDocAccessFields_StyleStrategy_Create>;
  delete?: Maybe<EpochParticipantsDocAccessFields_StyleStrategy_Delete>;
  read?: Maybe<EpochParticipantsDocAccessFields_StyleStrategy_Read>;
  update?: Maybe<EpochParticipantsDocAccessFields_StyleStrategy_Update>;
};

export type EpochParticipantsDocAccessFields_StyleStrategy_Create = {
  __typename?: 'EpochParticipantsDocAccessFields_styleStrategy_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_StyleStrategy_Delete = {
  __typename?: 'EpochParticipantsDocAccessFields_styleStrategy_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_StyleStrategy_Read = {
  __typename?: 'EpochParticipantsDocAccessFields_styleStrategy_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_StyleStrategy_Update = {
  __typename?: 'EpochParticipantsDocAccessFields_styleStrategy_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_UpdatedAt = {
  __typename?: 'EpochParticipantsDocAccessFields_updatedAt';
  create?: Maybe<EpochParticipantsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<EpochParticipantsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<EpochParticipantsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<EpochParticipantsDocAccessFields_UpdatedAt_Update>;
};

export type EpochParticipantsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'EpochParticipantsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'EpochParticipantsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'EpochParticipantsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'EpochParticipantsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields = {
  __typename?: 'EpochParticipantsFields';
  createdAt?: Maybe<EpochParticipantsFields_CreatedAt>;
  epoch?: Maybe<EpochParticipantsFields_Epoch>;
  roleInEpoch?: Maybe<EpochParticipantsFields_RoleInEpoch>;
  streamer?: Maybe<EpochParticipantsFields_Streamer>;
  styleStrategy?: Maybe<EpochParticipantsFields_StyleStrategy>;
  updatedAt?: Maybe<EpochParticipantsFields_UpdatedAt>;
};

export type EpochParticipantsFields_CreatedAt = {
  __typename?: 'EpochParticipantsFields_createdAt';
  create?: Maybe<EpochParticipantsFields_CreatedAt_Create>;
  delete?: Maybe<EpochParticipantsFields_CreatedAt_Delete>;
  read?: Maybe<EpochParticipantsFields_CreatedAt_Read>;
  update?: Maybe<EpochParticipantsFields_CreatedAt_Update>;
};

export type EpochParticipantsFields_CreatedAt_Create = {
  __typename?: 'EpochParticipantsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_CreatedAt_Delete = {
  __typename?: 'EpochParticipantsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_CreatedAt_Read = {
  __typename?: 'EpochParticipantsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_CreatedAt_Update = {
  __typename?: 'EpochParticipantsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Epoch = {
  __typename?: 'EpochParticipantsFields_epoch';
  create?: Maybe<EpochParticipantsFields_Epoch_Create>;
  delete?: Maybe<EpochParticipantsFields_Epoch_Delete>;
  read?: Maybe<EpochParticipantsFields_Epoch_Read>;
  update?: Maybe<EpochParticipantsFields_Epoch_Update>;
};

export type EpochParticipantsFields_Epoch_Create = {
  __typename?: 'EpochParticipantsFields_epoch_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Epoch_Delete = {
  __typename?: 'EpochParticipantsFields_epoch_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Epoch_Read = {
  __typename?: 'EpochParticipantsFields_epoch_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Epoch_Update = {
  __typename?: 'EpochParticipantsFields_epoch_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_RoleInEpoch = {
  __typename?: 'EpochParticipantsFields_roleInEpoch';
  create?: Maybe<EpochParticipantsFields_RoleInEpoch_Create>;
  delete?: Maybe<EpochParticipantsFields_RoleInEpoch_Delete>;
  read?: Maybe<EpochParticipantsFields_RoleInEpoch_Read>;
  update?: Maybe<EpochParticipantsFields_RoleInEpoch_Update>;
};

export type EpochParticipantsFields_RoleInEpoch_Create = {
  __typename?: 'EpochParticipantsFields_roleInEpoch_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_RoleInEpoch_Delete = {
  __typename?: 'EpochParticipantsFields_roleInEpoch_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_RoleInEpoch_Read = {
  __typename?: 'EpochParticipantsFields_roleInEpoch_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_RoleInEpoch_Update = {
  __typename?: 'EpochParticipantsFields_roleInEpoch_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Streamer = {
  __typename?: 'EpochParticipantsFields_streamer';
  create?: Maybe<EpochParticipantsFields_Streamer_Create>;
  delete?: Maybe<EpochParticipantsFields_Streamer_Delete>;
  read?: Maybe<EpochParticipantsFields_Streamer_Read>;
  update?: Maybe<EpochParticipantsFields_Streamer_Update>;
};

export type EpochParticipantsFields_Streamer_Create = {
  __typename?: 'EpochParticipantsFields_streamer_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Streamer_Delete = {
  __typename?: 'EpochParticipantsFields_streamer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Streamer_Read = {
  __typename?: 'EpochParticipantsFields_streamer_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_Streamer_Update = {
  __typename?: 'EpochParticipantsFields_streamer_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_StyleStrategy = {
  __typename?: 'EpochParticipantsFields_styleStrategy';
  create?: Maybe<EpochParticipantsFields_StyleStrategy_Create>;
  delete?: Maybe<EpochParticipantsFields_StyleStrategy_Delete>;
  read?: Maybe<EpochParticipantsFields_StyleStrategy_Read>;
  update?: Maybe<EpochParticipantsFields_StyleStrategy_Update>;
};

export type EpochParticipantsFields_StyleStrategy_Create = {
  __typename?: 'EpochParticipantsFields_styleStrategy_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_StyleStrategy_Delete = {
  __typename?: 'EpochParticipantsFields_styleStrategy_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_StyleStrategy_Read = {
  __typename?: 'EpochParticipantsFields_styleStrategy_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_StyleStrategy_Update = {
  __typename?: 'EpochParticipantsFields_styleStrategy_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_UpdatedAt = {
  __typename?: 'EpochParticipantsFields_updatedAt';
  create?: Maybe<EpochParticipantsFields_UpdatedAt_Create>;
  delete?: Maybe<EpochParticipantsFields_UpdatedAt_Delete>;
  read?: Maybe<EpochParticipantsFields_UpdatedAt_Read>;
  update?: Maybe<EpochParticipantsFields_UpdatedAt_Update>;
};

export type EpochParticipantsFields_UpdatedAt_Create = {
  __typename?: 'EpochParticipantsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_UpdatedAt_Delete = {
  __typename?: 'EpochParticipantsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_UpdatedAt_Read = {
  __typename?: 'EpochParticipantsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsFields_UpdatedAt_Update = {
  __typename?: 'EpochParticipantsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochParticipantsReadAccess = {
  __typename?: 'EpochParticipantsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsReadDocAccess = {
  __typename?: 'EpochParticipantsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsUpdateAccess = {
  __typename?: 'EpochParticipantsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochParticipantsUpdateDocAccess = {
  __typename?: 'EpochParticipantsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Epoch_Events = {
  __typename?: 'Epoch_Events';
  docs: Array<Event>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Epoch_Participants = {
  __typename?: 'Epoch_Participants';
  docs: Array<EpochParticipant>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Epoch_CoverImage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Epoch_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Epoch_DateEnd_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Epoch_DateStart_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Epoch_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Epoch_HighlightEvent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Epoch_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Epoch_IsFeatured_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Epoch_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Epoch_Squad_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Epoch_Summary_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Epoch_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Epoch_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Epoch_Where = {
  AND?: InputMaybe<Array<InputMaybe<Epoch_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Epoch_Where_Or>>>;
  coverImage?: InputMaybe<Epoch_CoverImage_Operator>;
  createdAt?: InputMaybe<Epoch_CreatedAt_Operator>;
  dateEnd?: InputMaybe<Epoch_DateEnd_Operator>;
  dateStart?: InputMaybe<Epoch_DateStart_Operator>;
  description?: InputMaybe<Epoch_Description_Operator>;
  highlightEvent?: InputMaybe<Epoch_HighlightEvent_Operator>;
  id?: InputMaybe<Epoch_Id_Operator>;
  isFeatured?: InputMaybe<Epoch_IsFeatured_Operator>;
  slug?: InputMaybe<Epoch_Slug_Operator>;
  squad?: InputMaybe<Epoch_Squad_Operator>;
  summary?: InputMaybe<Epoch_Summary_Operator>;
  title?: InputMaybe<Epoch_Title_Operator>;
  updatedAt?: InputMaybe<Epoch_UpdatedAt_Operator>;
};

export type Epoch_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Epoch_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Epoch_Where_Or>>>;
  coverImage?: InputMaybe<Epoch_CoverImage_Operator>;
  createdAt?: InputMaybe<Epoch_CreatedAt_Operator>;
  dateEnd?: InputMaybe<Epoch_DateEnd_Operator>;
  dateStart?: InputMaybe<Epoch_DateStart_Operator>;
  description?: InputMaybe<Epoch_Description_Operator>;
  highlightEvent?: InputMaybe<Epoch_HighlightEvent_Operator>;
  id?: InputMaybe<Epoch_Id_Operator>;
  isFeatured?: InputMaybe<Epoch_IsFeatured_Operator>;
  slug?: InputMaybe<Epoch_Slug_Operator>;
  squad?: InputMaybe<Epoch_Squad_Operator>;
  summary?: InputMaybe<Epoch_Summary_Operator>;
  title?: InputMaybe<Epoch_Title_Operator>;
  updatedAt?: InputMaybe<Epoch_UpdatedAt_Operator>;
};

export type Epoch_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Epoch_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Epoch_Where_Or>>>;
  coverImage?: InputMaybe<Epoch_CoverImage_Operator>;
  createdAt?: InputMaybe<Epoch_CreatedAt_Operator>;
  dateEnd?: InputMaybe<Epoch_DateEnd_Operator>;
  dateStart?: InputMaybe<Epoch_DateStart_Operator>;
  description?: InputMaybe<Epoch_Description_Operator>;
  highlightEvent?: InputMaybe<Epoch_HighlightEvent_Operator>;
  id?: InputMaybe<Epoch_Id_Operator>;
  isFeatured?: InputMaybe<Epoch_IsFeatured_Operator>;
  slug?: InputMaybe<Epoch_Slug_Operator>;
  squad?: InputMaybe<Epoch_Squad_Operator>;
  summary?: InputMaybe<Epoch_Summary_Operator>;
  title?: InputMaybe<Epoch_Title_Operator>;
  updatedAt?: InputMaybe<Epoch_UpdatedAt_Operator>;
};

export type Epochs = {
  __typename?: 'Epochs';
  docs: Array<Epoch>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type EpochsCreateAccess = {
  __typename?: 'EpochsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsCreateDocAccess = {
  __typename?: 'EpochsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsDeleteAccess = {
  __typename?: 'EpochsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsDeleteDocAccess = {
  __typename?: 'EpochsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsDocAccessFields = {
  __typename?: 'EpochsDocAccessFields';
  coverImage?: Maybe<EpochsDocAccessFields_CoverImage>;
  createdAt?: Maybe<EpochsDocAccessFields_CreatedAt>;
  dateEnd?: Maybe<EpochsDocAccessFields_DateEnd>;
  dateStart?: Maybe<EpochsDocAccessFields_DateStart>;
  description?: Maybe<EpochsDocAccessFields_Description>;
  events?: Maybe<EpochsDocAccessFields_Events>;
  highlightEvent?: Maybe<EpochsDocAccessFields_HighlightEvent>;
  isFeatured?: Maybe<EpochsDocAccessFields_IsFeatured>;
  participants?: Maybe<EpochsDocAccessFields_Participants>;
  slug?: Maybe<EpochsDocAccessFields_Slug>;
  squad?: Maybe<EpochsDocAccessFields_Squad>;
  summary?: Maybe<EpochsDocAccessFields_Summary>;
  title?: Maybe<EpochsDocAccessFields_Title>;
  updatedAt?: Maybe<EpochsDocAccessFields_UpdatedAt>;
};

export type EpochsDocAccessFields_CoverImage = {
  __typename?: 'EpochsDocAccessFields_coverImage';
  create?: Maybe<EpochsDocAccessFields_CoverImage_Create>;
  delete?: Maybe<EpochsDocAccessFields_CoverImage_Delete>;
  read?: Maybe<EpochsDocAccessFields_CoverImage_Read>;
  update?: Maybe<EpochsDocAccessFields_CoverImage_Update>;
};

export type EpochsDocAccessFields_CoverImage_Create = {
  __typename?: 'EpochsDocAccessFields_coverImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CoverImage_Delete = {
  __typename?: 'EpochsDocAccessFields_coverImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CoverImage_Read = {
  __typename?: 'EpochsDocAccessFields_coverImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CoverImage_Update = {
  __typename?: 'EpochsDocAccessFields_coverImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CreatedAt = {
  __typename?: 'EpochsDocAccessFields_createdAt';
  create?: Maybe<EpochsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<EpochsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<EpochsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<EpochsDocAccessFields_CreatedAt_Update>;
};

export type EpochsDocAccessFields_CreatedAt_Create = {
  __typename?: 'EpochsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'EpochsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CreatedAt_Read = {
  __typename?: 'EpochsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_CreatedAt_Update = {
  __typename?: 'EpochsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateEnd = {
  __typename?: 'EpochsDocAccessFields_dateEnd';
  create?: Maybe<EpochsDocAccessFields_DateEnd_Create>;
  delete?: Maybe<EpochsDocAccessFields_DateEnd_Delete>;
  read?: Maybe<EpochsDocAccessFields_DateEnd_Read>;
  update?: Maybe<EpochsDocAccessFields_DateEnd_Update>;
};

export type EpochsDocAccessFields_DateEnd_Create = {
  __typename?: 'EpochsDocAccessFields_dateEnd_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateEnd_Delete = {
  __typename?: 'EpochsDocAccessFields_dateEnd_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateEnd_Read = {
  __typename?: 'EpochsDocAccessFields_dateEnd_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateEnd_Update = {
  __typename?: 'EpochsDocAccessFields_dateEnd_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateStart = {
  __typename?: 'EpochsDocAccessFields_dateStart';
  create?: Maybe<EpochsDocAccessFields_DateStart_Create>;
  delete?: Maybe<EpochsDocAccessFields_DateStart_Delete>;
  read?: Maybe<EpochsDocAccessFields_DateStart_Read>;
  update?: Maybe<EpochsDocAccessFields_DateStart_Update>;
};

export type EpochsDocAccessFields_DateStart_Create = {
  __typename?: 'EpochsDocAccessFields_dateStart_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateStart_Delete = {
  __typename?: 'EpochsDocAccessFields_dateStart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateStart_Read = {
  __typename?: 'EpochsDocAccessFields_dateStart_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_DateStart_Update = {
  __typename?: 'EpochsDocAccessFields_dateStart_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Description = {
  __typename?: 'EpochsDocAccessFields_description';
  create?: Maybe<EpochsDocAccessFields_Description_Create>;
  delete?: Maybe<EpochsDocAccessFields_Description_Delete>;
  read?: Maybe<EpochsDocAccessFields_Description_Read>;
  update?: Maybe<EpochsDocAccessFields_Description_Update>;
};

export type EpochsDocAccessFields_Description_Create = {
  __typename?: 'EpochsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Description_Delete = {
  __typename?: 'EpochsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Description_Read = {
  __typename?: 'EpochsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Description_Update = {
  __typename?: 'EpochsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Events = {
  __typename?: 'EpochsDocAccessFields_events';
  create?: Maybe<EpochsDocAccessFields_Events_Create>;
  delete?: Maybe<EpochsDocAccessFields_Events_Delete>;
  read?: Maybe<EpochsDocAccessFields_Events_Read>;
  update?: Maybe<EpochsDocAccessFields_Events_Update>;
};

export type EpochsDocAccessFields_Events_Create = {
  __typename?: 'EpochsDocAccessFields_events_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Events_Delete = {
  __typename?: 'EpochsDocAccessFields_events_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Events_Read = {
  __typename?: 'EpochsDocAccessFields_events_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Events_Update = {
  __typename?: 'EpochsDocAccessFields_events_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_HighlightEvent = {
  __typename?: 'EpochsDocAccessFields_highlightEvent';
  create?: Maybe<EpochsDocAccessFields_HighlightEvent_Create>;
  delete?: Maybe<EpochsDocAccessFields_HighlightEvent_Delete>;
  read?: Maybe<EpochsDocAccessFields_HighlightEvent_Read>;
  update?: Maybe<EpochsDocAccessFields_HighlightEvent_Update>;
};

export type EpochsDocAccessFields_HighlightEvent_Create = {
  __typename?: 'EpochsDocAccessFields_highlightEvent_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_HighlightEvent_Delete = {
  __typename?: 'EpochsDocAccessFields_highlightEvent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_HighlightEvent_Read = {
  __typename?: 'EpochsDocAccessFields_highlightEvent_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_HighlightEvent_Update = {
  __typename?: 'EpochsDocAccessFields_highlightEvent_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_IsFeatured = {
  __typename?: 'EpochsDocAccessFields_isFeatured';
  create?: Maybe<EpochsDocAccessFields_IsFeatured_Create>;
  delete?: Maybe<EpochsDocAccessFields_IsFeatured_Delete>;
  read?: Maybe<EpochsDocAccessFields_IsFeatured_Read>;
  update?: Maybe<EpochsDocAccessFields_IsFeatured_Update>;
};

export type EpochsDocAccessFields_IsFeatured_Create = {
  __typename?: 'EpochsDocAccessFields_isFeatured_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_IsFeatured_Delete = {
  __typename?: 'EpochsDocAccessFields_isFeatured_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_IsFeatured_Read = {
  __typename?: 'EpochsDocAccessFields_isFeatured_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_IsFeatured_Update = {
  __typename?: 'EpochsDocAccessFields_isFeatured_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Participants = {
  __typename?: 'EpochsDocAccessFields_participants';
  create?: Maybe<EpochsDocAccessFields_Participants_Create>;
  delete?: Maybe<EpochsDocAccessFields_Participants_Delete>;
  read?: Maybe<EpochsDocAccessFields_Participants_Read>;
  update?: Maybe<EpochsDocAccessFields_Participants_Update>;
};

export type EpochsDocAccessFields_Participants_Create = {
  __typename?: 'EpochsDocAccessFields_participants_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Participants_Delete = {
  __typename?: 'EpochsDocAccessFields_participants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Participants_Read = {
  __typename?: 'EpochsDocAccessFields_participants_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Participants_Update = {
  __typename?: 'EpochsDocAccessFields_participants_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Slug = {
  __typename?: 'EpochsDocAccessFields_slug';
  create?: Maybe<EpochsDocAccessFields_Slug_Create>;
  delete?: Maybe<EpochsDocAccessFields_Slug_Delete>;
  read?: Maybe<EpochsDocAccessFields_Slug_Read>;
  update?: Maybe<EpochsDocAccessFields_Slug_Update>;
};

export type EpochsDocAccessFields_Slug_Create = {
  __typename?: 'EpochsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Slug_Delete = {
  __typename?: 'EpochsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Slug_Read = {
  __typename?: 'EpochsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Slug_Update = {
  __typename?: 'EpochsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Squad = {
  __typename?: 'EpochsDocAccessFields_squad';
  create?: Maybe<EpochsDocAccessFields_Squad_Create>;
  delete?: Maybe<EpochsDocAccessFields_Squad_Delete>;
  read?: Maybe<EpochsDocAccessFields_Squad_Read>;
  update?: Maybe<EpochsDocAccessFields_Squad_Update>;
};

export type EpochsDocAccessFields_Squad_Create = {
  __typename?: 'EpochsDocAccessFields_squad_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Squad_Delete = {
  __typename?: 'EpochsDocAccessFields_squad_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Squad_Read = {
  __typename?: 'EpochsDocAccessFields_squad_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Squad_Update = {
  __typename?: 'EpochsDocAccessFields_squad_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Summary = {
  __typename?: 'EpochsDocAccessFields_summary';
  create?: Maybe<EpochsDocAccessFields_Summary_Create>;
  delete?: Maybe<EpochsDocAccessFields_Summary_Delete>;
  read?: Maybe<EpochsDocAccessFields_Summary_Read>;
  update?: Maybe<EpochsDocAccessFields_Summary_Update>;
};

export type EpochsDocAccessFields_Summary_Create = {
  __typename?: 'EpochsDocAccessFields_summary_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Summary_Delete = {
  __typename?: 'EpochsDocAccessFields_summary_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Summary_Read = {
  __typename?: 'EpochsDocAccessFields_summary_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Summary_Update = {
  __typename?: 'EpochsDocAccessFields_summary_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Title = {
  __typename?: 'EpochsDocAccessFields_title';
  create?: Maybe<EpochsDocAccessFields_Title_Create>;
  delete?: Maybe<EpochsDocAccessFields_Title_Delete>;
  read?: Maybe<EpochsDocAccessFields_Title_Read>;
  update?: Maybe<EpochsDocAccessFields_Title_Update>;
};

export type EpochsDocAccessFields_Title_Create = {
  __typename?: 'EpochsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Title_Delete = {
  __typename?: 'EpochsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Title_Read = {
  __typename?: 'EpochsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_Title_Update = {
  __typename?: 'EpochsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_UpdatedAt = {
  __typename?: 'EpochsDocAccessFields_updatedAt';
  create?: Maybe<EpochsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<EpochsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<EpochsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<EpochsDocAccessFields_UpdatedAt_Update>;
};

export type EpochsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'EpochsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'EpochsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'EpochsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'EpochsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields = {
  __typename?: 'EpochsFields';
  coverImage?: Maybe<EpochsFields_CoverImage>;
  createdAt?: Maybe<EpochsFields_CreatedAt>;
  dateEnd?: Maybe<EpochsFields_DateEnd>;
  dateStart?: Maybe<EpochsFields_DateStart>;
  description?: Maybe<EpochsFields_Description>;
  events?: Maybe<EpochsFields_Events>;
  highlightEvent?: Maybe<EpochsFields_HighlightEvent>;
  isFeatured?: Maybe<EpochsFields_IsFeatured>;
  participants?: Maybe<EpochsFields_Participants>;
  slug?: Maybe<EpochsFields_Slug>;
  squad?: Maybe<EpochsFields_Squad>;
  summary?: Maybe<EpochsFields_Summary>;
  title?: Maybe<EpochsFields_Title>;
  updatedAt?: Maybe<EpochsFields_UpdatedAt>;
};

export type EpochsFields_CoverImage = {
  __typename?: 'EpochsFields_coverImage';
  create?: Maybe<EpochsFields_CoverImage_Create>;
  delete?: Maybe<EpochsFields_CoverImage_Delete>;
  read?: Maybe<EpochsFields_CoverImage_Read>;
  update?: Maybe<EpochsFields_CoverImage_Update>;
};

export type EpochsFields_CoverImage_Create = {
  __typename?: 'EpochsFields_coverImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CoverImage_Delete = {
  __typename?: 'EpochsFields_coverImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CoverImage_Read = {
  __typename?: 'EpochsFields_coverImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CoverImage_Update = {
  __typename?: 'EpochsFields_coverImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CreatedAt = {
  __typename?: 'EpochsFields_createdAt';
  create?: Maybe<EpochsFields_CreatedAt_Create>;
  delete?: Maybe<EpochsFields_CreatedAt_Delete>;
  read?: Maybe<EpochsFields_CreatedAt_Read>;
  update?: Maybe<EpochsFields_CreatedAt_Update>;
};

export type EpochsFields_CreatedAt_Create = {
  __typename?: 'EpochsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CreatedAt_Delete = {
  __typename?: 'EpochsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CreatedAt_Read = {
  __typename?: 'EpochsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_CreatedAt_Update = {
  __typename?: 'EpochsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateEnd = {
  __typename?: 'EpochsFields_dateEnd';
  create?: Maybe<EpochsFields_DateEnd_Create>;
  delete?: Maybe<EpochsFields_DateEnd_Delete>;
  read?: Maybe<EpochsFields_DateEnd_Read>;
  update?: Maybe<EpochsFields_DateEnd_Update>;
};

export type EpochsFields_DateEnd_Create = {
  __typename?: 'EpochsFields_dateEnd_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateEnd_Delete = {
  __typename?: 'EpochsFields_dateEnd_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateEnd_Read = {
  __typename?: 'EpochsFields_dateEnd_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateEnd_Update = {
  __typename?: 'EpochsFields_dateEnd_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateStart = {
  __typename?: 'EpochsFields_dateStart';
  create?: Maybe<EpochsFields_DateStart_Create>;
  delete?: Maybe<EpochsFields_DateStart_Delete>;
  read?: Maybe<EpochsFields_DateStart_Read>;
  update?: Maybe<EpochsFields_DateStart_Update>;
};

export type EpochsFields_DateStart_Create = {
  __typename?: 'EpochsFields_dateStart_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateStart_Delete = {
  __typename?: 'EpochsFields_dateStart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateStart_Read = {
  __typename?: 'EpochsFields_dateStart_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_DateStart_Update = {
  __typename?: 'EpochsFields_dateStart_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Description = {
  __typename?: 'EpochsFields_description';
  create?: Maybe<EpochsFields_Description_Create>;
  delete?: Maybe<EpochsFields_Description_Delete>;
  read?: Maybe<EpochsFields_Description_Read>;
  update?: Maybe<EpochsFields_Description_Update>;
};

export type EpochsFields_Description_Create = {
  __typename?: 'EpochsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Description_Delete = {
  __typename?: 'EpochsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Description_Read = {
  __typename?: 'EpochsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Description_Update = {
  __typename?: 'EpochsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Events = {
  __typename?: 'EpochsFields_events';
  create?: Maybe<EpochsFields_Events_Create>;
  delete?: Maybe<EpochsFields_Events_Delete>;
  read?: Maybe<EpochsFields_Events_Read>;
  update?: Maybe<EpochsFields_Events_Update>;
};

export type EpochsFields_Events_Create = {
  __typename?: 'EpochsFields_events_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Events_Delete = {
  __typename?: 'EpochsFields_events_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Events_Read = {
  __typename?: 'EpochsFields_events_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Events_Update = {
  __typename?: 'EpochsFields_events_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_HighlightEvent = {
  __typename?: 'EpochsFields_highlightEvent';
  create?: Maybe<EpochsFields_HighlightEvent_Create>;
  delete?: Maybe<EpochsFields_HighlightEvent_Delete>;
  read?: Maybe<EpochsFields_HighlightEvent_Read>;
  update?: Maybe<EpochsFields_HighlightEvent_Update>;
};

export type EpochsFields_HighlightEvent_Create = {
  __typename?: 'EpochsFields_highlightEvent_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_HighlightEvent_Delete = {
  __typename?: 'EpochsFields_highlightEvent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_HighlightEvent_Read = {
  __typename?: 'EpochsFields_highlightEvent_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_HighlightEvent_Update = {
  __typename?: 'EpochsFields_highlightEvent_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_IsFeatured = {
  __typename?: 'EpochsFields_isFeatured';
  create?: Maybe<EpochsFields_IsFeatured_Create>;
  delete?: Maybe<EpochsFields_IsFeatured_Delete>;
  read?: Maybe<EpochsFields_IsFeatured_Read>;
  update?: Maybe<EpochsFields_IsFeatured_Update>;
};

export type EpochsFields_IsFeatured_Create = {
  __typename?: 'EpochsFields_isFeatured_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_IsFeatured_Delete = {
  __typename?: 'EpochsFields_isFeatured_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_IsFeatured_Read = {
  __typename?: 'EpochsFields_isFeatured_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_IsFeatured_Update = {
  __typename?: 'EpochsFields_isFeatured_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Participants = {
  __typename?: 'EpochsFields_participants';
  create?: Maybe<EpochsFields_Participants_Create>;
  delete?: Maybe<EpochsFields_Participants_Delete>;
  read?: Maybe<EpochsFields_Participants_Read>;
  update?: Maybe<EpochsFields_Participants_Update>;
};

export type EpochsFields_Participants_Create = {
  __typename?: 'EpochsFields_participants_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Participants_Delete = {
  __typename?: 'EpochsFields_participants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Participants_Read = {
  __typename?: 'EpochsFields_participants_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Participants_Update = {
  __typename?: 'EpochsFields_participants_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Slug = {
  __typename?: 'EpochsFields_slug';
  create?: Maybe<EpochsFields_Slug_Create>;
  delete?: Maybe<EpochsFields_Slug_Delete>;
  read?: Maybe<EpochsFields_Slug_Read>;
  update?: Maybe<EpochsFields_Slug_Update>;
};

export type EpochsFields_Slug_Create = {
  __typename?: 'EpochsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Slug_Delete = {
  __typename?: 'EpochsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Slug_Read = {
  __typename?: 'EpochsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Slug_Update = {
  __typename?: 'EpochsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Squad = {
  __typename?: 'EpochsFields_squad';
  create?: Maybe<EpochsFields_Squad_Create>;
  delete?: Maybe<EpochsFields_Squad_Delete>;
  read?: Maybe<EpochsFields_Squad_Read>;
  update?: Maybe<EpochsFields_Squad_Update>;
};

export type EpochsFields_Squad_Create = {
  __typename?: 'EpochsFields_squad_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Squad_Delete = {
  __typename?: 'EpochsFields_squad_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Squad_Read = {
  __typename?: 'EpochsFields_squad_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Squad_Update = {
  __typename?: 'EpochsFields_squad_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Summary = {
  __typename?: 'EpochsFields_summary';
  create?: Maybe<EpochsFields_Summary_Create>;
  delete?: Maybe<EpochsFields_Summary_Delete>;
  read?: Maybe<EpochsFields_Summary_Read>;
  update?: Maybe<EpochsFields_Summary_Update>;
};

export type EpochsFields_Summary_Create = {
  __typename?: 'EpochsFields_summary_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Summary_Delete = {
  __typename?: 'EpochsFields_summary_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Summary_Read = {
  __typename?: 'EpochsFields_summary_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Summary_Update = {
  __typename?: 'EpochsFields_summary_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Title = {
  __typename?: 'EpochsFields_title';
  create?: Maybe<EpochsFields_Title_Create>;
  delete?: Maybe<EpochsFields_Title_Delete>;
  read?: Maybe<EpochsFields_Title_Read>;
  update?: Maybe<EpochsFields_Title_Update>;
};

export type EpochsFields_Title_Create = {
  __typename?: 'EpochsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Title_Delete = {
  __typename?: 'EpochsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Title_Read = {
  __typename?: 'EpochsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_Title_Update = {
  __typename?: 'EpochsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_UpdatedAt = {
  __typename?: 'EpochsFields_updatedAt';
  create?: Maybe<EpochsFields_UpdatedAt_Create>;
  delete?: Maybe<EpochsFields_UpdatedAt_Delete>;
  read?: Maybe<EpochsFields_UpdatedAt_Read>;
  update?: Maybe<EpochsFields_UpdatedAt_Update>;
};

export type EpochsFields_UpdatedAt_Create = {
  __typename?: 'EpochsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_UpdatedAt_Delete = {
  __typename?: 'EpochsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_UpdatedAt_Read = {
  __typename?: 'EpochsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EpochsFields_UpdatedAt_Update = {
  __typename?: 'EpochsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EpochsReadAccess = {
  __typename?: 'EpochsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsReadDocAccess = {
  __typename?: 'EpochsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsUpdateAccess = {
  __typename?: 'EpochsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EpochsUpdateDocAccess = {
  __typename?: 'EpochsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Event = {
  __typename?: 'Event';
  contentBlocks?: Maybe<Array<Event_ContentBlocks>>;
  coverImage?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  epoch?: Maybe<Epoch>;
  grid?: Maybe<StreamGrid>;
  id: Scalars['Int']['output'];
  streamersPresent?: Maybe<Array<Streamer>>;
  title: Scalars['String']['output'];
  type: Event_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoSlug?: Maybe<Scalars['String']['output']>;
};

export type EventQuote = {
  __typename?: 'EventQuote';
  author?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

export type EventReport = {
  __typename?: 'EventReport';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  htmlReport?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type EventReportHtmlReportArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type EventSmc = {
  __typename?: 'EventSMC';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  videoId?: Maybe<Scalars['String']['output']>;
  videoSlug: Scalars['String']['output'];
  videoTitle?: Maybe<Scalars['String']['output']>;
};

export enum EventUpdate_Type_MutationInput {
  Announcement = 'announcement',
  Collab = 'collab',
  Stream = 'stream',
  Tournament = 'tournament',
  Trip = 'trip'
}

export type EventYoutube = {
  __typename?: 'EventYoutube';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Event_ContentBlocks = EventQuote | EventReport | EventSmc | EventYoutube;

export type Event_CoverImage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Event_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Event_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Event_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Event_Epoch_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Event_Grid_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Event_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Event_StreamersPresent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Event_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Event_Type {
  Announcement = 'announcement',
  Collab = 'collab',
  Stream = 'stream',
  Tournament = 'tournament',
  Trip = 'trip'
}

export enum Event_Type_Input {
  Announcement = 'announcement',
  Collab = 'collab',
  Stream = 'stream',
  Tournament = 'tournament',
  Trip = 'trip'
}

export enum Event_Type_MutationInput {
  Announcement = 'announcement',
  Collab = 'collab',
  Stream = 'stream',
  Tournament = 'tournament',
  Trip = 'trip'
}

export type Event_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Event_Type_Input>>>;
  equals?: InputMaybe<Event_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Event_Type_Input>>>;
  not_equals?: InputMaybe<Event_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Event_Type_Input>>>;
};

export type Event_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Event_VideoSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Event_Where = {
  AND?: InputMaybe<Array<InputMaybe<Event_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Event_Where_Or>>>;
  coverImage?: InputMaybe<Event_CoverImage_Operator>;
  createdAt?: InputMaybe<Event_CreatedAt_Operator>;
  date?: InputMaybe<Event_Date_Operator>;
  description?: InputMaybe<Event_Description_Operator>;
  epoch?: InputMaybe<Event_Epoch_Operator>;
  grid?: InputMaybe<Event_Grid_Operator>;
  id?: InputMaybe<Event_Id_Operator>;
  streamersPresent?: InputMaybe<Event_StreamersPresent_Operator>;
  title?: InputMaybe<Event_Title_Operator>;
  type?: InputMaybe<Event_Type_Operator>;
  updatedAt?: InputMaybe<Event_UpdatedAt_Operator>;
  videoSlug?: InputMaybe<Event_VideoSlug_Operator>;
};

export type Event_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Event_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Event_Where_Or>>>;
  coverImage?: InputMaybe<Event_CoverImage_Operator>;
  createdAt?: InputMaybe<Event_CreatedAt_Operator>;
  date?: InputMaybe<Event_Date_Operator>;
  description?: InputMaybe<Event_Description_Operator>;
  epoch?: InputMaybe<Event_Epoch_Operator>;
  grid?: InputMaybe<Event_Grid_Operator>;
  id?: InputMaybe<Event_Id_Operator>;
  streamersPresent?: InputMaybe<Event_StreamersPresent_Operator>;
  title?: InputMaybe<Event_Title_Operator>;
  type?: InputMaybe<Event_Type_Operator>;
  updatedAt?: InputMaybe<Event_UpdatedAt_Operator>;
  videoSlug?: InputMaybe<Event_VideoSlug_Operator>;
};

export type Event_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Event_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Event_Where_Or>>>;
  coverImage?: InputMaybe<Event_CoverImage_Operator>;
  createdAt?: InputMaybe<Event_CreatedAt_Operator>;
  date?: InputMaybe<Event_Date_Operator>;
  description?: InputMaybe<Event_Description_Operator>;
  epoch?: InputMaybe<Event_Epoch_Operator>;
  grid?: InputMaybe<Event_Grid_Operator>;
  id?: InputMaybe<Event_Id_Operator>;
  streamersPresent?: InputMaybe<Event_StreamersPresent_Operator>;
  title?: InputMaybe<Event_Title_Operator>;
  type?: InputMaybe<Event_Type_Operator>;
  updatedAt?: InputMaybe<Event_UpdatedAt_Operator>;
  videoSlug?: InputMaybe<Event_VideoSlug_Operator>;
};

export type Events = {
  __typename?: 'Events';
  docs: Array<Event>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type EventsCreateAccess = {
  __typename?: 'EventsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsCreateDocAccess = {
  __typename?: 'EventsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsDeleteAccess = {
  __typename?: 'EventsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsDeleteDocAccess = {
  __typename?: 'EventsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsDocAccessFields = {
  __typename?: 'EventsDocAccessFields';
  contentBlocks?: Maybe<EventsDocAccessFields_ContentBlocks>;
  coverImage?: Maybe<EventsDocAccessFields_CoverImage>;
  createdAt?: Maybe<EventsDocAccessFields_CreatedAt>;
  date?: Maybe<EventsDocAccessFields_Date>;
  description?: Maybe<EventsDocAccessFields_Description>;
  epoch?: Maybe<EventsDocAccessFields_Epoch>;
  grid?: Maybe<EventsDocAccessFields_Grid>;
  streamersPresent?: Maybe<EventsDocAccessFields_StreamersPresent>;
  title?: Maybe<EventsDocAccessFields_Title>;
  type?: Maybe<EventsDocAccessFields_Type>;
  updatedAt?: Maybe<EventsDocAccessFields_UpdatedAt>;
  videoSlug?: Maybe<EventsDocAccessFields_VideoSlug>;
};

export type EventsDocAccessFields_ContentBlocks = {
  __typename?: 'EventsDocAccessFields_contentBlocks';
  create?: Maybe<EventsDocAccessFields_ContentBlocks_Create>;
  delete?: Maybe<EventsDocAccessFields_ContentBlocks_Delete>;
  read?: Maybe<EventsDocAccessFields_ContentBlocks_Read>;
  update?: Maybe<EventsDocAccessFields_ContentBlocks_Update>;
};

export type EventsDocAccessFields_ContentBlocks_Create = {
  __typename?: 'EventsDocAccessFields_contentBlocks_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_ContentBlocks_Delete = {
  __typename?: 'EventsDocAccessFields_contentBlocks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_ContentBlocks_Read = {
  __typename?: 'EventsDocAccessFields_contentBlocks_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_ContentBlocks_Update = {
  __typename?: 'EventsDocAccessFields_contentBlocks_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CoverImage = {
  __typename?: 'EventsDocAccessFields_coverImage';
  create?: Maybe<EventsDocAccessFields_CoverImage_Create>;
  delete?: Maybe<EventsDocAccessFields_CoverImage_Delete>;
  read?: Maybe<EventsDocAccessFields_CoverImage_Read>;
  update?: Maybe<EventsDocAccessFields_CoverImage_Update>;
};

export type EventsDocAccessFields_CoverImage_Create = {
  __typename?: 'EventsDocAccessFields_coverImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CoverImage_Delete = {
  __typename?: 'EventsDocAccessFields_coverImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CoverImage_Read = {
  __typename?: 'EventsDocAccessFields_coverImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CoverImage_Update = {
  __typename?: 'EventsDocAccessFields_coverImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CreatedAt = {
  __typename?: 'EventsDocAccessFields_createdAt';
  create?: Maybe<EventsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<EventsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<EventsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<EventsDocAccessFields_CreatedAt_Update>;
};

export type EventsDocAccessFields_CreatedAt_Create = {
  __typename?: 'EventsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'EventsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CreatedAt_Read = {
  __typename?: 'EventsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_CreatedAt_Update = {
  __typename?: 'EventsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Date = {
  __typename?: 'EventsDocAccessFields_date';
  create?: Maybe<EventsDocAccessFields_Date_Create>;
  delete?: Maybe<EventsDocAccessFields_Date_Delete>;
  read?: Maybe<EventsDocAccessFields_Date_Read>;
  update?: Maybe<EventsDocAccessFields_Date_Update>;
};

export type EventsDocAccessFields_Date_Create = {
  __typename?: 'EventsDocAccessFields_date_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Date_Delete = {
  __typename?: 'EventsDocAccessFields_date_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Date_Read = {
  __typename?: 'EventsDocAccessFields_date_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Date_Update = {
  __typename?: 'EventsDocAccessFields_date_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Description = {
  __typename?: 'EventsDocAccessFields_description';
  create?: Maybe<EventsDocAccessFields_Description_Create>;
  delete?: Maybe<EventsDocAccessFields_Description_Delete>;
  read?: Maybe<EventsDocAccessFields_Description_Read>;
  update?: Maybe<EventsDocAccessFields_Description_Update>;
};

export type EventsDocAccessFields_Description_Create = {
  __typename?: 'EventsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Description_Delete = {
  __typename?: 'EventsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Description_Read = {
  __typename?: 'EventsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Description_Update = {
  __typename?: 'EventsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Epoch = {
  __typename?: 'EventsDocAccessFields_epoch';
  create?: Maybe<EventsDocAccessFields_Epoch_Create>;
  delete?: Maybe<EventsDocAccessFields_Epoch_Delete>;
  read?: Maybe<EventsDocAccessFields_Epoch_Read>;
  update?: Maybe<EventsDocAccessFields_Epoch_Update>;
};

export type EventsDocAccessFields_Epoch_Create = {
  __typename?: 'EventsDocAccessFields_epoch_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Epoch_Delete = {
  __typename?: 'EventsDocAccessFields_epoch_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Epoch_Read = {
  __typename?: 'EventsDocAccessFields_epoch_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Epoch_Update = {
  __typename?: 'EventsDocAccessFields_epoch_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Grid = {
  __typename?: 'EventsDocAccessFields_grid';
  create?: Maybe<EventsDocAccessFields_Grid_Create>;
  delete?: Maybe<EventsDocAccessFields_Grid_Delete>;
  read?: Maybe<EventsDocAccessFields_Grid_Read>;
  update?: Maybe<EventsDocAccessFields_Grid_Update>;
};

export type EventsDocAccessFields_Grid_Create = {
  __typename?: 'EventsDocAccessFields_grid_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Grid_Delete = {
  __typename?: 'EventsDocAccessFields_grid_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Grid_Read = {
  __typename?: 'EventsDocAccessFields_grid_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Grid_Update = {
  __typename?: 'EventsDocAccessFields_grid_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_StreamersPresent = {
  __typename?: 'EventsDocAccessFields_streamersPresent';
  create?: Maybe<EventsDocAccessFields_StreamersPresent_Create>;
  delete?: Maybe<EventsDocAccessFields_StreamersPresent_Delete>;
  read?: Maybe<EventsDocAccessFields_StreamersPresent_Read>;
  update?: Maybe<EventsDocAccessFields_StreamersPresent_Update>;
};

export type EventsDocAccessFields_StreamersPresent_Create = {
  __typename?: 'EventsDocAccessFields_streamersPresent_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_StreamersPresent_Delete = {
  __typename?: 'EventsDocAccessFields_streamersPresent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_StreamersPresent_Read = {
  __typename?: 'EventsDocAccessFields_streamersPresent_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_StreamersPresent_Update = {
  __typename?: 'EventsDocAccessFields_streamersPresent_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Title = {
  __typename?: 'EventsDocAccessFields_title';
  create?: Maybe<EventsDocAccessFields_Title_Create>;
  delete?: Maybe<EventsDocAccessFields_Title_Delete>;
  read?: Maybe<EventsDocAccessFields_Title_Read>;
  update?: Maybe<EventsDocAccessFields_Title_Update>;
};

export type EventsDocAccessFields_Title_Create = {
  __typename?: 'EventsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Title_Delete = {
  __typename?: 'EventsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Title_Read = {
  __typename?: 'EventsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Title_Update = {
  __typename?: 'EventsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Type = {
  __typename?: 'EventsDocAccessFields_type';
  create?: Maybe<EventsDocAccessFields_Type_Create>;
  delete?: Maybe<EventsDocAccessFields_Type_Delete>;
  read?: Maybe<EventsDocAccessFields_Type_Read>;
  update?: Maybe<EventsDocAccessFields_Type_Update>;
};

export type EventsDocAccessFields_Type_Create = {
  __typename?: 'EventsDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Type_Delete = {
  __typename?: 'EventsDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Type_Read = {
  __typename?: 'EventsDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_Type_Update = {
  __typename?: 'EventsDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_UpdatedAt = {
  __typename?: 'EventsDocAccessFields_updatedAt';
  create?: Maybe<EventsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<EventsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<EventsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<EventsDocAccessFields_UpdatedAt_Update>;
};

export type EventsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'EventsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'EventsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'EventsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'EventsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_VideoSlug = {
  __typename?: 'EventsDocAccessFields_videoSlug';
  create?: Maybe<EventsDocAccessFields_VideoSlug_Create>;
  delete?: Maybe<EventsDocAccessFields_VideoSlug_Delete>;
  read?: Maybe<EventsDocAccessFields_VideoSlug_Read>;
  update?: Maybe<EventsDocAccessFields_VideoSlug_Update>;
};

export type EventsDocAccessFields_VideoSlug_Create = {
  __typename?: 'EventsDocAccessFields_videoSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_VideoSlug_Delete = {
  __typename?: 'EventsDocAccessFields_videoSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_VideoSlug_Read = {
  __typename?: 'EventsDocAccessFields_videoSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsDocAccessFields_VideoSlug_Update = {
  __typename?: 'EventsDocAccessFields_videoSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields = {
  __typename?: 'EventsFields';
  contentBlocks?: Maybe<EventsFields_ContentBlocks>;
  coverImage?: Maybe<EventsFields_CoverImage>;
  createdAt?: Maybe<EventsFields_CreatedAt>;
  date?: Maybe<EventsFields_Date>;
  description?: Maybe<EventsFields_Description>;
  epoch?: Maybe<EventsFields_Epoch>;
  grid?: Maybe<EventsFields_Grid>;
  streamersPresent?: Maybe<EventsFields_StreamersPresent>;
  title?: Maybe<EventsFields_Title>;
  type?: Maybe<EventsFields_Type>;
  updatedAt?: Maybe<EventsFields_UpdatedAt>;
  videoSlug?: Maybe<EventsFields_VideoSlug>;
};

export type EventsFields_ContentBlocks = {
  __typename?: 'EventsFields_contentBlocks';
  create?: Maybe<EventsFields_ContentBlocks_Create>;
  delete?: Maybe<EventsFields_ContentBlocks_Delete>;
  read?: Maybe<EventsFields_ContentBlocks_Read>;
  update?: Maybe<EventsFields_ContentBlocks_Update>;
};

export type EventsFields_ContentBlocks_Create = {
  __typename?: 'EventsFields_contentBlocks_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_ContentBlocks_Delete = {
  __typename?: 'EventsFields_contentBlocks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_ContentBlocks_Read = {
  __typename?: 'EventsFields_contentBlocks_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_ContentBlocks_Update = {
  __typename?: 'EventsFields_contentBlocks_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CoverImage = {
  __typename?: 'EventsFields_coverImage';
  create?: Maybe<EventsFields_CoverImage_Create>;
  delete?: Maybe<EventsFields_CoverImage_Delete>;
  read?: Maybe<EventsFields_CoverImage_Read>;
  update?: Maybe<EventsFields_CoverImage_Update>;
};

export type EventsFields_CoverImage_Create = {
  __typename?: 'EventsFields_coverImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CoverImage_Delete = {
  __typename?: 'EventsFields_coverImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CoverImage_Read = {
  __typename?: 'EventsFields_coverImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CoverImage_Update = {
  __typename?: 'EventsFields_coverImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CreatedAt = {
  __typename?: 'EventsFields_createdAt';
  create?: Maybe<EventsFields_CreatedAt_Create>;
  delete?: Maybe<EventsFields_CreatedAt_Delete>;
  read?: Maybe<EventsFields_CreatedAt_Read>;
  update?: Maybe<EventsFields_CreatedAt_Update>;
};

export type EventsFields_CreatedAt_Create = {
  __typename?: 'EventsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CreatedAt_Delete = {
  __typename?: 'EventsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CreatedAt_Read = {
  __typename?: 'EventsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_CreatedAt_Update = {
  __typename?: 'EventsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Date = {
  __typename?: 'EventsFields_date';
  create?: Maybe<EventsFields_Date_Create>;
  delete?: Maybe<EventsFields_Date_Delete>;
  read?: Maybe<EventsFields_Date_Read>;
  update?: Maybe<EventsFields_Date_Update>;
};

export type EventsFields_Date_Create = {
  __typename?: 'EventsFields_date_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Date_Delete = {
  __typename?: 'EventsFields_date_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Date_Read = {
  __typename?: 'EventsFields_date_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Date_Update = {
  __typename?: 'EventsFields_date_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Description = {
  __typename?: 'EventsFields_description';
  create?: Maybe<EventsFields_Description_Create>;
  delete?: Maybe<EventsFields_Description_Delete>;
  read?: Maybe<EventsFields_Description_Read>;
  update?: Maybe<EventsFields_Description_Update>;
};

export type EventsFields_Description_Create = {
  __typename?: 'EventsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Description_Delete = {
  __typename?: 'EventsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Description_Read = {
  __typename?: 'EventsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Description_Update = {
  __typename?: 'EventsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Epoch = {
  __typename?: 'EventsFields_epoch';
  create?: Maybe<EventsFields_Epoch_Create>;
  delete?: Maybe<EventsFields_Epoch_Delete>;
  read?: Maybe<EventsFields_Epoch_Read>;
  update?: Maybe<EventsFields_Epoch_Update>;
};

export type EventsFields_Epoch_Create = {
  __typename?: 'EventsFields_epoch_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Epoch_Delete = {
  __typename?: 'EventsFields_epoch_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Epoch_Read = {
  __typename?: 'EventsFields_epoch_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Epoch_Update = {
  __typename?: 'EventsFields_epoch_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Grid = {
  __typename?: 'EventsFields_grid';
  create?: Maybe<EventsFields_Grid_Create>;
  delete?: Maybe<EventsFields_Grid_Delete>;
  read?: Maybe<EventsFields_Grid_Read>;
  update?: Maybe<EventsFields_Grid_Update>;
};

export type EventsFields_Grid_Create = {
  __typename?: 'EventsFields_grid_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Grid_Delete = {
  __typename?: 'EventsFields_grid_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Grid_Read = {
  __typename?: 'EventsFields_grid_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Grid_Update = {
  __typename?: 'EventsFields_grid_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_StreamersPresent = {
  __typename?: 'EventsFields_streamersPresent';
  create?: Maybe<EventsFields_StreamersPresent_Create>;
  delete?: Maybe<EventsFields_StreamersPresent_Delete>;
  read?: Maybe<EventsFields_StreamersPresent_Read>;
  update?: Maybe<EventsFields_StreamersPresent_Update>;
};

export type EventsFields_StreamersPresent_Create = {
  __typename?: 'EventsFields_streamersPresent_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_StreamersPresent_Delete = {
  __typename?: 'EventsFields_streamersPresent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_StreamersPresent_Read = {
  __typename?: 'EventsFields_streamersPresent_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_StreamersPresent_Update = {
  __typename?: 'EventsFields_streamersPresent_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Title = {
  __typename?: 'EventsFields_title';
  create?: Maybe<EventsFields_Title_Create>;
  delete?: Maybe<EventsFields_Title_Delete>;
  read?: Maybe<EventsFields_Title_Read>;
  update?: Maybe<EventsFields_Title_Update>;
};

export type EventsFields_Title_Create = {
  __typename?: 'EventsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Title_Delete = {
  __typename?: 'EventsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Title_Read = {
  __typename?: 'EventsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Title_Update = {
  __typename?: 'EventsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Type = {
  __typename?: 'EventsFields_type';
  create?: Maybe<EventsFields_Type_Create>;
  delete?: Maybe<EventsFields_Type_Delete>;
  read?: Maybe<EventsFields_Type_Read>;
  update?: Maybe<EventsFields_Type_Update>;
};

export type EventsFields_Type_Create = {
  __typename?: 'EventsFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Type_Delete = {
  __typename?: 'EventsFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Type_Read = {
  __typename?: 'EventsFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_Type_Update = {
  __typename?: 'EventsFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_UpdatedAt = {
  __typename?: 'EventsFields_updatedAt';
  create?: Maybe<EventsFields_UpdatedAt_Create>;
  delete?: Maybe<EventsFields_UpdatedAt_Delete>;
  read?: Maybe<EventsFields_UpdatedAt_Read>;
  update?: Maybe<EventsFields_UpdatedAt_Update>;
};

export type EventsFields_UpdatedAt_Create = {
  __typename?: 'EventsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_UpdatedAt_Delete = {
  __typename?: 'EventsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_UpdatedAt_Read = {
  __typename?: 'EventsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_UpdatedAt_Update = {
  __typename?: 'EventsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_VideoSlug = {
  __typename?: 'EventsFields_videoSlug';
  create?: Maybe<EventsFields_VideoSlug_Create>;
  delete?: Maybe<EventsFields_VideoSlug_Delete>;
  read?: Maybe<EventsFields_VideoSlug_Read>;
  update?: Maybe<EventsFields_VideoSlug_Update>;
};

export type EventsFields_VideoSlug_Create = {
  __typename?: 'EventsFields_videoSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_VideoSlug_Delete = {
  __typename?: 'EventsFields_videoSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_VideoSlug_Read = {
  __typename?: 'EventsFields_videoSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type EventsFields_VideoSlug_Update = {
  __typename?: 'EventsFields_videoSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type EventsReadAccess = {
  __typename?: 'EventsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsReadDocAccess = {
  __typename?: 'EventsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsUpdateAccess = {
  __typename?: 'EventsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EventsUpdateDocAccess = {
  __typename?: 'EventsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GridCounts = {
  __typename?: 'GridCounts';
  collab: Scalars['Int']['output'];
  festival: Scalars['Int']['output'];
  marathon: Scalars['Int']['output'];
  series: Scalars['Int']['output'];
  tournament: Scalars['Int']['output'];
};

export type Hero = {
  __typename?: 'Hero';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEpoch?: Maybe<Epoch>;
  createEpochParticipant?: Maybe<EpochParticipant>;
  createEvent?: Maybe<Event>;
  createMedia?: Maybe<Media>;
  createPayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createReview?: Maybe<Review>;
  createSquad?: Maybe<Squad>;
  createSquadMember?: Maybe<SquadMember>;
  createStreamGrid?: Maybe<StreamGrid>;
  createStreamer?: Maybe<Streamer>;
  createUser?: Maybe<User>;
  deleteEpoch?: Maybe<Epoch>;
  deleteEpochParticipant?: Maybe<EpochParticipant>;
  deleteEvent?: Maybe<Event>;
  deleteMedia?: Maybe<Media>;
  deletePayloadKv?: Maybe<PayloadKv>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteReview?: Maybe<Review>;
  deleteSquad?: Maybe<Squad>;
  deleteSquadMember?: Maybe<SquadMember>;
  deleteStreamGrid?: Maybe<StreamGrid>;
  deleteStreamer?: Maybe<Streamer>;
  deleteUser?: Maybe<User>;
  duplicateEpoch?: Maybe<Epoch>;
  duplicateEpochParticipant?: Maybe<EpochParticipant>;
  duplicateEvent?: Maybe<Event>;
  duplicateMedia?: Maybe<Media>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateReview?: Maybe<Review>;
  duplicateSquad?: Maybe<Squad>;
  duplicateSquadMember?: Maybe<SquadMember>;
  duplicateStreamGrid?: Maybe<StreamGrid>;
  duplicateStreamer?: Maybe<Streamer>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateEpoch?: Maybe<Epoch>;
  updateEpochParticipant?: Maybe<EpochParticipant>;
  updateEvent?: Maybe<Event>;
  updateMedia?: Maybe<Media>;
  updatePayloadKv?: Maybe<PayloadKv>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateReview?: Maybe<Review>;
  updateSquad?: Maybe<Squad>;
  updateSquadMember?: Maybe<SquadMember>;
  updateStreamGrid?: Maybe<StreamGrid>;
  updateStreamer?: Maybe<Streamer>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateEpochArgs = {
  data: MutationEpochInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateEpochParticipantArgs = {
  data: MutationEpochParticipantInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateEventArgs = {
  data: MutationEventInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateReviewArgs = {
  data: MutationReviewInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateSquadArgs = {
  data: MutationSquadInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateSquadMemberArgs = {
  data: MutationSquadMemberInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateStreamGridArgs = {
  data: MutationStreamGridInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateStreamerArgs = {
  data: MutationStreamerInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteEpochArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteEpochParticipantArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteEventArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadKvArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteSquadArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteSquadMemberArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteStreamGridArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteStreamerArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateEpochArgs = {
  data: MutationEpochInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateEpochParticipantArgs = {
  data: MutationEpochParticipantInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateEventArgs = {
  data: MutationEventInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateReviewArgs = {
  data: MutationReviewInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateSquadArgs = {
  data: MutationSquadInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateSquadMemberArgs = {
  data: MutationSquadMemberInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateStreamGridArgs = {
  data: MutationStreamGridInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateStreamerArgs = {
  data: MutationStreamerInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateEpochArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationEpochUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateEpochParticipantArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationEpochParticipantUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateEventArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationEventUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadKvArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateReviewArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationReviewUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSquadArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSquadUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSquadMemberArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSquadMemberUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateStreamGridArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationStreamGridUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateStreamerArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationStreamerUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadKv = {
  __typename?: 'PayloadKv';
  data: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
};

export type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  data?: Maybe<PayloadKvDocAccessFields_Data>;
  key?: Maybe<PayloadKvDocAccessFields_Key>;
};

export type PayloadKvDocAccessFields_Data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_Data_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Data_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Data_Update>;
};

export type PayloadKvDocAccessFields_Data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Key_Update>;
};

export type PayloadKvDocAccessFields_Key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  data?: Maybe<PayloadKvFields_Data>;
  key?: Maybe<PayloadKvFields_Key>;
};

export type PayloadKvFields_Data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_Data_Create>;
  delete?: Maybe<PayloadKvFields_Data_Delete>;
  read?: Maybe<PayloadKvFields_Data_Read>;
  update?: Maybe<PayloadKvFields_Data_Update>;
};

export type PayloadKvFields_Data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_Key_Create>;
  delete?: Maybe<PayloadKvFields_Key_Delete>;
  read?: Maybe<PayloadKvFields_Key_Read>;
  update?: Maybe<PayloadKvFields_Key_Update>;
};

export type PayloadKvFields_Key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv_Data_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadKv_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadKv_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<PayloadLockedDocument_User_Relationship>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  EpochParticipants = 'epoch_participants',
  Epochs = 'epochs',
  Events = 'events',
  Media = 'media',
  Reviews = 'reviews',
  SquadMembers = 'squad_members',
  Squads = 'squads',
  StreamGrids = 'stream_grids',
  Streamers = 'streamers',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Epoch | EpochParticipant | Event | Media | Review | Squad | SquadMember | StreamGrid | Streamer | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  EpochParticipants = 'epoch_participants',
  Epochs = 'epochs',
  Events = 'events',
  Media = 'media',
  Reviews = 'reviews',
  SquadMembers = 'squad_members',
  Squads = 'squads',
  StreamGrids = 'stream_grids',
  Streamers = 'streamers',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  EpochParticipants = 'epoch_participants',
  Epochs = 'epochs',
  Events = 'events',
  Media = 'media',
  Reviews = 'reviews',
  SquadMembers = 'squad_members',
  Squads = 'squads',
  StreamGrids = 'stream_grids',
  Streamers = 'streamers',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  EpochParticipants = 'epoch_participants',
  Epochs = 'epochs',
  Events = 'events',
  Media = 'media',
  Reviews = 'reviews',
  SquadMembers = 'squad_members',
  Squads = 'squads',
  StreamGrids = 'stream_grids',
  Streamers = 'streamers',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<PayloadPreference_User_Relationship>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Epoch?: Maybe<Epoch>;
  EpochParticipant?: Maybe<EpochParticipant>;
  EpochParticipants?: Maybe<EpochParticipants>;
  Epochs?: Maybe<Epochs>;
  Event?: Maybe<Event>;
  Events?: Maybe<Events>;
  GridCounts: GridCounts;
  Media?: Maybe<Media>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Review?: Maybe<Review>;
  Reviews?: Maybe<Reviews>;
  Squad?: Maybe<Squad>;
  SquadMember?: Maybe<SquadMember>;
  SquadMembers?: Maybe<SquadMembers>;
  Squads?: Maybe<Squads>;
  StreamGrid?: Maybe<StreamGrid>;
  StreamGrids?: Maybe<StreamGrids>;
  Streamer?: Maybe<Streamer>;
  Streamers?: Maybe<Streamers>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countEpochParticipants?: Maybe<CountEpochParticipants>;
  countEpochs?: Maybe<CountEpochs>;
  countEvents?: Maybe<CountEvents>;
  countPayloadKvs?: Maybe<CountPayloadKvs>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countReviews?: Maybe<CountReviews>;
  countSquadMembers?: Maybe<CountSquadMembers>;
  countSquads?: Maybe<CountSquads>;
  countStreamGrids?: Maybe<CountStreamGrids>;
  countStreamers?: Maybe<CountStreamers>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessEpoch?: Maybe<EpochsDocAccess>;
  docAccessEpochParticipant?: Maybe<Epoch_ParticipantsDocAccess>;
  docAccessEvent?: Maybe<EventsDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadKv?: Maybe<Payload_KvDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessReview?: Maybe<ReviewsDocAccess>;
  docAccessSquad?: Maybe<SquadsDocAccess>;
  docAccessSquadMember?: Maybe<Squad_MembersDocAccess>;
  docAccessStreamGrid?: Maybe<Stream_GridsDocAccess>;
  docAccessStreamer?: Maybe<StreamersDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryEpochArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEpochParticipantArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEpochParticipantsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EpochParticipant_Where>;
};


export type QueryEpochsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Epoch_Where>;
};


export type QueryEventArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Event_Where>;
};


export type QueryGridCountsArgs = {
  streamerId: Scalars['Int']['input'];
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryReviewArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Review_Where>;
};


export type QuerySquadArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySquadMemberArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySquadMembersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SquadMember_Where>;
};


export type QuerySquadsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Squad_Where>;
};


export type QueryStreamGridArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStreamGridsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StreamGrid_Where>;
};


export type QueryStreamerArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStreamersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Streamer_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountEpochParticipantsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EpochParticipant_Where>;
};


export type QueryCountEpochsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Epoch_Where>;
};


export type QueryCountEventsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Event_Where>;
};


export type QueryCountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Review_Where>;
};


export type QueryCountSquadMembersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SquadMember_Where>;
};


export type QueryCountSquadsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Squad_Where>;
};


export type QueryCountStreamGridsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StreamGrid_Where>;
};


export type QueryCountStreamersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Streamer_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessEpochArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessEpochParticipantArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessEventArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadKvArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessSquadArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessSquadMemberArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessStreamGridArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessStreamerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type Quote = {
  __typename?: 'Quote';
  author?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Review = {
  __typename?: 'Review';
  attachedTo: Review_AttachedTo;
  author?: Maybe<Scalars['String']['output']>;
  content: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  epochLink?: Maybe<Epoch>;
  eventLink?: Maybe<Event>;
  id: Scalars['Int']['output'];
  streamerLink?: Maybe<Streamer>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export enum ReviewUpdate_AttachedTo_MutationInput {
  ToEpoch = 'to_epoch',
  ToEvent = 'to_event',
  ToStreamer = 'to_streamer'
}

export enum Review_AttachedTo {
  ToEpoch = 'to_epoch',
  ToEvent = 'to_event',
  ToStreamer = 'to_streamer'
}

export enum Review_AttachedTo_Input {
  ToEpoch = 'to_epoch',
  ToEvent = 'to_event',
  ToStreamer = 'to_streamer'
}

export enum Review_AttachedTo_MutationInput {
  ToEpoch = 'to_epoch',
  ToEvent = 'to_event',
  ToStreamer = 'to_streamer'
}

export type Review_AttachedTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Review_AttachedTo_Input>>>;
  equals?: InputMaybe<Review_AttachedTo_Input>;
  in?: InputMaybe<Array<InputMaybe<Review_AttachedTo_Input>>>;
  not_equals?: InputMaybe<Review_AttachedTo_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Review_AttachedTo_Input>>>;
};

export type Review_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Review_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Review_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Review_EpochLink_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Review_EventLink_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Review_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Review_StreamerLink_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Review_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Review_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Review_Where = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  attachedTo?: InputMaybe<Review_AttachedTo_Operator>;
  author?: InputMaybe<Review_Author_Operator>;
  content?: InputMaybe<Review_Content_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  epochLink?: InputMaybe<Review_EpochLink_Operator>;
  eventLink?: InputMaybe<Review_EventLink_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  streamerLink?: InputMaybe<Review_StreamerLink_Operator>;
  title?: InputMaybe<Review_Title_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
};

export type Review_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  attachedTo?: InputMaybe<Review_AttachedTo_Operator>;
  author?: InputMaybe<Review_Author_Operator>;
  content?: InputMaybe<Review_Content_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  epochLink?: InputMaybe<Review_EpochLink_Operator>;
  eventLink?: InputMaybe<Review_EventLink_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  streamerLink?: InputMaybe<Review_StreamerLink_Operator>;
  title?: InputMaybe<Review_Title_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
};

export type Review_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  attachedTo?: InputMaybe<Review_AttachedTo_Operator>;
  author?: InputMaybe<Review_Author_Operator>;
  content?: InputMaybe<Review_Content_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  epochLink?: InputMaybe<Review_EpochLink_Operator>;
  eventLink?: InputMaybe<Review_EventLink_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  streamerLink?: InputMaybe<Review_StreamerLink_Operator>;
  title?: InputMaybe<Review_Title_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
};

export type Reviews = {
  __typename?: 'Reviews';
  docs: Array<Review>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ReviewsCreateAccess = {
  __typename?: 'ReviewsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsCreateDocAccess = {
  __typename?: 'ReviewsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDeleteAccess = {
  __typename?: 'ReviewsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDeleteDocAccess = {
  __typename?: 'ReviewsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDocAccessFields = {
  __typename?: 'ReviewsDocAccessFields';
  attachedTo?: Maybe<ReviewsDocAccessFields_AttachedTo>;
  author?: Maybe<ReviewsDocAccessFields_Author>;
  content?: Maybe<ReviewsDocAccessFields_Content>;
  createdAt?: Maybe<ReviewsDocAccessFields_CreatedAt>;
  epochLink?: Maybe<ReviewsDocAccessFields_EpochLink>;
  eventLink?: Maybe<ReviewsDocAccessFields_EventLink>;
  streamerLink?: Maybe<ReviewsDocAccessFields_StreamerLink>;
  title?: Maybe<ReviewsDocAccessFields_Title>;
  updatedAt?: Maybe<ReviewsDocAccessFields_UpdatedAt>;
};

export type ReviewsDocAccessFields_AttachedTo = {
  __typename?: 'ReviewsDocAccessFields_attachedTo';
  create?: Maybe<ReviewsDocAccessFields_AttachedTo_Create>;
  delete?: Maybe<ReviewsDocAccessFields_AttachedTo_Delete>;
  read?: Maybe<ReviewsDocAccessFields_AttachedTo_Read>;
  update?: Maybe<ReviewsDocAccessFields_AttachedTo_Update>;
};

export type ReviewsDocAccessFields_AttachedTo_Create = {
  __typename?: 'ReviewsDocAccessFields_attachedTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_AttachedTo_Delete = {
  __typename?: 'ReviewsDocAccessFields_attachedTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_AttachedTo_Read = {
  __typename?: 'ReviewsDocAccessFields_attachedTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_AttachedTo_Update = {
  __typename?: 'ReviewsDocAccessFields_attachedTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author = {
  __typename?: 'ReviewsDocAccessFields_author';
  create?: Maybe<ReviewsDocAccessFields_Author_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Author_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Author_Read>;
  update?: Maybe<ReviewsDocAccessFields_Author_Update>;
};

export type ReviewsDocAccessFields_Author_Create = {
  __typename?: 'ReviewsDocAccessFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author_Delete = {
  __typename?: 'ReviewsDocAccessFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author_Read = {
  __typename?: 'ReviewsDocAccessFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author_Update = {
  __typename?: 'ReviewsDocAccessFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Content = {
  __typename?: 'ReviewsDocAccessFields_content';
  create?: Maybe<ReviewsDocAccessFields_Content_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Content_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Content_Read>;
  update?: Maybe<ReviewsDocAccessFields_Content_Update>;
};

export type ReviewsDocAccessFields_Content_Create = {
  __typename?: 'ReviewsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Content_Delete = {
  __typename?: 'ReviewsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Content_Read = {
  __typename?: 'ReviewsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Content_Update = {
  __typename?: 'ReviewsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt = {
  __typename?: 'ReviewsDocAccessFields_createdAt';
  create?: Maybe<ReviewsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ReviewsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ReviewsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ReviewsDocAccessFields_CreatedAt_Update>;
};

export type ReviewsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EpochLink = {
  __typename?: 'ReviewsDocAccessFields_epochLink';
  create?: Maybe<ReviewsDocAccessFields_EpochLink_Create>;
  delete?: Maybe<ReviewsDocAccessFields_EpochLink_Delete>;
  read?: Maybe<ReviewsDocAccessFields_EpochLink_Read>;
  update?: Maybe<ReviewsDocAccessFields_EpochLink_Update>;
};

export type ReviewsDocAccessFields_EpochLink_Create = {
  __typename?: 'ReviewsDocAccessFields_epochLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EpochLink_Delete = {
  __typename?: 'ReviewsDocAccessFields_epochLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EpochLink_Read = {
  __typename?: 'ReviewsDocAccessFields_epochLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EpochLink_Update = {
  __typename?: 'ReviewsDocAccessFields_epochLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EventLink = {
  __typename?: 'ReviewsDocAccessFields_eventLink';
  create?: Maybe<ReviewsDocAccessFields_EventLink_Create>;
  delete?: Maybe<ReviewsDocAccessFields_EventLink_Delete>;
  read?: Maybe<ReviewsDocAccessFields_EventLink_Read>;
  update?: Maybe<ReviewsDocAccessFields_EventLink_Update>;
};

export type ReviewsDocAccessFields_EventLink_Create = {
  __typename?: 'ReviewsDocAccessFields_eventLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EventLink_Delete = {
  __typename?: 'ReviewsDocAccessFields_eventLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EventLink_Read = {
  __typename?: 'ReviewsDocAccessFields_eventLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_EventLink_Update = {
  __typename?: 'ReviewsDocAccessFields_eventLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_StreamerLink = {
  __typename?: 'ReviewsDocAccessFields_streamerLink';
  create?: Maybe<ReviewsDocAccessFields_StreamerLink_Create>;
  delete?: Maybe<ReviewsDocAccessFields_StreamerLink_Delete>;
  read?: Maybe<ReviewsDocAccessFields_StreamerLink_Read>;
  update?: Maybe<ReviewsDocAccessFields_StreamerLink_Update>;
};

export type ReviewsDocAccessFields_StreamerLink_Create = {
  __typename?: 'ReviewsDocAccessFields_streamerLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_StreamerLink_Delete = {
  __typename?: 'ReviewsDocAccessFields_streamerLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_StreamerLink_Read = {
  __typename?: 'ReviewsDocAccessFields_streamerLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_StreamerLink_Update = {
  __typename?: 'ReviewsDocAccessFields_streamerLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Title = {
  __typename?: 'ReviewsDocAccessFields_title';
  create?: Maybe<ReviewsDocAccessFields_Title_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Title_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Title_Read>;
  update?: Maybe<ReviewsDocAccessFields_Title_Update>;
};

export type ReviewsDocAccessFields_Title_Create = {
  __typename?: 'ReviewsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Title_Delete = {
  __typename?: 'ReviewsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Title_Read = {
  __typename?: 'ReviewsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Title_Update = {
  __typename?: 'ReviewsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt = {
  __typename?: 'ReviewsDocAccessFields_updatedAt';
  create?: Maybe<ReviewsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ReviewsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ReviewsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ReviewsDocAccessFields_UpdatedAt_Update>;
};

export type ReviewsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields = {
  __typename?: 'ReviewsFields';
  attachedTo?: Maybe<ReviewsFields_AttachedTo>;
  author?: Maybe<ReviewsFields_Author>;
  content?: Maybe<ReviewsFields_Content>;
  createdAt?: Maybe<ReviewsFields_CreatedAt>;
  epochLink?: Maybe<ReviewsFields_EpochLink>;
  eventLink?: Maybe<ReviewsFields_EventLink>;
  streamerLink?: Maybe<ReviewsFields_StreamerLink>;
  title?: Maybe<ReviewsFields_Title>;
  updatedAt?: Maybe<ReviewsFields_UpdatedAt>;
};

export type ReviewsFields_AttachedTo = {
  __typename?: 'ReviewsFields_attachedTo';
  create?: Maybe<ReviewsFields_AttachedTo_Create>;
  delete?: Maybe<ReviewsFields_AttachedTo_Delete>;
  read?: Maybe<ReviewsFields_AttachedTo_Read>;
  update?: Maybe<ReviewsFields_AttachedTo_Update>;
};

export type ReviewsFields_AttachedTo_Create = {
  __typename?: 'ReviewsFields_attachedTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_AttachedTo_Delete = {
  __typename?: 'ReviewsFields_attachedTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_AttachedTo_Read = {
  __typename?: 'ReviewsFields_attachedTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_AttachedTo_Update = {
  __typename?: 'ReviewsFields_attachedTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author = {
  __typename?: 'ReviewsFields_author';
  create?: Maybe<ReviewsFields_Author_Create>;
  delete?: Maybe<ReviewsFields_Author_Delete>;
  read?: Maybe<ReviewsFields_Author_Read>;
  update?: Maybe<ReviewsFields_Author_Update>;
};

export type ReviewsFields_Author_Create = {
  __typename?: 'ReviewsFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author_Delete = {
  __typename?: 'ReviewsFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author_Read = {
  __typename?: 'ReviewsFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author_Update = {
  __typename?: 'ReviewsFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Content = {
  __typename?: 'ReviewsFields_content';
  create?: Maybe<ReviewsFields_Content_Create>;
  delete?: Maybe<ReviewsFields_Content_Delete>;
  read?: Maybe<ReviewsFields_Content_Read>;
  update?: Maybe<ReviewsFields_Content_Update>;
};

export type ReviewsFields_Content_Create = {
  __typename?: 'ReviewsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Content_Delete = {
  __typename?: 'ReviewsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Content_Read = {
  __typename?: 'ReviewsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Content_Update = {
  __typename?: 'ReviewsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt = {
  __typename?: 'ReviewsFields_createdAt';
  create?: Maybe<ReviewsFields_CreatedAt_Create>;
  delete?: Maybe<ReviewsFields_CreatedAt_Delete>;
  read?: Maybe<ReviewsFields_CreatedAt_Read>;
  update?: Maybe<ReviewsFields_CreatedAt_Update>;
};

export type ReviewsFields_CreatedAt_Create = {
  __typename?: 'ReviewsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Delete = {
  __typename?: 'ReviewsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Read = {
  __typename?: 'ReviewsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Update = {
  __typename?: 'ReviewsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EpochLink = {
  __typename?: 'ReviewsFields_epochLink';
  create?: Maybe<ReviewsFields_EpochLink_Create>;
  delete?: Maybe<ReviewsFields_EpochLink_Delete>;
  read?: Maybe<ReviewsFields_EpochLink_Read>;
  update?: Maybe<ReviewsFields_EpochLink_Update>;
};

export type ReviewsFields_EpochLink_Create = {
  __typename?: 'ReviewsFields_epochLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EpochLink_Delete = {
  __typename?: 'ReviewsFields_epochLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EpochLink_Read = {
  __typename?: 'ReviewsFields_epochLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EpochLink_Update = {
  __typename?: 'ReviewsFields_epochLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EventLink = {
  __typename?: 'ReviewsFields_eventLink';
  create?: Maybe<ReviewsFields_EventLink_Create>;
  delete?: Maybe<ReviewsFields_EventLink_Delete>;
  read?: Maybe<ReviewsFields_EventLink_Read>;
  update?: Maybe<ReviewsFields_EventLink_Update>;
};

export type ReviewsFields_EventLink_Create = {
  __typename?: 'ReviewsFields_eventLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EventLink_Delete = {
  __typename?: 'ReviewsFields_eventLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EventLink_Read = {
  __typename?: 'ReviewsFields_eventLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_EventLink_Update = {
  __typename?: 'ReviewsFields_eventLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_StreamerLink = {
  __typename?: 'ReviewsFields_streamerLink';
  create?: Maybe<ReviewsFields_StreamerLink_Create>;
  delete?: Maybe<ReviewsFields_StreamerLink_Delete>;
  read?: Maybe<ReviewsFields_StreamerLink_Read>;
  update?: Maybe<ReviewsFields_StreamerLink_Update>;
};

export type ReviewsFields_StreamerLink_Create = {
  __typename?: 'ReviewsFields_streamerLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_StreamerLink_Delete = {
  __typename?: 'ReviewsFields_streamerLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_StreamerLink_Read = {
  __typename?: 'ReviewsFields_streamerLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_StreamerLink_Update = {
  __typename?: 'ReviewsFields_streamerLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Title = {
  __typename?: 'ReviewsFields_title';
  create?: Maybe<ReviewsFields_Title_Create>;
  delete?: Maybe<ReviewsFields_Title_Delete>;
  read?: Maybe<ReviewsFields_Title_Read>;
  update?: Maybe<ReviewsFields_Title_Update>;
};

export type ReviewsFields_Title_Create = {
  __typename?: 'ReviewsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Title_Delete = {
  __typename?: 'ReviewsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Title_Read = {
  __typename?: 'ReviewsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Title_Update = {
  __typename?: 'ReviewsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt = {
  __typename?: 'ReviewsFields_updatedAt';
  create?: Maybe<ReviewsFields_UpdatedAt_Create>;
  delete?: Maybe<ReviewsFields_UpdatedAt_Delete>;
  read?: Maybe<ReviewsFields_UpdatedAt_Read>;
  update?: Maybe<ReviewsFields_UpdatedAt_Update>;
};

export type ReviewsFields_UpdatedAt_Create = {
  __typename?: 'ReviewsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Delete = {
  __typename?: 'ReviewsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Read = {
  __typename?: 'ReviewsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Update = {
  __typename?: 'ReviewsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsReadAccess = {
  __typename?: 'ReviewsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsReadDocAccess = {
  __typename?: 'ReviewsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsUpdateAccess = {
  __typename?: 'ReviewsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsUpdateDocAccess = {
  __typename?: 'ReviewsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Squad = {
  __typename?: 'Squad';
  banner?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  epochs?: Maybe<Squad_Epochs>;
  history?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['Int']['output'];
  logo?: Maybe<Media>;
  members?: Maybe<Squad_Members>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SquadEpochsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Epoch_Where>;
};


export type SquadHistoryArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type SquadMembersArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SquadMember_Where>;
};

export type SquadMember = {
  __typename?: 'SquadMember';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  joinDate?: Maybe<Scalars['DateTime']['output']>;
  leaveDate?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<SquadMember_Role>;
  squad?: Maybe<Squad>;
  streamer?: Maybe<Streamer>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum SquadMemberUpdate_Role_MutationInput {
  Core = 'core',
  ExMember = 'ex_member',
  Leader = 'leader',
  Secondary = 'secondary'
}

export type SquadMember_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SquadMember_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type SquadMember_JoinDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SquadMember_LeaveDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum SquadMember_Role {
  Core = 'core',
  ExMember = 'ex_member',
  Leader = 'leader',
  Secondary = 'secondary'
}

export enum SquadMember_Role_Input {
  Core = 'core',
  ExMember = 'ex_member',
  Leader = 'leader',
  Secondary = 'secondary'
}

export enum SquadMember_Role_MutationInput {
  Core = 'core',
  ExMember = 'ex_member',
  Leader = 'leader',
  Secondary = 'secondary'
}

export type SquadMember_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<SquadMember_Role_Input>>>;
  equals?: InputMaybe<SquadMember_Role_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<SquadMember_Role_Input>>>;
  not_equals?: InputMaybe<SquadMember_Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<SquadMember_Role_Input>>>;
};

export type SquadMember_Squad_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type SquadMember_Streamer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type SquadMember_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SquadMember_Where = {
  AND?: InputMaybe<Array<InputMaybe<SquadMember_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SquadMember_Where_Or>>>;
  createdAt?: InputMaybe<SquadMember_CreatedAt_Operator>;
  id?: InputMaybe<SquadMember_Id_Operator>;
  joinDate?: InputMaybe<SquadMember_JoinDate_Operator>;
  leaveDate?: InputMaybe<SquadMember_LeaveDate_Operator>;
  role?: InputMaybe<SquadMember_Role_Operator>;
  squad?: InputMaybe<SquadMember_Squad_Operator>;
  streamer?: InputMaybe<SquadMember_Streamer_Operator>;
  updatedAt?: InputMaybe<SquadMember_UpdatedAt_Operator>;
};

export type SquadMember_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<SquadMember_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SquadMember_Where_Or>>>;
  createdAt?: InputMaybe<SquadMember_CreatedAt_Operator>;
  id?: InputMaybe<SquadMember_Id_Operator>;
  joinDate?: InputMaybe<SquadMember_JoinDate_Operator>;
  leaveDate?: InputMaybe<SquadMember_LeaveDate_Operator>;
  role?: InputMaybe<SquadMember_Role_Operator>;
  squad?: InputMaybe<SquadMember_Squad_Operator>;
  streamer?: InputMaybe<SquadMember_Streamer_Operator>;
  updatedAt?: InputMaybe<SquadMember_UpdatedAt_Operator>;
};

export type SquadMember_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<SquadMember_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SquadMember_Where_Or>>>;
  createdAt?: InputMaybe<SquadMember_CreatedAt_Operator>;
  id?: InputMaybe<SquadMember_Id_Operator>;
  joinDate?: InputMaybe<SquadMember_JoinDate_Operator>;
  leaveDate?: InputMaybe<SquadMember_LeaveDate_Operator>;
  role?: InputMaybe<SquadMember_Role_Operator>;
  squad?: InputMaybe<SquadMember_Squad_Operator>;
  streamer?: InputMaybe<SquadMember_Streamer_Operator>;
  updatedAt?: InputMaybe<SquadMember_UpdatedAt_Operator>;
};

export type SquadMembers = {
  __typename?: 'SquadMembers';
  docs: Array<SquadMember>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type SquadMembersCreateAccess = {
  __typename?: 'SquadMembersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersCreateDocAccess = {
  __typename?: 'SquadMembersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersDeleteAccess = {
  __typename?: 'SquadMembersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersDeleteDocAccess = {
  __typename?: 'SquadMembersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersDocAccessFields = {
  __typename?: 'SquadMembersDocAccessFields';
  createdAt?: Maybe<SquadMembersDocAccessFields_CreatedAt>;
  joinDate?: Maybe<SquadMembersDocAccessFields_JoinDate>;
  leaveDate?: Maybe<SquadMembersDocAccessFields_LeaveDate>;
  role?: Maybe<SquadMembersDocAccessFields_Role>;
  squad?: Maybe<SquadMembersDocAccessFields_Squad>;
  streamer?: Maybe<SquadMembersDocAccessFields_Streamer>;
  updatedAt?: Maybe<SquadMembersDocAccessFields_UpdatedAt>;
};

export type SquadMembersDocAccessFields_CreatedAt = {
  __typename?: 'SquadMembersDocAccessFields_createdAt';
  create?: Maybe<SquadMembersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SquadMembersDocAccessFields_CreatedAt_Update>;
};

export type SquadMembersDocAccessFields_CreatedAt_Create = {
  __typename?: 'SquadMembersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SquadMembersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_CreatedAt_Read = {
  __typename?: 'SquadMembersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_CreatedAt_Update = {
  __typename?: 'SquadMembersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_JoinDate = {
  __typename?: 'SquadMembersDocAccessFields_joinDate';
  create?: Maybe<SquadMembersDocAccessFields_JoinDate_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_JoinDate_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_JoinDate_Read>;
  update?: Maybe<SquadMembersDocAccessFields_JoinDate_Update>;
};

export type SquadMembersDocAccessFields_JoinDate_Create = {
  __typename?: 'SquadMembersDocAccessFields_joinDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_JoinDate_Delete = {
  __typename?: 'SquadMembersDocAccessFields_joinDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_JoinDate_Read = {
  __typename?: 'SquadMembersDocAccessFields_joinDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_JoinDate_Update = {
  __typename?: 'SquadMembersDocAccessFields_joinDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_LeaveDate = {
  __typename?: 'SquadMembersDocAccessFields_leaveDate';
  create?: Maybe<SquadMembersDocAccessFields_LeaveDate_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_LeaveDate_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_LeaveDate_Read>;
  update?: Maybe<SquadMembersDocAccessFields_LeaveDate_Update>;
};

export type SquadMembersDocAccessFields_LeaveDate_Create = {
  __typename?: 'SquadMembersDocAccessFields_leaveDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_LeaveDate_Delete = {
  __typename?: 'SquadMembersDocAccessFields_leaveDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_LeaveDate_Read = {
  __typename?: 'SquadMembersDocAccessFields_leaveDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_LeaveDate_Update = {
  __typename?: 'SquadMembersDocAccessFields_leaveDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Role = {
  __typename?: 'SquadMembersDocAccessFields_role';
  create?: Maybe<SquadMembersDocAccessFields_Role_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_Role_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_Role_Read>;
  update?: Maybe<SquadMembersDocAccessFields_Role_Update>;
};

export type SquadMembersDocAccessFields_Role_Create = {
  __typename?: 'SquadMembersDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Role_Delete = {
  __typename?: 'SquadMembersDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Role_Read = {
  __typename?: 'SquadMembersDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Role_Update = {
  __typename?: 'SquadMembersDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Squad = {
  __typename?: 'SquadMembersDocAccessFields_squad';
  create?: Maybe<SquadMembersDocAccessFields_Squad_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_Squad_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_Squad_Read>;
  update?: Maybe<SquadMembersDocAccessFields_Squad_Update>;
};

export type SquadMembersDocAccessFields_Squad_Create = {
  __typename?: 'SquadMembersDocAccessFields_squad_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Squad_Delete = {
  __typename?: 'SquadMembersDocAccessFields_squad_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Squad_Read = {
  __typename?: 'SquadMembersDocAccessFields_squad_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Squad_Update = {
  __typename?: 'SquadMembersDocAccessFields_squad_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Streamer = {
  __typename?: 'SquadMembersDocAccessFields_streamer';
  create?: Maybe<SquadMembersDocAccessFields_Streamer_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_Streamer_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_Streamer_Read>;
  update?: Maybe<SquadMembersDocAccessFields_Streamer_Update>;
};

export type SquadMembersDocAccessFields_Streamer_Create = {
  __typename?: 'SquadMembersDocAccessFields_streamer_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Streamer_Delete = {
  __typename?: 'SquadMembersDocAccessFields_streamer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Streamer_Read = {
  __typename?: 'SquadMembersDocAccessFields_streamer_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_Streamer_Update = {
  __typename?: 'SquadMembersDocAccessFields_streamer_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_UpdatedAt = {
  __typename?: 'SquadMembersDocAccessFields_updatedAt';
  create?: Maybe<SquadMembersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SquadMembersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SquadMembersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SquadMembersDocAccessFields_UpdatedAt_Update>;
};

export type SquadMembersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SquadMembersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SquadMembersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SquadMembersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SquadMembersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields = {
  __typename?: 'SquadMembersFields';
  createdAt?: Maybe<SquadMembersFields_CreatedAt>;
  joinDate?: Maybe<SquadMembersFields_JoinDate>;
  leaveDate?: Maybe<SquadMembersFields_LeaveDate>;
  role?: Maybe<SquadMembersFields_Role>;
  squad?: Maybe<SquadMembersFields_Squad>;
  streamer?: Maybe<SquadMembersFields_Streamer>;
  updatedAt?: Maybe<SquadMembersFields_UpdatedAt>;
};

export type SquadMembersFields_CreatedAt = {
  __typename?: 'SquadMembersFields_createdAt';
  create?: Maybe<SquadMembersFields_CreatedAt_Create>;
  delete?: Maybe<SquadMembersFields_CreatedAt_Delete>;
  read?: Maybe<SquadMembersFields_CreatedAt_Read>;
  update?: Maybe<SquadMembersFields_CreatedAt_Update>;
};

export type SquadMembersFields_CreatedAt_Create = {
  __typename?: 'SquadMembersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_CreatedAt_Delete = {
  __typename?: 'SquadMembersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_CreatedAt_Read = {
  __typename?: 'SquadMembersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_CreatedAt_Update = {
  __typename?: 'SquadMembersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_JoinDate = {
  __typename?: 'SquadMembersFields_joinDate';
  create?: Maybe<SquadMembersFields_JoinDate_Create>;
  delete?: Maybe<SquadMembersFields_JoinDate_Delete>;
  read?: Maybe<SquadMembersFields_JoinDate_Read>;
  update?: Maybe<SquadMembersFields_JoinDate_Update>;
};

export type SquadMembersFields_JoinDate_Create = {
  __typename?: 'SquadMembersFields_joinDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_JoinDate_Delete = {
  __typename?: 'SquadMembersFields_joinDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_JoinDate_Read = {
  __typename?: 'SquadMembersFields_joinDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_JoinDate_Update = {
  __typename?: 'SquadMembersFields_joinDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_LeaveDate = {
  __typename?: 'SquadMembersFields_leaveDate';
  create?: Maybe<SquadMembersFields_LeaveDate_Create>;
  delete?: Maybe<SquadMembersFields_LeaveDate_Delete>;
  read?: Maybe<SquadMembersFields_LeaveDate_Read>;
  update?: Maybe<SquadMembersFields_LeaveDate_Update>;
};

export type SquadMembersFields_LeaveDate_Create = {
  __typename?: 'SquadMembersFields_leaveDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_LeaveDate_Delete = {
  __typename?: 'SquadMembersFields_leaveDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_LeaveDate_Read = {
  __typename?: 'SquadMembersFields_leaveDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_LeaveDate_Update = {
  __typename?: 'SquadMembersFields_leaveDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Role = {
  __typename?: 'SquadMembersFields_role';
  create?: Maybe<SquadMembersFields_Role_Create>;
  delete?: Maybe<SquadMembersFields_Role_Delete>;
  read?: Maybe<SquadMembersFields_Role_Read>;
  update?: Maybe<SquadMembersFields_Role_Update>;
};

export type SquadMembersFields_Role_Create = {
  __typename?: 'SquadMembersFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Role_Delete = {
  __typename?: 'SquadMembersFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Role_Read = {
  __typename?: 'SquadMembersFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Role_Update = {
  __typename?: 'SquadMembersFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Squad = {
  __typename?: 'SquadMembersFields_squad';
  create?: Maybe<SquadMembersFields_Squad_Create>;
  delete?: Maybe<SquadMembersFields_Squad_Delete>;
  read?: Maybe<SquadMembersFields_Squad_Read>;
  update?: Maybe<SquadMembersFields_Squad_Update>;
};

export type SquadMembersFields_Squad_Create = {
  __typename?: 'SquadMembersFields_squad_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Squad_Delete = {
  __typename?: 'SquadMembersFields_squad_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Squad_Read = {
  __typename?: 'SquadMembersFields_squad_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Squad_Update = {
  __typename?: 'SquadMembersFields_squad_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Streamer = {
  __typename?: 'SquadMembersFields_streamer';
  create?: Maybe<SquadMembersFields_Streamer_Create>;
  delete?: Maybe<SquadMembersFields_Streamer_Delete>;
  read?: Maybe<SquadMembersFields_Streamer_Read>;
  update?: Maybe<SquadMembersFields_Streamer_Update>;
};

export type SquadMembersFields_Streamer_Create = {
  __typename?: 'SquadMembersFields_streamer_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Streamer_Delete = {
  __typename?: 'SquadMembersFields_streamer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Streamer_Read = {
  __typename?: 'SquadMembersFields_streamer_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_Streamer_Update = {
  __typename?: 'SquadMembersFields_streamer_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_UpdatedAt = {
  __typename?: 'SquadMembersFields_updatedAt';
  create?: Maybe<SquadMembersFields_UpdatedAt_Create>;
  delete?: Maybe<SquadMembersFields_UpdatedAt_Delete>;
  read?: Maybe<SquadMembersFields_UpdatedAt_Read>;
  update?: Maybe<SquadMembersFields_UpdatedAt_Update>;
};

export type SquadMembersFields_UpdatedAt_Create = {
  __typename?: 'SquadMembersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_UpdatedAt_Delete = {
  __typename?: 'SquadMembersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_UpdatedAt_Read = {
  __typename?: 'SquadMembersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersFields_UpdatedAt_Update = {
  __typename?: 'SquadMembersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadMembersReadAccess = {
  __typename?: 'SquadMembersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersReadDocAccess = {
  __typename?: 'SquadMembersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersUpdateAccess = {
  __typename?: 'SquadMembersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadMembersUpdateDocAccess = {
  __typename?: 'SquadMembersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Squad_Epochs = {
  __typename?: 'Squad_Epochs';
  docs: Array<Epoch>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Squad_Members = {
  __typename?: 'Squad_Members';
  docs: Array<SquadMember>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Squad_Banner_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Squad_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Squad_History_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Squad_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Squad_Logo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Squad_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Squad_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Squad_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Squad_Where = {
  AND?: InputMaybe<Array<InputMaybe<Squad_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Squad_Where_Or>>>;
  banner?: InputMaybe<Squad_Banner_Operator>;
  createdAt?: InputMaybe<Squad_CreatedAt_Operator>;
  history?: InputMaybe<Squad_History_Operator>;
  id?: InputMaybe<Squad_Id_Operator>;
  logo?: InputMaybe<Squad_Logo_Operator>;
  name?: InputMaybe<Squad_Name_Operator>;
  slug?: InputMaybe<Squad_Slug_Operator>;
  updatedAt?: InputMaybe<Squad_UpdatedAt_Operator>;
};

export type Squad_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Squad_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Squad_Where_Or>>>;
  banner?: InputMaybe<Squad_Banner_Operator>;
  createdAt?: InputMaybe<Squad_CreatedAt_Operator>;
  history?: InputMaybe<Squad_History_Operator>;
  id?: InputMaybe<Squad_Id_Operator>;
  logo?: InputMaybe<Squad_Logo_Operator>;
  name?: InputMaybe<Squad_Name_Operator>;
  slug?: InputMaybe<Squad_Slug_Operator>;
  updatedAt?: InputMaybe<Squad_UpdatedAt_Operator>;
};

export type Squad_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Squad_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Squad_Where_Or>>>;
  banner?: InputMaybe<Squad_Banner_Operator>;
  createdAt?: InputMaybe<Squad_CreatedAt_Operator>;
  history?: InputMaybe<Squad_History_Operator>;
  id?: InputMaybe<Squad_Id_Operator>;
  logo?: InputMaybe<Squad_Logo_Operator>;
  name?: InputMaybe<Squad_Name_Operator>;
  slug?: InputMaybe<Squad_Slug_Operator>;
  updatedAt?: InputMaybe<Squad_UpdatedAt_Operator>;
};

export type Squads = {
  __typename?: 'Squads';
  docs: Array<Squad>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type SquadsCreateAccess = {
  __typename?: 'SquadsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsCreateDocAccess = {
  __typename?: 'SquadsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsDeleteAccess = {
  __typename?: 'SquadsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsDeleteDocAccess = {
  __typename?: 'SquadsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsDocAccessFields = {
  __typename?: 'SquadsDocAccessFields';
  banner?: Maybe<SquadsDocAccessFields_Banner>;
  createdAt?: Maybe<SquadsDocAccessFields_CreatedAt>;
  epochs?: Maybe<SquadsDocAccessFields_Epochs>;
  history?: Maybe<SquadsDocAccessFields_History>;
  logo?: Maybe<SquadsDocAccessFields_Logo>;
  members?: Maybe<SquadsDocAccessFields_Members>;
  name?: Maybe<SquadsDocAccessFields_Name>;
  slug?: Maybe<SquadsDocAccessFields_Slug>;
  updatedAt?: Maybe<SquadsDocAccessFields_UpdatedAt>;
};

export type SquadsDocAccessFields_Banner = {
  __typename?: 'SquadsDocAccessFields_banner';
  create?: Maybe<SquadsDocAccessFields_Banner_Create>;
  delete?: Maybe<SquadsDocAccessFields_Banner_Delete>;
  read?: Maybe<SquadsDocAccessFields_Banner_Read>;
  update?: Maybe<SquadsDocAccessFields_Banner_Update>;
};

export type SquadsDocAccessFields_Banner_Create = {
  __typename?: 'SquadsDocAccessFields_banner_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Banner_Delete = {
  __typename?: 'SquadsDocAccessFields_banner_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Banner_Read = {
  __typename?: 'SquadsDocAccessFields_banner_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Banner_Update = {
  __typename?: 'SquadsDocAccessFields_banner_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_CreatedAt = {
  __typename?: 'SquadsDocAccessFields_createdAt';
  create?: Maybe<SquadsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SquadsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SquadsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SquadsDocAccessFields_CreatedAt_Update>;
};

export type SquadsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SquadsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SquadsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SquadsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SquadsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Epochs = {
  __typename?: 'SquadsDocAccessFields_epochs';
  create?: Maybe<SquadsDocAccessFields_Epochs_Create>;
  delete?: Maybe<SquadsDocAccessFields_Epochs_Delete>;
  read?: Maybe<SquadsDocAccessFields_Epochs_Read>;
  update?: Maybe<SquadsDocAccessFields_Epochs_Update>;
};

export type SquadsDocAccessFields_Epochs_Create = {
  __typename?: 'SquadsDocAccessFields_epochs_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Epochs_Delete = {
  __typename?: 'SquadsDocAccessFields_epochs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Epochs_Read = {
  __typename?: 'SquadsDocAccessFields_epochs_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Epochs_Update = {
  __typename?: 'SquadsDocAccessFields_epochs_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_History = {
  __typename?: 'SquadsDocAccessFields_history';
  create?: Maybe<SquadsDocAccessFields_History_Create>;
  delete?: Maybe<SquadsDocAccessFields_History_Delete>;
  read?: Maybe<SquadsDocAccessFields_History_Read>;
  update?: Maybe<SquadsDocAccessFields_History_Update>;
};

export type SquadsDocAccessFields_History_Create = {
  __typename?: 'SquadsDocAccessFields_history_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_History_Delete = {
  __typename?: 'SquadsDocAccessFields_history_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_History_Read = {
  __typename?: 'SquadsDocAccessFields_history_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_History_Update = {
  __typename?: 'SquadsDocAccessFields_history_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Logo = {
  __typename?: 'SquadsDocAccessFields_logo';
  create?: Maybe<SquadsDocAccessFields_Logo_Create>;
  delete?: Maybe<SquadsDocAccessFields_Logo_Delete>;
  read?: Maybe<SquadsDocAccessFields_Logo_Read>;
  update?: Maybe<SquadsDocAccessFields_Logo_Update>;
};

export type SquadsDocAccessFields_Logo_Create = {
  __typename?: 'SquadsDocAccessFields_logo_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Logo_Delete = {
  __typename?: 'SquadsDocAccessFields_logo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Logo_Read = {
  __typename?: 'SquadsDocAccessFields_logo_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Logo_Update = {
  __typename?: 'SquadsDocAccessFields_logo_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Members = {
  __typename?: 'SquadsDocAccessFields_members';
  create?: Maybe<SquadsDocAccessFields_Members_Create>;
  delete?: Maybe<SquadsDocAccessFields_Members_Delete>;
  read?: Maybe<SquadsDocAccessFields_Members_Read>;
  update?: Maybe<SquadsDocAccessFields_Members_Update>;
};

export type SquadsDocAccessFields_Members_Create = {
  __typename?: 'SquadsDocAccessFields_members_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Members_Delete = {
  __typename?: 'SquadsDocAccessFields_members_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Members_Read = {
  __typename?: 'SquadsDocAccessFields_members_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Members_Update = {
  __typename?: 'SquadsDocAccessFields_members_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Name = {
  __typename?: 'SquadsDocAccessFields_name';
  create?: Maybe<SquadsDocAccessFields_Name_Create>;
  delete?: Maybe<SquadsDocAccessFields_Name_Delete>;
  read?: Maybe<SquadsDocAccessFields_Name_Read>;
  update?: Maybe<SquadsDocAccessFields_Name_Update>;
};

export type SquadsDocAccessFields_Name_Create = {
  __typename?: 'SquadsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Name_Delete = {
  __typename?: 'SquadsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Name_Read = {
  __typename?: 'SquadsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Name_Update = {
  __typename?: 'SquadsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Slug = {
  __typename?: 'SquadsDocAccessFields_slug';
  create?: Maybe<SquadsDocAccessFields_Slug_Create>;
  delete?: Maybe<SquadsDocAccessFields_Slug_Delete>;
  read?: Maybe<SquadsDocAccessFields_Slug_Read>;
  update?: Maybe<SquadsDocAccessFields_Slug_Update>;
};

export type SquadsDocAccessFields_Slug_Create = {
  __typename?: 'SquadsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Slug_Delete = {
  __typename?: 'SquadsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Slug_Read = {
  __typename?: 'SquadsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_Slug_Update = {
  __typename?: 'SquadsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_UpdatedAt = {
  __typename?: 'SquadsDocAccessFields_updatedAt';
  create?: Maybe<SquadsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SquadsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SquadsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SquadsDocAccessFields_UpdatedAt_Update>;
};

export type SquadsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SquadsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SquadsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SquadsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SquadsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields = {
  __typename?: 'SquadsFields';
  banner?: Maybe<SquadsFields_Banner>;
  createdAt?: Maybe<SquadsFields_CreatedAt>;
  epochs?: Maybe<SquadsFields_Epochs>;
  history?: Maybe<SquadsFields_History>;
  logo?: Maybe<SquadsFields_Logo>;
  members?: Maybe<SquadsFields_Members>;
  name?: Maybe<SquadsFields_Name>;
  slug?: Maybe<SquadsFields_Slug>;
  updatedAt?: Maybe<SquadsFields_UpdatedAt>;
};

export type SquadsFields_Banner = {
  __typename?: 'SquadsFields_banner';
  create?: Maybe<SquadsFields_Banner_Create>;
  delete?: Maybe<SquadsFields_Banner_Delete>;
  read?: Maybe<SquadsFields_Banner_Read>;
  update?: Maybe<SquadsFields_Banner_Update>;
};

export type SquadsFields_Banner_Create = {
  __typename?: 'SquadsFields_banner_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Banner_Delete = {
  __typename?: 'SquadsFields_banner_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Banner_Read = {
  __typename?: 'SquadsFields_banner_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Banner_Update = {
  __typename?: 'SquadsFields_banner_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_CreatedAt = {
  __typename?: 'SquadsFields_createdAt';
  create?: Maybe<SquadsFields_CreatedAt_Create>;
  delete?: Maybe<SquadsFields_CreatedAt_Delete>;
  read?: Maybe<SquadsFields_CreatedAt_Read>;
  update?: Maybe<SquadsFields_CreatedAt_Update>;
};

export type SquadsFields_CreatedAt_Create = {
  __typename?: 'SquadsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_CreatedAt_Delete = {
  __typename?: 'SquadsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_CreatedAt_Read = {
  __typename?: 'SquadsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_CreatedAt_Update = {
  __typename?: 'SquadsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Epochs = {
  __typename?: 'SquadsFields_epochs';
  create?: Maybe<SquadsFields_Epochs_Create>;
  delete?: Maybe<SquadsFields_Epochs_Delete>;
  read?: Maybe<SquadsFields_Epochs_Read>;
  update?: Maybe<SquadsFields_Epochs_Update>;
};

export type SquadsFields_Epochs_Create = {
  __typename?: 'SquadsFields_epochs_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Epochs_Delete = {
  __typename?: 'SquadsFields_epochs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Epochs_Read = {
  __typename?: 'SquadsFields_epochs_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Epochs_Update = {
  __typename?: 'SquadsFields_epochs_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_History = {
  __typename?: 'SquadsFields_history';
  create?: Maybe<SquadsFields_History_Create>;
  delete?: Maybe<SquadsFields_History_Delete>;
  read?: Maybe<SquadsFields_History_Read>;
  update?: Maybe<SquadsFields_History_Update>;
};

export type SquadsFields_History_Create = {
  __typename?: 'SquadsFields_history_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_History_Delete = {
  __typename?: 'SquadsFields_history_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_History_Read = {
  __typename?: 'SquadsFields_history_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_History_Update = {
  __typename?: 'SquadsFields_history_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Logo = {
  __typename?: 'SquadsFields_logo';
  create?: Maybe<SquadsFields_Logo_Create>;
  delete?: Maybe<SquadsFields_Logo_Delete>;
  read?: Maybe<SquadsFields_Logo_Read>;
  update?: Maybe<SquadsFields_Logo_Update>;
};

export type SquadsFields_Logo_Create = {
  __typename?: 'SquadsFields_logo_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Logo_Delete = {
  __typename?: 'SquadsFields_logo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Logo_Read = {
  __typename?: 'SquadsFields_logo_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Logo_Update = {
  __typename?: 'SquadsFields_logo_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Members = {
  __typename?: 'SquadsFields_members';
  create?: Maybe<SquadsFields_Members_Create>;
  delete?: Maybe<SquadsFields_Members_Delete>;
  read?: Maybe<SquadsFields_Members_Read>;
  update?: Maybe<SquadsFields_Members_Update>;
};

export type SquadsFields_Members_Create = {
  __typename?: 'SquadsFields_members_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Members_Delete = {
  __typename?: 'SquadsFields_members_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Members_Read = {
  __typename?: 'SquadsFields_members_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Members_Update = {
  __typename?: 'SquadsFields_members_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Name = {
  __typename?: 'SquadsFields_name';
  create?: Maybe<SquadsFields_Name_Create>;
  delete?: Maybe<SquadsFields_Name_Delete>;
  read?: Maybe<SquadsFields_Name_Read>;
  update?: Maybe<SquadsFields_Name_Update>;
};

export type SquadsFields_Name_Create = {
  __typename?: 'SquadsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Name_Delete = {
  __typename?: 'SquadsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Name_Read = {
  __typename?: 'SquadsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Name_Update = {
  __typename?: 'SquadsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Slug = {
  __typename?: 'SquadsFields_slug';
  create?: Maybe<SquadsFields_Slug_Create>;
  delete?: Maybe<SquadsFields_Slug_Delete>;
  read?: Maybe<SquadsFields_Slug_Read>;
  update?: Maybe<SquadsFields_Slug_Update>;
};

export type SquadsFields_Slug_Create = {
  __typename?: 'SquadsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Slug_Delete = {
  __typename?: 'SquadsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Slug_Read = {
  __typename?: 'SquadsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_Slug_Update = {
  __typename?: 'SquadsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_UpdatedAt = {
  __typename?: 'SquadsFields_updatedAt';
  create?: Maybe<SquadsFields_UpdatedAt_Create>;
  delete?: Maybe<SquadsFields_UpdatedAt_Delete>;
  read?: Maybe<SquadsFields_UpdatedAt_Read>;
  update?: Maybe<SquadsFields_UpdatedAt_Update>;
};

export type SquadsFields_UpdatedAt_Create = {
  __typename?: 'SquadsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_UpdatedAt_Delete = {
  __typename?: 'SquadsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_UpdatedAt_Read = {
  __typename?: 'SquadsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SquadsFields_UpdatedAt_Update = {
  __typename?: 'SquadsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SquadsReadAccess = {
  __typename?: 'SquadsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsReadDocAccess = {
  __typename?: 'SquadsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsUpdateAccess = {
  __typename?: 'SquadsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SquadsUpdateDocAccess = {
  __typename?: 'SquadsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGrid = {
  __typename?: 'StreamGrid';
  cover?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateEnd?: Maybe<Scalars['DateTime']['output']>;
  dateStart?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  events?: Maybe<StreamGrid_Events>;
  id: Scalars['Int']['output'];
  participants?: Maybe<Array<StreamGrid_Participants>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: StreamGrid_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type StreamGridDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type StreamGridEventsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Event_Where>;
};

export enum StreamGridUpdate_Participants_Role_MutationInput {
  Guest = 'guest',
  Headliner = 'headliner',
  Organizer = 'organizer',
  Participant = 'participant'
}

export enum StreamGridUpdate_Type_MutationInput {
  Collab = 'collab',
  Festival = 'festival',
  Marathon = 'marathon',
  Series = 'series',
  Tournament = 'tournament'
}

export type StreamGrid_Events = {
  __typename?: 'StreamGrid_Events';
  docs: Array<Event>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type StreamGrid_Participants = {
  __typename?: 'StreamGrid_Participants';
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  role?: Maybe<StreamGrid_Participants_Role>;
  streamer?: Maybe<Streamer>;
};

export enum StreamGrid_Participants_Role {
  Guest = 'guest',
  Headliner = 'headliner',
  Organizer = 'organizer',
  Participant = 'participant'
}

export enum StreamGrid_Participants_Role_MutationInput {
  Guest = 'guest',
  Headliner = 'headliner',
  Organizer = 'organizer',
  Participant = 'participant'
}

export type StreamGrid_Cover_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type StreamGrid_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StreamGrid_DateEnd_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StreamGrid_DateStart_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StreamGrid_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type StreamGrid_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type StreamGrid_Participants__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StreamGrid_Participants__Note_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export enum StreamGrid_Participants__Role_Input {
  Guest = 'guest',
  Headliner = 'headliner',
  Organizer = 'organizer',
  Participant = 'participant'
}

export type StreamGrid_Participants__Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<StreamGrid_Participants__Role_Input>>>;
  equals?: InputMaybe<StreamGrid_Participants__Role_Input>;
  in?: InputMaybe<Array<InputMaybe<StreamGrid_Participants__Role_Input>>>;
  not_equals?: InputMaybe<StreamGrid_Participants__Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<StreamGrid_Participants__Role_Input>>>;
};

export type StreamGrid_Participants__Streamer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type StreamGrid_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StreamGrid_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum StreamGrid_Type {
  Collab = 'collab',
  Festival = 'festival',
  Marathon = 'marathon',
  Series = 'series',
  Tournament = 'tournament'
}

export enum StreamGrid_Type_Input {
  Collab = 'collab',
  Festival = 'festival',
  Marathon = 'marathon',
  Series = 'series',
  Tournament = 'tournament'
}

export enum StreamGrid_Type_MutationInput {
  Collab = 'collab',
  Festival = 'festival',
  Marathon = 'marathon',
  Series = 'series',
  Tournament = 'tournament'
}

export type StreamGrid_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<StreamGrid_Type_Input>>>;
  equals?: InputMaybe<StreamGrid_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<StreamGrid_Type_Input>>>;
  not_equals?: InputMaybe<StreamGrid_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<StreamGrid_Type_Input>>>;
};

export type StreamGrid_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StreamGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<StreamGrid_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<StreamGrid_Where_Or>>>;
  cover?: InputMaybe<StreamGrid_Cover_Operator>;
  createdAt?: InputMaybe<StreamGrid_CreatedAt_Operator>;
  dateEnd?: InputMaybe<StreamGrid_DateEnd_Operator>;
  dateStart?: InputMaybe<StreamGrid_DateStart_Operator>;
  description?: InputMaybe<StreamGrid_Description_Operator>;
  id?: InputMaybe<StreamGrid_Id_Operator>;
  participants__id?: InputMaybe<StreamGrid_Participants__Id_Operator>;
  participants__note?: InputMaybe<StreamGrid_Participants__Note_Operator>;
  participants__role?: InputMaybe<StreamGrid_Participants__Role_Operator>;
  participants__streamer?: InputMaybe<StreamGrid_Participants__Streamer_Operator>;
  slug?: InputMaybe<StreamGrid_Slug_Operator>;
  title?: InputMaybe<StreamGrid_Title_Operator>;
  type?: InputMaybe<StreamGrid_Type_Operator>;
  updatedAt?: InputMaybe<StreamGrid_UpdatedAt_Operator>;
};

export type StreamGrid_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<StreamGrid_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<StreamGrid_Where_Or>>>;
  cover?: InputMaybe<StreamGrid_Cover_Operator>;
  createdAt?: InputMaybe<StreamGrid_CreatedAt_Operator>;
  dateEnd?: InputMaybe<StreamGrid_DateEnd_Operator>;
  dateStart?: InputMaybe<StreamGrid_DateStart_Operator>;
  description?: InputMaybe<StreamGrid_Description_Operator>;
  id?: InputMaybe<StreamGrid_Id_Operator>;
  participants__id?: InputMaybe<StreamGrid_Participants__Id_Operator>;
  participants__note?: InputMaybe<StreamGrid_Participants__Note_Operator>;
  participants__role?: InputMaybe<StreamGrid_Participants__Role_Operator>;
  participants__streamer?: InputMaybe<StreamGrid_Participants__Streamer_Operator>;
  slug?: InputMaybe<StreamGrid_Slug_Operator>;
  title?: InputMaybe<StreamGrid_Title_Operator>;
  type?: InputMaybe<StreamGrid_Type_Operator>;
  updatedAt?: InputMaybe<StreamGrid_UpdatedAt_Operator>;
};

export type StreamGrid_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<StreamGrid_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<StreamGrid_Where_Or>>>;
  cover?: InputMaybe<StreamGrid_Cover_Operator>;
  createdAt?: InputMaybe<StreamGrid_CreatedAt_Operator>;
  dateEnd?: InputMaybe<StreamGrid_DateEnd_Operator>;
  dateStart?: InputMaybe<StreamGrid_DateStart_Operator>;
  description?: InputMaybe<StreamGrid_Description_Operator>;
  id?: InputMaybe<StreamGrid_Id_Operator>;
  participants__id?: InputMaybe<StreamGrid_Participants__Id_Operator>;
  participants__note?: InputMaybe<StreamGrid_Participants__Note_Operator>;
  participants__role?: InputMaybe<StreamGrid_Participants__Role_Operator>;
  participants__streamer?: InputMaybe<StreamGrid_Participants__Streamer_Operator>;
  slug?: InputMaybe<StreamGrid_Slug_Operator>;
  title?: InputMaybe<StreamGrid_Title_Operator>;
  type?: InputMaybe<StreamGrid_Type_Operator>;
  updatedAt?: InputMaybe<StreamGrid_UpdatedAt_Operator>;
};

export type StreamGrids = {
  __typename?: 'StreamGrids';
  docs: Array<StreamGrid>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type StreamGridsCreateAccess = {
  __typename?: 'StreamGridsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsCreateDocAccess = {
  __typename?: 'StreamGridsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsDeleteAccess = {
  __typename?: 'StreamGridsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsDeleteDocAccess = {
  __typename?: 'StreamGridsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsDocAccessFields = {
  __typename?: 'StreamGridsDocAccessFields';
  cover?: Maybe<StreamGridsDocAccessFields_Cover>;
  createdAt?: Maybe<StreamGridsDocAccessFields_CreatedAt>;
  dateEnd?: Maybe<StreamGridsDocAccessFields_DateEnd>;
  dateStart?: Maybe<StreamGridsDocAccessFields_DateStart>;
  description?: Maybe<StreamGridsDocAccessFields_Description>;
  events?: Maybe<StreamGridsDocAccessFields_Events>;
  participants?: Maybe<StreamGridsDocAccessFields_Participants>;
  slug?: Maybe<StreamGridsDocAccessFields_Slug>;
  title?: Maybe<StreamGridsDocAccessFields_Title>;
  type?: Maybe<StreamGridsDocAccessFields_Type>;
  updatedAt?: Maybe<StreamGridsDocAccessFields_UpdatedAt>;
};

export type StreamGridsDocAccessFields_Cover = {
  __typename?: 'StreamGridsDocAccessFields_cover';
  create?: Maybe<StreamGridsDocAccessFields_Cover_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Cover_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Cover_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Cover_Update>;
};

export type StreamGridsDocAccessFields_Cover_Create = {
  __typename?: 'StreamGridsDocAccessFields_cover_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Cover_Delete = {
  __typename?: 'StreamGridsDocAccessFields_cover_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Cover_Read = {
  __typename?: 'StreamGridsDocAccessFields_cover_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Cover_Update = {
  __typename?: 'StreamGridsDocAccessFields_cover_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_CreatedAt = {
  __typename?: 'StreamGridsDocAccessFields_createdAt';
  create?: Maybe<StreamGridsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<StreamGridsDocAccessFields_CreatedAt_Update>;
};

export type StreamGridsDocAccessFields_CreatedAt_Create = {
  __typename?: 'StreamGridsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'StreamGridsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_CreatedAt_Read = {
  __typename?: 'StreamGridsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_CreatedAt_Update = {
  __typename?: 'StreamGridsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateEnd = {
  __typename?: 'StreamGridsDocAccessFields_dateEnd';
  create?: Maybe<StreamGridsDocAccessFields_DateEnd_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_DateEnd_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_DateEnd_Read>;
  update?: Maybe<StreamGridsDocAccessFields_DateEnd_Update>;
};

export type StreamGridsDocAccessFields_DateEnd_Create = {
  __typename?: 'StreamGridsDocAccessFields_dateEnd_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateEnd_Delete = {
  __typename?: 'StreamGridsDocAccessFields_dateEnd_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateEnd_Read = {
  __typename?: 'StreamGridsDocAccessFields_dateEnd_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateEnd_Update = {
  __typename?: 'StreamGridsDocAccessFields_dateEnd_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateStart = {
  __typename?: 'StreamGridsDocAccessFields_dateStart';
  create?: Maybe<StreamGridsDocAccessFields_DateStart_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_DateStart_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_DateStart_Read>;
  update?: Maybe<StreamGridsDocAccessFields_DateStart_Update>;
};

export type StreamGridsDocAccessFields_DateStart_Create = {
  __typename?: 'StreamGridsDocAccessFields_dateStart_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateStart_Delete = {
  __typename?: 'StreamGridsDocAccessFields_dateStart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateStart_Read = {
  __typename?: 'StreamGridsDocAccessFields_dateStart_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_DateStart_Update = {
  __typename?: 'StreamGridsDocAccessFields_dateStart_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Description = {
  __typename?: 'StreamGridsDocAccessFields_description';
  create?: Maybe<StreamGridsDocAccessFields_Description_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Description_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Description_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Description_Update>;
};

export type StreamGridsDocAccessFields_Description_Create = {
  __typename?: 'StreamGridsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Description_Delete = {
  __typename?: 'StreamGridsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Description_Read = {
  __typename?: 'StreamGridsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Description_Update = {
  __typename?: 'StreamGridsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Events = {
  __typename?: 'StreamGridsDocAccessFields_events';
  create?: Maybe<StreamGridsDocAccessFields_Events_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Events_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Events_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Events_Update>;
};

export type StreamGridsDocAccessFields_Events_Create = {
  __typename?: 'StreamGridsDocAccessFields_events_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Events_Delete = {
  __typename?: 'StreamGridsDocAccessFields_events_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Events_Read = {
  __typename?: 'StreamGridsDocAccessFields_events_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Events_Update = {
  __typename?: 'StreamGridsDocAccessFields_events_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants = {
  __typename?: 'StreamGridsDocAccessFields_participants';
  create?: Maybe<StreamGridsDocAccessFields_Participants_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Participants_Delete>;
  fields?: Maybe<StreamGridsDocAccessFields_Participants_Fields>;
  read?: Maybe<StreamGridsDocAccessFields_Participants_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Participants_Update>;
};

export type StreamGridsDocAccessFields_Participants_Create = {
  __typename?: 'StreamGridsDocAccessFields_participants_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Delete = {
  __typename?: 'StreamGridsDocAccessFields_participants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Fields = {
  __typename?: 'StreamGridsDocAccessFields_participants_Fields';
  id?: Maybe<StreamGridsDocAccessFields_Participants_Id>;
  note?: Maybe<StreamGridsDocAccessFields_Participants_Note>;
  role?: Maybe<StreamGridsDocAccessFields_Participants_Role>;
  streamer?: Maybe<StreamGridsDocAccessFields_Participants_Streamer>;
};

export type StreamGridsDocAccessFields_Participants_Read = {
  __typename?: 'StreamGridsDocAccessFields_participants_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Update = {
  __typename?: 'StreamGridsDocAccessFields_participants_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Id = {
  __typename?: 'StreamGridsDocAccessFields_participants_id';
  create?: Maybe<StreamGridsDocAccessFields_Participants_Id_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Participants_Id_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Participants_Id_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Participants_Id_Update>;
};

export type StreamGridsDocAccessFields_Participants_Id_Create = {
  __typename?: 'StreamGridsDocAccessFields_participants_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Id_Delete = {
  __typename?: 'StreamGridsDocAccessFields_participants_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Id_Read = {
  __typename?: 'StreamGridsDocAccessFields_participants_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Id_Update = {
  __typename?: 'StreamGridsDocAccessFields_participants_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Note = {
  __typename?: 'StreamGridsDocAccessFields_participants_note';
  create?: Maybe<StreamGridsDocAccessFields_Participants_Note_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Participants_Note_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Participants_Note_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Participants_Note_Update>;
};

export type StreamGridsDocAccessFields_Participants_Note_Create = {
  __typename?: 'StreamGridsDocAccessFields_participants_note_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Note_Delete = {
  __typename?: 'StreamGridsDocAccessFields_participants_note_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Note_Read = {
  __typename?: 'StreamGridsDocAccessFields_participants_note_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Note_Update = {
  __typename?: 'StreamGridsDocAccessFields_participants_note_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Role = {
  __typename?: 'StreamGridsDocAccessFields_participants_role';
  create?: Maybe<StreamGridsDocAccessFields_Participants_Role_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Participants_Role_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Participants_Role_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Participants_Role_Update>;
};

export type StreamGridsDocAccessFields_Participants_Role_Create = {
  __typename?: 'StreamGridsDocAccessFields_participants_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Role_Delete = {
  __typename?: 'StreamGridsDocAccessFields_participants_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Role_Read = {
  __typename?: 'StreamGridsDocAccessFields_participants_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Role_Update = {
  __typename?: 'StreamGridsDocAccessFields_participants_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Streamer = {
  __typename?: 'StreamGridsDocAccessFields_participants_streamer';
  create?: Maybe<StreamGridsDocAccessFields_Participants_Streamer_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Participants_Streamer_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Participants_Streamer_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Participants_Streamer_Update>;
};

export type StreamGridsDocAccessFields_Participants_Streamer_Create = {
  __typename?: 'StreamGridsDocAccessFields_participants_streamer_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Streamer_Delete = {
  __typename?: 'StreamGridsDocAccessFields_participants_streamer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Streamer_Read = {
  __typename?: 'StreamGridsDocAccessFields_participants_streamer_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Participants_Streamer_Update = {
  __typename?: 'StreamGridsDocAccessFields_participants_streamer_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Slug = {
  __typename?: 'StreamGridsDocAccessFields_slug';
  create?: Maybe<StreamGridsDocAccessFields_Slug_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Slug_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Slug_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Slug_Update>;
};

export type StreamGridsDocAccessFields_Slug_Create = {
  __typename?: 'StreamGridsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Slug_Delete = {
  __typename?: 'StreamGridsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Slug_Read = {
  __typename?: 'StreamGridsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Slug_Update = {
  __typename?: 'StreamGridsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Title = {
  __typename?: 'StreamGridsDocAccessFields_title';
  create?: Maybe<StreamGridsDocAccessFields_Title_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Title_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Title_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Title_Update>;
};

export type StreamGridsDocAccessFields_Title_Create = {
  __typename?: 'StreamGridsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Title_Delete = {
  __typename?: 'StreamGridsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Title_Read = {
  __typename?: 'StreamGridsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Title_Update = {
  __typename?: 'StreamGridsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Type = {
  __typename?: 'StreamGridsDocAccessFields_type';
  create?: Maybe<StreamGridsDocAccessFields_Type_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_Type_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_Type_Read>;
  update?: Maybe<StreamGridsDocAccessFields_Type_Update>;
};

export type StreamGridsDocAccessFields_Type_Create = {
  __typename?: 'StreamGridsDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Type_Delete = {
  __typename?: 'StreamGridsDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Type_Read = {
  __typename?: 'StreamGridsDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_Type_Update = {
  __typename?: 'StreamGridsDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_UpdatedAt = {
  __typename?: 'StreamGridsDocAccessFields_updatedAt';
  create?: Maybe<StreamGridsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<StreamGridsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<StreamGridsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<StreamGridsDocAccessFields_UpdatedAt_Update>;
};

export type StreamGridsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'StreamGridsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'StreamGridsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'StreamGridsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'StreamGridsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields = {
  __typename?: 'StreamGridsFields';
  cover?: Maybe<StreamGridsFields_Cover>;
  createdAt?: Maybe<StreamGridsFields_CreatedAt>;
  dateEnd?: Maybe<StreamGridsFields_DateEnd>;
  dateStart?: Maybe<StreamGridsFields_DateStart>;
  description?: Maybe<StreamGridsFields_Description>;
  events?: Maybe<StreamGridsFields_Events>;
  participants?: Maybe<StreamGridsFields_Participants>;
  slug?: Maybe<StreamGridsFields_Slug>;
  title?: Maybe<StreamGridsFields_Title>;
  type?: Maybe<StreamGridsFields_Type>;
  updatedAt?: Maybe<StreamGridsFields_UpdatedAt>;
};

export type StreamGridsFields_Cover = {
  __typename?: 'StreamGridsFields_cover';
  create?: Maybe<StreamGridsFields_Cover_Create>;
  delete?: Maybe<StreamGridsFields_Cover_Delete>;
  read?: Maybe<StreamGridsFields_Cover_Read>;
  update?: Maybe<StreamGridsFields_Cover_Update>;
};

export type StreamGridsFields_Cover_Create = {
  __typename?: 'StreamGridsFields_cover_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Cover_Delete = {
  __typename?: 'StreamGridsFields_cover_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Cover_Read = {
  __typename?: 'StreamGridsFields_cover_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Cover_Update = {
  __typename?: 'StreamGridsFields_cover_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_CreatedAt = {
  __typename?: 'StreamGridsFields_createdAt';
  create?: Maybe<StreamGridsFields_CreatedAt_Create>;
  delete?: Maybe<StreamGridsFields_CreatedAt_Delete>;
  read?: Maybe<StreamGridsFields_CreatedAt_Read>;
  update?: Maybe<StreamGridsFields_CreatedAt_Update>;
};

export type StreamGridsFields_CreatedAt_Create = {
  __typename?: 'StreamGridsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_CreatedAt_Delete = {
  __typename?: 'StreamGridsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_CreatedAt_Read = {
  __typename?: 'StreamGridsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_CreatedAt_Update = {
  __typename?: 'StreamGridsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateEnd = {
  __typename?: 'StreamGridsFields_dateEnd';
  create?: Maybe<StreamGridsFields_DateEnd_Create>;
  delete?: Maybe<StreamGridsFields_DateEnd_Delete>;
  read?: Maybe<StreamGridsFields_DateEnd_Read>;
  update?: Maybe<StreamGridsFields_DateEnd_Update>;
};

export type StreamGridsFields_DateEnd_Create = {
  __typename?: 'StreamGridsFields_dateEnd_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateEnd_Delete = {
  __typename?: 'StreamGridsFields_dateEnd_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateEnd_Read = {
  __typename?: 'StreamGridsFields_dateEnd_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateEnd_Update = {
  __typename?: 'StreamGridsFields_dateEnd_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateStart = {
  __typename?: 'StreamGridsFields_dateStart';
  create?: Maybe<StreamGridsFields_DateStart_Create>;
  delete?: Maybe<StreamGridsFields_DateStart_Delete>;
  read?: Maybe<StreamGridsFields_DateStart_Read>;
  update?: Maybe<StreamGridsFields_DateStart_Update>;
};

export type StreamGridsFields_DateStart_Create = {
  __typename?: 'StreamGridsFields_dateStart_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateStart_Delete = {
  __typename?: 'StreamGridsFields_dateStart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateStart_Read = {
  __typename?: 'StreamGridsFields_dateStart_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_DateStart_Update = {
  __typename?: 'StreamGridsFields_dateStart_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Description = {
  __typename?: 'StreamGridsFields_description';
  create?: Maybe<StreamGridsFields_Description_Create>;
  delete?: Maybe<StreamGridsFields_Description_Delete>;
  read?: Maybe<StreamGridsFields_Description_Read>;
  update?: Maybe<StreamGridsFields_Description_Update>;
};

export type StreamGridsFields_Description_Create = {
  __typename?: 'StreamGridsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Description_Delete = {
  __typename?: 'StreamGridsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Description_Read = {
  __typename?: 'StreamGridsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Description_Update = {
  __typename?: 'StreamGridsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Events = {
  __typename?: 'StreamGridsFields_events';
  create?: Maybe<StreamGridsFields_Events_Create>;
  delete?: Maybe<StreamGridsFields_Events_Delete>;
  read?: Maybe<StreamGridsFields_Events_Read>;
  update?: Maybe<StreamGridsFields_Events_Update>;
};

export type StreamGridsFields_Events_Create = {
  __typename?: 'StreamGridsFields_events_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Events_Delete = {
  __typename?: 'StreamGridsFields_events_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Events_Read = {
  __typename?: 'StreamGridsFields_events_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Events_Update = {
  __typename?: 'StreamGridsFields_events_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants = {
  __typename?: 'StreamGridsFields_participants';
  create?: Maybe<StreamGridsFields_Participants_Create>;
  delete?: Maybe<StreamGridsFields_Participants_Delete>;
  fields?: Maybe<StreamGridsFields_Participants_Fields>;
  read?: Maybe<StreamGridsFields_Participants_Read>;
  update?: Maybe<StreamGridsFields_Participants_Update>;
};

export type StreamGridsFields_Participants_Create = {
  __typename?: 'StreamGridsFields_participants_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Delete = {
  __typename?: 'StreamGridsFields_participants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Fields = {
  __typename?: 'StreamGridsFields_participants_Fields';
  id?: Maybe<StreamGridsFields_Participants_Id>;
  note?: Maybe<StreamGridsFields_Participants_Note>;
  role?: Maybe<StreamGridsFields_Participants_Role>;
  streamer?: Maybe<StreamGridsFields_Participants_Streamer>;
};

export type StreamGridsFields_Participants_Read = {
  __typename?: 'StreamGridsFields_participants_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Update = {
  __typename?: 'StreamGridsFields_participants_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Id = {
  __typename?: 'StreamGridsFields_participants_id';
  create?: Maybe<StreamGridsFields_Participants_Id_Create>;
  delete?: Maybe<StreamGridsFields_Participants_Id_Delete>;
  read?: Maybe<StreamGridsFields_Participants_Id_Read>;
  update?: Maybe<StreamGridsFields_Participants_Id_Update>;
};

export type StreamGridsFields_Participants_Id_Create = {
  __typename?: 'StreamGridsFields_participants_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Id_Delete = {
  __typename?: 'StreamGridsFields_participants_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Id_Read = {
  __typename?: 'StreamGridsFields_participants_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Id_Update = {
  __typename?: 'StreamGridsFields_participants_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Note = {
  __typename?: 'StreamGridsFields_participants_note';
  create?: Maybe<StreamGridsFields_Participants_Note_Create>;
  delete?: Maybe<StreamGridsFields_Participants_Note_Delete>;
  read?: Maybe<StreamGridsFields_Participants_Note_Read>;
  update?: Maybe<StreamGridsFields_Participants_Note_Update>;
};

export type StreamGridsFields_Participants_Note_Create = {
  __typename?: 'StreamGridsFields_participants_note_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Note_Delete = {
  __typename?: 'StreamGridsFields_participants_note_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Note_Read = {
  __typename?: 'StreamGridsFields_participants_note_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Note_Update = {
  __typename?: 'StreamGridsFields_participants_note_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Role = {
  __typename?: 'StreamGridsFields_participants_role';
  create?: Maybe<StreamGridsFields_Participants_Role_Create>;
  delete?: Maybe<StreamGridsFields_Participants_Role_Delete>;
  read?: Maybe<StreamGridsFields_Participants_Role_Read>;
  update?: Maybe<StreamGridsFields_Participants_Role_Update>;
};

export type StreamGridsFields_Participants_Role_Create = {
  __typename?: 'StreamGridsFields_participants_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Role_Delete = {
  __typename?: 'StreamGridsFields_participants_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Role_Read = {
  __typename?: 'StreamGridsFields_participants_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Role_Update = {
  __typename?: 'StreamGridsFields_participants_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Streamer = {
  __typename?: 'StreamGridsFields_participants_streamer';
  create?: Maybe<StreamGridsFields_Participants_Streamer_Create>;
  delete?: Maybe<StreamGridsFields_Participants_Streamer_Delete>;
  read?: Maybe<StreamGridsFields_Participants_Streamer_Read>;
  update?: Maybe<StreamGridsFields_Participants_Streamer_Update>;
};

export type StreamGridsFields_Participants_Streamer_Create = {
  __typename?: 'StreamGridsFields_participants_streamer_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Streamer_Delete = {
  __typename?: 'StreamGridsFields_participants_streamer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Streamer_Read = {
  __typename?: 'StreamGridsFields_participants_streamer_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Participants_Streamer_Update = {
  __typename?: 'StreamGridsFields_participants_streamer_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Slug = {
  __typename?: 'StreamGridsFields_slug';
  create?: Maybe<StreamGridsFields_Slug_Create>;
  delete?: Maybe<StreamGridsFields_Slug_Delete>;
  read?: Maybe<StreamGridsFields_Slug_Read>;
  update?: Maybe<StreamGridsFields_Slug_Update>;
};

export type StreamGridsFields_Slug_Create = {
  __typename?: 'StreamGridsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Slug_Delete = {
  __typename?: 'StreamGridsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Slug_Read = {
  __typename?: 'StreamGridsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Slug_Update = {
  __typename?: 'StreamGridsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Title = {
  __typename?: 'StreamGridsFields_title';
  create?: Maybe<StreamGridsFields_Title_Create>;
  delete?: Maybe<StreamGridsFields_Title_Delete>;
  read?: Maybe<StreamGridsFields_Title_Read>;
  update?: Maybe<StreamGridsFields_Title_Update>;
};

export type StreamGridsFields_Title_Create = {
  __typename?: 'StreamGridsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Title_Delete = {
  __typename?: 'StreamGridsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Title_Read = {
  __typename?: 'StreamGridsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Title_Update = {
  __typename?: 'StreamGridsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Type = {
  __typename?: 'StreamGridsFields_type';
  create?: Maybe<StreamGridsFields_Type_Create>;
  delete?: Maybe<StreamGridsFields_Type_Delete>;
  read?: Maybe<StreamGridsFields_Type_Read>;
  update?: Maybe<StreamGridsFields_Type_Update>;
};

export type StreamGridsFields_Type_Create = {
  __typename?: 'StreamGridsFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Type_Delete = {
  __typename?: 'StreamGridsFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Type_Read = {
  __typename?: 'StreamGridsFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_Type_Update = {
  __typename?: 'StreamGridsFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_UpdatedAt = {
  __typename?: 'StreamGridsFields_updatedAt';
  create?: Maybe<StreamGridsFields_UpdatedAt_Create>;
  delete?: Maybe<StreamGridsFields_UpdatedAt_Delete>;
  read?: Maybe<StreamGridsFields_UpdatedAt_Read>;
  update?: Maybe<StreamGridsFields_UpdatedAt_Update>;
};

export type StreamGridsFields_UpdatedAt_Create = {
  __typename?: 'StreamGridsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_UpdatedAt_Delete = {
  __typename?: 'StreamGridsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_UpdatedAt_Read = {
  __typename?: 'StreamGridsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsFields_UpdatedAt_Update = {
  __typename?: 'StreamGridsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamGridsReadAccess = {
  __typename?: 'StreamGridsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsReadDocAccess = {
  __typename?: 'StreamGridsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsUpdateAccess = {
  __typename?: 'StreamGridsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamGridsUpdateDocAccess = {
  __typename?: 'StreamGridsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Streamer = {
  __typename?: 'Streamer';
  avatar?: Maybe<Media>;
  banner?: Maybe<Media>;
  biography?: Maybe<Scalars['JSON']['output']>;
  blocks?: Maybe<Array<Streamer_Blocks>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  epochs?: Maybe<Streamer_Epochs>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  nicknames?: Maybe<Array<Streamer_Nicknames>>;
  realName?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  squads?: Maybe<Streamer_Squads>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type StreamerBiographyArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type StreamerEpochsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EpochParticipant_Where>;
};


export type StreamerSquadsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SquadMember_Where>;
};

export type Streamer_Blocks = Hero | Quote | YoutubeEmbed;

export type Streamer_Epochs = {
  __typename?: 'Streamer_Epochs';
  docs: Array<EpochParticipant>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Streamer_Nicknames = {
  __typename?: 'Streamer_Nicknames';
  id?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
};

export type Streamer_Squads = {
  __typename?: 'Streamer_Squads';
  docs: Array<SquadMember>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Streamer_Avatar_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Streamer_Banner_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Streamer_Biography_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Streamer_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Streamer_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Streamer_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Streamer_Nicknames__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Streamer_Nicknames__Nickname_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Streamer_RealName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Streamer_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Streamer_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Streamer_Where = {
  AND?: InputMaybe<Array<InputMaybe<Streamer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Streamer_Where_Or>>>;
  avatar?: InputMaybe<Streamer_Avatar_Operator>;
  banner?: InputMaybe<Streamer_Banner_Operator>;
  biography?: InputMaybe<Streamer_Biography_Operator>;
  createdAt?: InputMaybe<Streamer_CreatedAt_Operator>;
  id?: InputMaybe<Streamer_Id_Operator>;
  name?: InputMaybe<Streamer_Name_Operator>;
  nicknames__id?: InputMaybe<Streamer_Nicknames__Id_Operator>;
  nicknames__nickname?: InputMaybe<Streamer_Nicknames__Nickname_Operator>;
  realName?: InputMaybe<Streamer_RealName_Operator>;
  slug?: InputMaybe<Streamer_Slug_Operator>;
  updatedAt?: InputMaybe<Streamer_UpdatedAt_Operator>;
};

export type Streamer_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Streamer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Streamer_Where_Or>>>;
  avatar?: InputMaybe<Streamer_Avatar_Operator>;
  banner?: InputMaybe<Streamer_Banner_Operator>;
  biography?: InputMaybe<Streamer_Biography_Operator>;
  createdAt?: InputMaybe<Streamer_CreatedAt_Operator>;
  id?: InputMaybe<Streamer_Id_Operator>;
  name?: InputMaybe<Streamer_Name_Operator>;
  nicknames__id?: InputMaybe<Streamer_Nicknames__Id_Operator>;
  nicknames__nickname?: InputMaybe<Streamer_Nicknames__Nickname_Operator>;
  realName?: InputMaybe<Streamer_RealName_Operator>;
  slug?: InputMaybe<Streamer_Slug_Operator>;
  updatedAt?: InputMaybe<Streamer_UpdatedAt_Operator>;
};

export type Streamer_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Streamer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Streamer_Where_Or>>>;
  avatar?: InputMaybe<Streamer_Avatar_Operator>;
  banner?: InputMaybe<Streamer_Banner_Operator>;
  biography?: InputMaybe<Streamer_Biography_Operator>;
  createdAt?: InputMaybe<Streamer_CreatedAt_Operator>;
  id?: InputMaybe<Streamer_Id_Operator>;
  name?: InputMaybe<Streamer_Name_Operator>;
  nicknames__id?: InputMaybe<Streamer_Nicknames__Id_Operator>;
  nicknames__nickname?: InputMaybe<Streamer_Nicknames__Nickname_Operator>;
  realName?: InputMaybe<Streamer_RealName_Operator>;
  slug?: InputMaybe<Streamer_Slug_Operator>;
  updatedAt?: InputMaybe<Streamer_UpdatedAt_Operator>;
};

export type Streamers = {
  __typename?: 'Streamers';
  docs: Array<Streamer>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type StreamersCreateAccess = {
  __typename?: 'StreamersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersCreateDocAccess = {
  __typename?: 'StreamersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersDeleteAccess = {
  __typename?: 'StreamersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersDeleteDocAccess = {
  __typename?: 'StreamersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersDocAccessFields = {
  __typename?: 'StreamersDocAccessFields';
  avatar?: Maybe<StreamersDocAccessFields_Avatar>;
  banner?: Maybe<StreamersDocAccessFields_Banner>;
  biography?: Maybe<StreamersDocAccessFields_Biography>;
  blocks?: Maybe<StreamersDocAccessFields_Blocks>;
  createdAt?: Maybe<StreamersDocAccessFields_CreatedAt>;
  epochs?: Maybe<StreamersDocAccessFields_Epochs>;
  name?: Maybe<StreamersDocAccessFields_Name>;
  nicknames?: Maybe<StreamersDocAccessFields_Nicknames>;
  realName?: Maybe<StreamersDocAccessFields_RealName>;
  slug?: Maybe<StreamersDocAccessFields_Slug>;
  squads?: Maybe<StreamersDocAccessFields_Squads>;
  updatedAt?: Maybe<StreamersDocAccessFields_UpdatedAt>;
};

export type StreamersDocAccessFields_Avatar = {
  __typename?: 'StreamersDocAccessFields_avatar';
  create?: Maybe<StreamersDocAccessFields_Avatar_Create>;
  delete?: Maybe<StreamersDocAccessFields_Avatar_Delete>;
  read?: Maybe<StreamersDocAccessFields_Avatar_Read>;
  update?: Maybe<StreamersDocAccessFields_Avatar_Update>;
};

export type StreamersDocAccessFields_Avatar_Create = {
  __typename?: 'StreamersDocAccessFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Avatar_Delete = {
  __typename?: 'StreamersDocAccessFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Avatar_Read = {
  __typename?: 'StreamersDocAccessFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Avatar_Update = {
  __typename?: 'StreamersDocAccessFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Banner = {
  __typename?: 'StreamersDocAccessFields_banner';
  create?: Maybe<StreamersDocAccessFields_Banner_Create>;
  delete?: Maybe<StreamersDocAccessFields_Banner_Delete>;
  read?: Maybe<StreamersDocAccessFields_Banner_Read>;
  update?: Maybe<StreamersDocAccessFields_Banner_Update>;
};

export type StreamersDocAccessFields_Banner_Create = {
  __typename?: 'StreamersDocAccessFields_banner_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Banner_Delete = {
  __typename?: 'StreamersDocAccessFields_banner_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Banner_Read = {
  __typename?: 'StreamersDocAccessFields_banner_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Banner_Update = {
  __typename?: 'StreamersDocAccessFields_banner_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Biography = {
  __typename?: 'StreamersDocAccessFields_biography';
  create?: Maybe<StreamersDocAccessFields_Biography_Create>;
  delete?: Maybe<StreamersDocAccessFields_Biography_Delete>;
  read?: Maybe<StreamersDocAccessFields_Biography_Read>;
  update?: Maybe<StreamersDocAccessFields_Biography_Update>;
};

export type StreamersDocAccessFields_Biography_Create = {
  __typename?: 'StreamersDocAccessFields_biography_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Biography_Delete = {
  __typename?: 'StreamersDocAccessFields_biography_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Biography_Read = {
  __typename?: 'StreamersDocAccessFields_biography_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Biography_Update = {
  __typename?: 'StreamersDocAccessFields_biography_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Blocks = {
  __typename?: 'StreamersDocAccessFields_blocks';
  create?: Maybe<StreamersDocAccessFields_Blocks_Create>;
  delete?: Maybe<StreamersDocAccessFields_Blocks_Delete>;
  read?: Maybe<StreamersDocAccessFields_Blocks_Read>;
  update?: Maybe<StreamersDocAccessFields_Blocks_Update>;
};

export type StreamersDocAccessFields_Blocks_Create = {
  __typename?: 'StreamersDocAccessFields_blocks_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Blocks_Delete = {
  __typename?: 'StreamersDocAccessFields_blocks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Blocks_Read = {
  __typename?: 'StreamersDocAccessFields_blocks_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Blocks_Update = {
  __typename?: 'StreamersDocAccessFields_blocks_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_CreatedAt = {
  __typename?: 'StreamersDocAccessFields_createdAt';
  create?: Maybe<StreamersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<StreamersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<StreamersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<StreamersDocAccessFields_CreatedAt_Update>;
};

export type StreamersDocAccessFields_CreatedAt_Create = {
  __typename?: 'StreamersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'StreamersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_CreatedAt_Read = {
  __typename?: 'StreamersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_CreatedAt_Update = {
  __typename?: 'StreamersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Epochs = {
  __typename?: 'StreamersDocAccessFields_epochs';
  create?: Maybe<StreamersDocAccessFields_Epochs_Create>;
  delete?: Maybe<StreamersDocAccessFields_Epochs_Delete>;
  read?: Maybe<StreamersDocAccessFields_Epochs_Read>;
  update?: Maybe<StreamersDocAccessFields_Epochs_Update>;
};

export type StreamersDocAccessFields_Epochs_Create = {
  __typename?: 'StreamersDocAccessFields_epochs_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Epochs_Delete = {
  __typename?: 'StreamersDocAccessFields_epochs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Epochs_Read = {
  __typename?: 'StreamersDocAccessFields_epochs_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Epochs_Update = {
  __typename?: 'StreamersDocAccessFields_epochs_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Name = {
  __typename?: 'StreamersDocAccessFields_name';
  create?: Maybe<StreamersDocAccessFields_Name_Create>;
  delete?: Maybe<StreamersDocAccessFields_Name_Delete>;
  read?: Maybe<StreamersDocAccessFields_Name_Read>;
  update?: Maybe<StreamersDocAccessFields_Name_Update>;
};

export type StreamersDocAccessFields_Name_Create = {
  __typename?: 'StreamersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Name_Delete = {
  __typename?: 'StreamersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Name_Read = {
  __typename?: 'StreamersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Name_Update = {
  __typename?: 'StreamersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames = {
  __typename?: 'StreamersDocAccessFields_nicknames';
  create?: Maybe<StreamersDocAccessFields_Nicknames_Create>;
  delete?: Maybe<StreamersDocAccessFields_Nicknames_Delete>;
  fields?: Maybe<StreamersDocAccessFields_Nicknames_Fields>;
  read?: Maybe<StreamersDocAccessFields_Nicknames_Read>;
  update?: Maybe<StreamersDocAccessFields_Nicknames_Update>;
};

export type StreamersDocAccessFields_Nicknames_Create = {
  __typename?: 'StreamersDocAccessFields_nicknames_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Delete = {
  __typename?: 'StreamersDocAccessFields_nicknames_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Fields = {
  __typename?: 'StreamersDocAccessFields_nicknames_Fields';
  id?: Maybe<StreamersDocAccessFields_Nicknames_Id>;
  nickname?: Maybe<StreamersDocAccessFields_Nicknames_Nickname>;
};

export type StreamersDocAccessFields_Nicknames_Read = {
  __typename?: 'StreamersDocAccessFields_nicknames_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Update = {
  __typename?: 'StreamersDocAccessFields_nicknames_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Id = {
  __typename?: 'StreamersDocAccessFields_nicknames_id';
  create?: Maybe<StreamersDocAccessFields_Nicknames_Id_Create>;
  delete?: Maybe<StreamersDocAccessFields_Nicknames_Id_Delete>;
  read?: Maybe<StreamersDocAccessFields_Nicknames_Id_Read>;
  update?: Maybe<StreamersDocAccessFields_Nicknames_Id_Update>;
};

export type StreamersDocAccessFields_Nicknames_Id_Create = {
  __typename?: 'StreamersDocAccessFields_nicknames_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Id_Delete = {
  __typename?: 'StreamersDocAccessFields_nicknames_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Id_Read = {
  __typename?: 'StreamersDocAccessFields_nicknames_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Id_Update = {
  __typename?: 'StreamersDocAccessFields_nicknames_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Nickname = {
  __typename?: 'StreamersDocAccessFields_nicknames_nickname';
  create?: Maybe<StreamersDocAccessFields_Nicknames_Nickname_Create>;
  delete?: Maybe<StreamersDocAccessFields_Nicknames_Nickname_Delete>;
  read?: Maybe<StreamersDocAccessFields_Nicknames_Nickname_Read>;
  update?: Maybe<StreamersDocAccessFields_Nicknames_Nickname_Update>;
};

export type StreamersDocAccessFields_Nicknames_Nickname_Create = {
  __typename?: 'StreamersDocAccessFields_nicknames_nickname_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Nickname_Delete = {
  __typename?: 'StreamersDocAccessFields_nicknames_nickname_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Nickname_Read = {
  __typename?: 'StreamersDocAccessFields_nicknames_nickname_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Nicknames_Nickname_Update = {
  __typename?: 'StreamersDocAccessFields_nicknames_nickname_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_RealName = {
  __typename?: 'StreamersDocAccessFields_realName';
  create?: Maybe<StreamersDocAccessFields_RealName_Create>;
  delete?: Maybe<StreamersDocAccessFields_RealName_Delete>;
  read?: Maybe<StreamersDocAccessFields_RealName_Read>;
  update?: Maybe<StreamersDocAccessFields_RealName_Update>;
};

export type StreamersDocAccessFields_RealName_Create = {
  __typename?: 'StreamersDocAccessFields_realName_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_RealName_Delete = {
  __typename?: 'StreamersDocAccessFields_realName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_RealName_Read = {
  __typename?: 'StreamersDocAccessFields_realName_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_RealName_Update = {
  __typename?: 'StreamersDocAccessFields_realName_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Slug = {
  __typename?: 'StreamersDocAccessFields_slug';
  create?: Maybe<StreamersDocAccessFields_Slug_Create>;
  delete?: Maybe<StreamersDocAccessFields_Slug_Delete>;
  read?: Maybe<StreamersDocAccessFields_Slug_Read>;
  update?: Maybe<StreamersDocAccessFields_Slug_Update>;
};

export type StreamersDocAccessFields_Slug_Create = {
  __typename?: 'StreamersDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Slug_Delete = {
  __typename?: 'StreamersDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Slug_Read = {
  __typename?: 'StreamersDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Slug_Update = {
  __typename?: 'StreamersDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Squads = {
  __typename?: 'StreamersDocAccessFields_squads';
  create?: Maybe<StreamersDocAccessFields_Squads_Create>;
  delete?: Maybe<StreamersDocAccessFields_Squads_Delete>;
  read?: Maybe<StreamersDocAccessFields_Squads_Read>;
  update?: Maybe<StreamersDocAccessFields_Squads_Update>;
};

export type StreamersDocAccessFields_Squads_Create = {
  __typename?: 'StreamersDocAccessFields_squads_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Squads_Delete = {
  __typename?: 'StreamersDocAccessFields_squads_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Squads_Read = {
  __typename?: 'StreamersDocAccessFields_squads_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_Squads_Update = {
  __typename?: 'StreamersDocAccessFields_squads_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_UpdatedAt = {
  __typename?: 'StreamersDocAccessFields_updatedAt';
  create?: Maybe<StreamersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<StreamersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<StreamersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<StreamersDocAccessFields_UpdatedAt_Update>;
};

export type StreamersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'StreamersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'StreamersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'StreamersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'StreamersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields = {
  __typename?: 'StreamersFields';
  avatar?: Maybe<StreamersFields_Avatar>;
  banner?: Maybe<StreamersFields_Banner>;
  biography?: Maybe<StreamersFields_Biography>;
  blocks?: Maybe<StreamersFields_Blocks>;
  createdAt?: Maybe<StreamersFields_CreatedAt>;
  epochs?: Maybe<StreamersFields_Epochs>;
  name?: Maybe<StreamersFields_Name>;
  nicknames?: Maybe<StreamersFields_Nicknames>;
  realName?: Maybe<StreamersFields_RealName>;
  slug?: Maybe<StreamersFields_Slug>;
  squads?: Maybe<StreamersFields_Squads>;
  updatedAt?: Maybe<StreamersFields_UpdatedAt>;
};

export type StreamersFields_Avatar = {
  __typename?: 'StreamersFields_avatar';
  create?: Maybe<StreamersFields_Avatar_Create>;
  delete?: Maybe<StreamersFields_Avatar_Delete>;
  read?: Maybe<StreamersFields_Avatar_Read>;
  update?: Maybe<StreamersFields_Avatar_Update>;
};

export type StreamersFields_Avatar_Create = {
  __typename?: 'StreamersFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Avatar_Delete = {
  __typename?: 'StreamersFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Avatar_Read = {
  __typename?: 'StreamersFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Avatar_Update = {
  __typename?: 'StreamersFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Banner = {
  __typename?: 'StreamersFields_banner';
  create?: Maybe<StreamersFields_Banner_Create>;
  delete?: Maybe<StreamersFields_Banner_Delete>;
  read?: Maybe<StreamersFields_Banner_Read>;
  update?: Maybe<StreamersFields_Banner_Update>;
};

export type StreamersFields_Banner_Create = {
  __typename?: 'StreamersFields_banner_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Banner_Delete = {
  __typename?: 'StreamersFields_banner_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Banner_Read = {
  __typename?: 'StreamersFields_banner_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Banner_Update = {
  __typename?: 'StreamersFields_banner_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Biography = {
  __typename?: 'StreamersFields_biography';
  create?: Maybe<StreamersFields_Biography_Create>;
  delete?: Maybe<StreamersFields_Biography_Delete>;
  read?: Maybe<StreamersFields_Biography_Read>;
  update?: Maybe<StreamersFields_Biography_Update>;
};

export type StreamersFields_Biography_Create = {
  __typename?: 'StreamersFields_biography_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Biography_Delete = {
  __typename?: 'StreamersFields_biography_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Biography_Read = {
  __typename?: 'StreamersFields_biography_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Biography_Update = {
  __typename?: 'StreamersFields_biography_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Blocks = {
  __typename?: 'StreamersFields_blocks';
  create?: Maybe<StreamersFields_Blocks_Create>;
  delete?: Maybe<StreamersFields_Blocks_Delete>;
  read?: Maybe<StreamersFields_Blocks_Read>;
  update?: Maybe<StreamersFields_Blocks_Update>;
};

export type StreamersFields_Blocks_Create = {
  __typename?: 'StreamersFields_blocks_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Blocks_Delete = {
  __typename?: 'StreamersFields_blocks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Blocks_Read = {
  __typename?: 'StreamersFields_blocks_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Blocks_Update = {
  __typename?: 'StreamersFields_blocks_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_CreatedAt = {
  __typename?: 'StreamersFields_createdAt';
  create?: Maybe<StreamersFields_CreatedAt_Create>;
  delete?: Maybe<StreamersFields_CreatedAt_Delete>;
  read?: Maybe<StreamersFields_CreatedAt_Read>;
  update?: Maybe<StreamersFields_CreatedAt_Update>;
};

export type StreamersFields_CreatedAt_Create = {
  __typename?: 'StreamersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_CreatedAt_Delete = {
  __typename?: 'StreamersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_CreatedAt_Read = {
  __typename?: 'StreamersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_CreatedAt_Update = {
  __typename?: 'StreamersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Epochs = {
  __typename?: 'StreamersFields_epochs';
  create?: Maybe<StreamersFields_Epochs_Create>;
  delete?: Maybe<StreamersFields_Epochs_Delete>;
  read?: Maybe<StreamersFields_Epochs_Read>;
  update?: Maybe<StreamersFields_Epochs_Update>;
};

export type StreamersFields_Epochs_Create = {
  __typename?: 'StreamersFields_epochs_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Epochs_Delete = {
  __typename?: 'StreamersFields_epochs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Epochs_Read = {
  __typename?: 'StreamersFields_epochs_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Epochs_Update = {
  __typename?: 'StreamersFields_epochs_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Name = {
  __typename?: 'StreamersFields_name';
  create?: Maybe<StreamersFields_Name_Create>;
  delete?: Maybe<StreamersFields_Name_Delete>;
  read?: Maybe<StreamersFields_Name_Read>;
  update?: Maybe<StreamersFields_Name_Update>;
};

export type StreamersFields_Name_Create = {
  __typename?: 'StreamersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Name_Delete = {
  __typename?: 'StreamersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Name_Read = {
  __typename?: 'StreamersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Name_Update = {
  __typename?: 'StreamersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames = {
  __typename?: 'StreamersFields_nicknames';
  create?: Maybe<StreamersFields_Nicknames_Create>;
  delete?: Maybe<StreamersFields_Nicknames_Delete>;
  fields?: Maybe<StreamersFields_Nicknames_Fields>;
  read?: Maybe<StreamersFields_Nicknames_Read>;
  update?: Maybe<StreamersFields_Nicknames_Update>;
};

export type StreamersFields_Nicknames_Create = {
  __typename?: 'StreamersFields_nicknames_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Delete = {
  __typename?: 'StreamersFields_nicknames_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Fields = {
  __typename?: 'StreamersFields_nicknames_Fields';
  id?: Maybe<StreamersFields_Nicknames_Id>;
  nickname?: Maybe<StreamersFields_Nicknames_Nickname>;
};

export type StreamersFields_Nicknames_Read = {
  __typename?: 'StreamersFields_nicknames_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Update = {
  __typename?: 'StreamersFields_nicknames_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Id = {
  __typename?: 'StreamersFields_nicknames_id';
  create?: Maybe<StreamersFields_Nicknames_Id_Create>;
  delete?: Maybe<StreamersFields_Nicknames_Id_Delete>;
  read?: Maybe<StreamersFields_Nicknames_Id_Read>;
  update?: Maybe<StreamersFields_Nicknames_Id_Update>;
};

export type StreamersFields_Nicknames_Id_Create = {
  __typename?: 'StreamersFields_nicknames_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Id_Delete = {
  __typename?: 'StreamersFields_nicknames_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Id_Read = {
  __typename?: 'StreamersFields_nicknames_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Id_Update = {
  __typename?: 'StreamersFields_nicknames_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Nickname = {
  __typename?: 'StreamersFields_nicknames_nickname';
  create?: Maybe<StreamersFields_Nicknames_Nickname_Create>;
  delete?: Maybe<StreamersFields_Nicknames_Nickname_Delete>;
  read?: Maybe<StreamersFields_Nicknames_Nickname_Read>;
  update?: Maybe<StreamersFields_Nicknames_Nickname_Update>;
};

export type StreamersFields_Nicknames_Nickname_Create = {
  __typename?: 'StreamersFields_nicknames_nickname_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Nickname_Delete = {
  __typename?: 'StreamersFields_nicknames_nickname_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Nickname_Read = {
  __typename?: 'StreamersFields_nicknames_nickname_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Nicknames_Nickname_Update = {
  __typename?: 'StreamersFields_nicknames_nickname_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_RealName = {
  __typename?: 'StreamersFields_realName';
  create?: Maybe<StreamersFields_RealName_Create>;
  delete?: Maybe<StreamersFields_RealName_Delete>;
  read?: Maybe<StreamersFields_RealName_Read>;
  update?: Maybe<StreamersFields_RealName_Update>;
};

export type StreamersFields_RealName_Create = {
  __typename?: 'StreamersFields_realName_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_RealName_Delete = {
  __typename?: 'StreamersFields_realName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_RealName_Read = {
  __typename?: 'StreamersFields_realName_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_RealName_Update = {
  __typename?: 'StreamersFields_realName_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Slug = {
  __typename?: 'StreamersFields_slug';
  create?: Maybe<StreamersFields_Slug_Create>;
  delete?: Maybe<StreamersFields_Slug_Delete>;
  read?: Maybe<StreamersFields_Slug_Read>;
  update?: Maybe<StreamersFields_Slug_Update>;
};

export type StreamersFields_Slug_Create = {
  __typename?: 'StreamersFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Slug_Delete = {
  __typename?: 'StreamersFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Slug_Read = {
  __typename?: 'StreamersFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Slug_Update = {
  __typename?: 'StreamersFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Squads = {
  __typename?: 'StreamersFields_squads';
  create?: Maybe<StreamersFields_Squads_Create>;
  delete?: Maybe<StreamersFields_Squads_Delete>;
  read?: Maybe<StreamersFields_Squads_Read>;
  update?: Maybe<StreamersFields_Squads_Update>;
};

export type StreamersFields_Squads_Create = {
  __typename?: 'StreamersFields_squads_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Squads_Delete = {
  __typename?: 'StreamersFields_squads_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Squads_Read = {
  __typename?: 'StreamersFields_squads_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_Squads_Update = {
  __typename?: 'StreamersFields_squads_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_UpdatedAt = {
  __typename?: 'StreamersFields_updatedAt';
  create?: Maybe<StreamersFields_UpdatedAt_Create>;
  delete?: Maybe<StreamersFields_UpdatedAt_Delete>;
  read?: Maybe<StreamersFields_UpdatedAt_Read>;
  update?: Maybe<StreamersFields_UpdatedAt_Update>;
};

export type StreamersFields_UpdatedAt_Create = {
  __typename?: 'StreamersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_UpdatedAt_Delete = {
  __typename?: 'StreamersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_UpdatedAt_Read = {
  __typename?: 'StreamersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StreamersFields_UpdatedAt_Update = {
  __typename?: 'StreamersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StreamersReadAccess = {
  __typename?: 'StreamersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersReadDocAccess = {
  __typename?: 'StreamersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersUpdateAccess = {
  __typename?: 'StreamersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StreamersUpdateDocAccess = {
  __typename?: 'StreamersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  apiKey?: Maybe<Scalars['String']['output']>;
  apiKeyIndex?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  enableAPIKey?: Maybe<Scalars['Boolean']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type User_ApiKey_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_EnableApiKey_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  apiKey?: Maybe<UsersDocAccessFields_ApiKey>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  enableAPIKey?: Maybe<UsersDocAccessFields_EnableApiKey>;
  sessions?: Maybe<UsersDocAccessFields_Sessions>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_ApiKey = {
  __typename?: 'UsersDocAccessFields_apiKey';
  create?: Maybe<UsersDocAccessFields_ApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_ApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_ApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
  __typename?: 'UsersDocAccessFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Read = {
  __typename?: 'UsersDocAccessFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Update = {
  __typename?: 'UsersDocAccessFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey = {
  __typename?: 'UsersDocAccessFields_enableAPIKey';
  create?: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  apiKey?: Maybe<UsersFields_ApiKey>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  enableAPIKey?: Maybe<UsersFields_EnableApiKey>;
  sessions?: Maybe<UsersFields_Sessions>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_ApiKey = {
  __typename?: 'UsersFields_apiKey';
  create?: Maybe<UsersFields_ApiKey_Create>;
  delete?: Maybe<UsersFields_ApiKey_Delete>;
  read?: Maybe<UsersFields_ApiKey_Read>;
  update?: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
  __typename?: 'UsersFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Delete = {
  __typename?: 'UsersFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Read = {
  __typename?: 'UsersFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Update = {
  __typename?: 'UsersFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey = {
  __typename?: 'UsersFields_enableAPIKey';
  create?: Maybe<UsersFields_EnableApiKey_Create>;
  delete?: Maybe<UsersFields_EnableApiKey_Delete>;
  read?: Maybe<UsersFields_EnableApiKey_Read>;
  update?: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
  __typename?: 'UsersFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Delete = {
  __typename?: 'UsersFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Read = {
  __typename?: 'UsersFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Update = {
  __typename?: 'UsersFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_Sessions_Create>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type YoutubeEmbed = {
  __typename?: 'YoutubeEmbed';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CountEpochParticipants = {
  __typename?: 'countEpochParticipants';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountEpochs = {
  __typename?: 'countEpochs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountEvents = {
  __typename?: 'countEvents';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountReviews = {
  __typename?: 'countReviews';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountSquadMembers = {
  __typename?: 'countSquadMembers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountSquads = {
  __typename?: 'countSquads';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountStreamGrids = {
  __typename?: 'countStreamGrids';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountStreamers = {
  __typename?: 'countStreamers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Epoch_ParticipantsAccess = {
  __typename?: 'epoch_participantsAccess';
  create?: Maybe<EpochParticipantsCreateAccess>;
  delete?: Maybe<EpochParticipantsDeleteAccess>;
  fields?: Maybe<EpochParticipantsFields>;
  read?: Maybe<EpochParticipantsReadAccess>;
  update?: Maybe<EpochParticipantsUpdateAccess>;
};

export type Epoch_ParticipantsDocAccess = {
  __typename?: 'epoch_participantsDocAccess';
  create?: Maybe<EpochParticipantsCreateDocAccess>;
  delete?: Maybe<EpochParticipantsDeleteDocAccess>;
  fields?: Maybe<EpochParticipantsDocAccessFields>;
  read?: Maybe<EpochParticipantsReadDocAccess>;
  update?: Maybe<EpochParticipantsUpdateDocAccess>;
};

export type EpochsAccess = {
  __typename?: 'epochsAccess';
  create?: Maybe<EpochsCreateAccess>;
  delete?: Maybe<EpochsDeleteAccess>;
  fields?: Maybe<EpochsFields>;
  read?: Maybe<EpochsReadAccess>;
  update?: Maybe<EpochsUpdateAccess>;
};

export type EpochsDocAccess = {
  __typename?: 'epochsDocAccess';
  create?: Maybe<EpochsCreateDocAccess>;
  delete?: Maybe<EpochsDeleteDocAccess>;
  fields?: Maybe<EpochsDocAccessFields>;
  read?: Maybe<EpochsReadDocAccess>;
  update?: Maybe<EpochsUpdateDocAccess>;
};

export type EventsAccess = {
  __typename?: 'eventsAccess';
  create?: Maybe<EventsCreateAccess>;
  delete?: Maybe<EventsDeleteAccess>;
  fields?: Maybe<EventsFields>;
  read?: Maybe<EventsReadAccess>;
  update?: Maybe<EventsUpdateAccess>;
};

export type EventsDocAccess = {
  __typename?: 'eventsDocAccess';
  create?: Maybe<EventsCreateDocAccess>;
  delete?: Maybe<EventsDeleteDocAccess>;
  fields?: Maybe<EventsDocAccessFields>;
  read?: Maybe<EventsReadDocAccess>;
  update?: Maybe<EventsUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationEpochInput = {
  coverImage?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  dateEnd?: InputMaybe<Scalars['String']['input']>;
  dateStart: Scalars['String']['input'];
  description?: InputMaybe<Scalars['JSON']['input']>;
  highlightEvent?: InputMaybe<Scalars['Int']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  squad?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEpochParticipantInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['Int']['input']>;
  roleInEpoch: EpochParticipant_RoleInEpoch_MutationInput;
  streamer?: InputMaybe<Scalars['Int']['input']>;
  styleStrategy?: InputMaybe<EpochParticipant_StyleStrategy_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEpochParticipantUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['Int']['input']>;
  roleInEpoch?: InputMaybe<EpochParticipantUpdate_RoleInEpoch_MutationInput>;
  streamer?: InputMaybe<Scalars['Int']['input']>;
  styleStrategy?: InputMaybe<EpochParticipantUpdate_StyleStrategy_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEpochUpdateInput = {
  coverImage?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  dateEnd?: InputMaybe<Scalars['String']['input']>;
  dateStart?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  highlightEvent?: InputMaybe<Scalars['Int']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  squad?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEventInput = {
  contentBlocks?: InputMaybe<Scalars['JSON']['input']>;
  coverImage?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['Int']['input']>;
  grid?: InputMaybe<Scalars['Int']['input']>;
  streamersPresent?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title: Scalars['String']['input'];
  type: Event_Type_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  videoSlug?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEventUpdateInput = {
  contentBlocks?: InputMaybe<Scalars['JSON']['input']>;
  coverImage?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['Int']['input']>;
  grid?: InputMaybe<Scalars['Int']['input']>;
  streamersPresent?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EventUpdate_Type_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  videoSlug?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadKvInput = {
  data: Scalars['JSON']['input'];
  key: Scalars['String']['input'];
};

export type MutationPayloadKvUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationReviewInput = {
  attachedTo: Review_AttachedTo_MutationInput;
  author?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['JSON']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  epochLink?: InputMaybe<Scalars['Int']['input']>;
  eventLink?: InputMaybe<Scalars['Int']['input']>;
  streamerLink?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationReviewUpdateInput = {
  attachedTo?: InputMaybe<ReviewUpdate_AttachedTo_MutationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  epochLink?: InputMaybe<Scalars['Int']['input']>;
  eventLink?: InputMaybe<Scalars['Int']['input']>;
  streamerLink?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSquadInput = {
  banner?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['JSON']['input']>;
  logo?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSquadMemberInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  joinDate?: InputMaybe<Scalars['String']['input']>;
  leaveDate?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<SquadMember_Role_MutationInput>;
  squad?: InputMaybe<Scalars['Int']['input']>;
  streamer?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSquadMemberUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  joinDate?: InputMaybe<Scalars['String']['input']>;
  leaveDate?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<SquadMemberUpdate_Role_MutationInput>;
  squad?: InputMaybe<Scalars['Int']['input']>;
  streamer?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSquadUpdateInput = {
  banner?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['JSON']['input']>;
  logo?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStreamGridInput = {
  cover?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  dateEnd?: InputMaybe<Scalars['String']['input']>;
  dateStart?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  participants?: InputMaybe<Array<InputMaybe<MutationStreamGrid_ParticipantsInput>>>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: StreamGrid_Type_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStreamGridUpdateInput = {
  cover?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  dateEnd?: InputMaybe<Scalars['String']['input']>;
  dateStart?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  participants?: InputMaybe<Array<InputMaybe<MutationStreamGridUpdate_ParticipantsInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<StreamGridUpdate_Type_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStreamGridUpdate_ParticipantsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  role: StreamGridUpdate_Participants_Role_MutationInput;
  streamer?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationStreamGrid_ParticipantsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  role: StreamGrid_Participants_Role_MutationInput;
  streamer?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationStreamerInput = {
  avatar?: InputMaybe<Scalars['Int']['input']>;
  banner?: InputMaybe<Scalars['Int']['input']>;
  biography?: InputMaybe<Scalars['JSON']['input']>;
  blocks?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nicknames?: InputMaybe<Array<InputMaybe<MutationStreamer_NicknamesInput>>>;
  realName?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStreamerUpdateInput = {
  avatar?: InputMaybe<Scalars['Int']['input']>;
  banner?: InputMaybe<Scalars['Int']['input']>;
  biography?: InputMaybe<Scalars['JSON']['input']>;
  blocks?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nicknames?: InputMaybe<Array<InputMaybe<MutationStreamerUpdate_NicknamesInput>>>;
  realName?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStreamerUpdate_NicknamesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  nickname: Scalars['String']['input'];
};

export type MutationStreamer_NicknamesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  nickname: Scalars['String']['input'];
};

export type MutationUserInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type Payload_KvAccess = {
  __typename?: 'payload_kvAccess';
  create?: Maybe<PayloadKvCreateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
  fields?: Maybe<PayloadKvFields>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
};

export type Payload_KvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  create?: Maybe<PayloadKvCreateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
  fields?: Maybe<PayloadKvDocAccessFields>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type ReviewsAccess = {
  __typename?: 'reviewsAccess';
  create?: Maybe<ReviewsCreateAccess>;
  delete?: Maybe<ReviewsDeleteAccess>;
  fields?: Maybe<ReviewsFields>;
  read?: Maybe<ReviewsReadAccess>;
  update?: Maybe<ReviewsUpdateAccess>;
};

export type ReviewsDocAccess = {
  __typename?: 'reviewsDocAccess';
  create?: Maybe<ReviewsCreateDocAccess>;
  delete?: Maybe<ReviewsDeleteDocAccess>;
  fields?: Maybe<ReviewsDocAccessFields>;
  read?: Maybe<ReviewsReadDocAccess>;
  update?: Maybe<ReviewsUpdateDocAccess>;
};

export type Squad_MembersAccess = {
  __typename?: 'squad_membersAccess';
  create?: Maybe<SquadMembersCreateAccess>;
  delete?: Maybe<SquadMembersDeleteAccess>;
  fields?: Maybe<SquadMembersFields>;
  read?: Maybe<SquadMembersReadAccess>;
  update?: Maybe<SquadMembersUpdateAccess>;
};

export type Squad_MembersDocAccess = {
  __typename?: 'squad_membersDocAccess';
  create?: Maybe<SquadMembersCreateDocAccess>;
  delete?: Maybe<SquadMembersDeleteDocAccess>;
  fields?: Maybe<SquadMembersDocAccessFields>;
  read?: Maybe<SquadMembersReadDocAccess>;
  update?: Maybe<SquadMembersUpdateDocAccess>;
};

export type SquadsAccess = {
  __typename?: 'squadsAccess';
  create?: Maybe<SquadsCreateAccess>;
  delete?: Maybe<SquadsDeleteAccess>;
  fields?: Maybe<SquadsFields>;
  read?: Maybe<SquadsReadAccess>;
  update?: Maybe<SquadsUpdateAccess>;
};

export type SquadsDocAccess = {
  __typename?: 'squadsDocAccess';
  create?: Maybe<SquadsCreateDocAccess>;
  delete?: Maybe<SquadsDeleteDocAccess>;
  fields?: Maybe<SquadsDocAccessFields>;
  read?: Maybe<SquadsReadDocAccess>;
  update?: Maybe<SquadsUpdateDocAccess>;
};

export type Stream_GridsAccess = {
  __typename?: 'stream_gridsAccess';
  create?: Maybe<StreamGridsCreateAccess>;
  delete?: Maybe<StreamGridsDeleteAccess>;
  fields?: Maybe<StreamGridsFields>;
  read?: Maybe<StreamGridsReadAccess>;
  update?: Maybe<StreamGridsUpdateAccess>;
};

export type Stream_GridsDocAccess = {
  __typename?: 'stream_gridsDocAccess';
  create?: Maybe<StreamGridsCreateDocAccess>;
  delete?: Maybe<StreamGridsDeleteDocAccess>;
  fields?: Maybe<StreamGridsDocAccessFields>;
  read?: Maybe<StreamGridsReadDocAccess>;
  update?: Maybe<StreamGridsUpdateDocAccess>;
};

export type StreamersAccess = {
  __typename?: 'streamersAccess';
  create?: Maybe<StreamersCreateAccess>;
  delete?: Maybe<StreamersDeleteAccess>;
  fields?: Maybe<StreamersFields>;
  read?: Maybe<StreamersReadAccess>;
  update?: Maybe<StreamersUpdateAccess>;
};

export type StreamersDocAccess = {
  __typename?: 'streamersDocAccess';
  create?: Maybe<StreamersCreateDocAccess>;
  delete?: Maybe<StreamersDeleteDocAccess>;
  fields?: Maybe<StreamersDocAccessFields>;
  read?: Maybe<StreamersReadDocAccess>;
  update?: Maybe<StreamersUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetEpochParticipantsQueryVariables = Exact<{
  streamerId?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetEpochParticipantsQuery = { __typename?: 'Query', EpochParticipants?: { __typename?: 'EpochParticipants', docs: Array<{ __typename?: 'EpochParticipant', id: number, roleInEpoch: EpochParticipant_RoleInEpoch, epoch?: { __typename?: 'Epoch', id: number, title: string, dateStart: any, dateEnd?: any | null, squad?: { __typename?: 'Squad', id: number, name: string, slug: string } | null } | null }> } | null };

export type GetEventsQueryVariables = Exact<{
  streamerId?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetEventsQuery = { __typename?: 'Query', Events?: { __typename?: 'Events', docs: Array<{ __typename?: 'Event', id: number, title: string, date: any, type: Event_Type, epoch?: { __typename?: 'Epoch', id: number, title: string } | null, grid?: { __typename?: 'StreamGrid', id: number, title: string, type: StreamGrid_Type, cover?: { __typename?: 'Media', url?: string | null } | null } | null, contentBlocks?: Array<
        | { __typename?: 'EventQuote', id?: string | null, blockType?: string | null, text: string, author?: string | null }
        | { __typename?: 'EventReport', id?: string | null, blockType?: string | null, title?: string | null, htmlReport?: any | null }
        | { __typename?: 'EventSMC', id?: string | null, blockType?: string | null, videoSlug: string, videoId?: string | null, videoTitle?: string | null, caption?: string | null }
        | { __typename?: 'EventYoutube', id?: string | null, blockType?: string | null, url: string, caption?: string | null }
      > | null }> } | null };

export type GetSquadMembersQueryVariables = Exact<{
  streamerId?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetSquadMembersQuery = { __typename?: 'Query', SquadMembers?: { __typename?: 'SquadMembers', docs: Array<{ __typename?: 'SquadMember', id: number, role?: SquadMember_Role | null, joinDate?: any | null, leaveDate?: any | null, streamer?: { __typename?: 'Streamer', id: number, name: string, slug: string, avatar?: { __typename?: 'Media', url?: string | null } | null } | null, squad?: { __typename?: 'Squad', id: number, name: string, slug: string, logo?: { __typename?: 'Media', url?: string | null } | null } | null }> } | null };

export type GetSquadsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSquadsPageQuery = { __typename?: 'Query', Squads?: { __typename?: 'Squads', totalDocs: number, docs: Array<{ __typename?: 'Squad', id: number, name: string, slug: string, logo?: { __typename?: 'Media', url?: string | null, alt: string } | null, banner?: { __typename?: 'Media', url?: string | null, alt: string } | null, totalMembers?: { __typename?: 'Squad_Members', docs: Array<{ __typename?: 'SquadMember', id: number }> } | null, currentMembers?: { __typename?: 'Squad_Members', docs: Array<{ __typename?: 'SquadMember', id: number, role?: SquadMember_Role | null, streamer?: { __typename?: 'Streamer', id: number, name: string, avatar?: { __typename?: 'Media', url?: string | null, alt: string } | null } | null }> } | null, epochs?: { __typename?: 'Squad_Epochs', docs: Array<{ __typename?: 'Epoch', id: number, dateStart: any, dateEnd?: any | null }> } | null }> } | null, totalEpochs?: { __typename?: 'Epochs', totalDocs: number } | null, totalStreamers?: { __typename?: 'Streamers', totalDocs: number } | null };

export type GetSquadEventsQueryVariables = Exact<{
  epochIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
}>;


export type GetSquadEventsQuery = { __typename?: 'Query', Events?: { __typename?: 'Events', docs: Array<{ __typename?: 'Event', id: number, title: string, date: any, type: Event_Type, description?: string | null, coverImage?: { __typename?: 'Media', url?: string | null, alt: string } | null, streamersPresent?: Array<{ __typename?: 'Streamer', id: number, name: string, slug: string, avatar?: { __typename?: 'Media', url?: string | null, alt: string } | null }> | null }> } | null };

export type GetSquadPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSquadPageQuery = { __typename?: 'Query', Squads?: { __typename?: 'Squads', docs: Array<{ __typename?: 'Squad', id: number, name: string, slug: string, history?: any | null, logo?: { __typename?: 'Media', url?: string | null, alt: string } | null, banner?: { __typename?: 'Media', url?: string | null, alt: string } | null, currentMembers?: { __typename?: 'Squad_Members', docs: Array<{ __typename?: 'SquadMember', id: number, role?: SquadMember_Role | null, joinDate?: any | null, streamer?: { __typename?: 'Streamer', id: number, name: string, slug: string, avatar?: { __typename?: 'Media', url?: string | null, alt: string } | null } | null }> } | null, pastMembers?: { __typename?: 'Squad_Members', docs: Array<{ __typename?: 'SquadMember', id: number, role?: SquadMember_Role | null, joinDate?: any | null, leaveDate?: any | null, streamer?: { __typename?: 'Streamer', id: number, name: string, slug: string, avatar?: { __typename?: 'Media', url?: string | null, alt: string } | null } | null }> } | null, epochs?: { __typename?: 'Squad_Epochs', docs: Array<{ __typename?: 'Epoch', id: number, title: string, slug: string, summary?: string | null, dateStart: any, dateEnd?: any | null, isFeatured?: boolean | null, coverImage?: { __typename?: 'Media', url?: string | null, alt: string } | null, events?: { __typename?: 'Epoch_Events', docs: Array<{ __typename?: 'Event', id: number }> } | null, participants?: { __typename?: 'Epoch_Participants', docs: Array<{ __typename?: 'EpochParticipant', id: number }> } | null }> } | null }> } | null };

export type GetStreamerGridsQueryVariables = Exact<{
  streamerId?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetStreamerGridsQuery = { __typename?: 'Query', StreamGrids?: { __typename?: 'StreamGrids', docs: Array<{ __typename?: 'StreamGrid', id: number, title: string, type: StreamGrid_Type, cover?: { __typename?: 'Media', url?: string | null, alt: string } | null, events?: { __typename?: 'StreamGrid_Events', docs: Array<{ __typename?: 'Event', id: number, title: string, date: any, type: Event_Type, description?: string | null, contentBlocks?: Array<
            | { __typename?: 'EventQuote', id?: string | null, blockType?: string | null, text: string, author?: string | null }
            | { __typename?: 'EventReport', id?: string | null, blockType?: string | null, title?: string | null, htmlReport?: any | null }
            | { __typename?: 'EventSMC', id?: string | null, blockType?: string | null, videoSlug: string, videoId?: string | null, videoTitle?: string | null, caption?: string | null }
            | { __typename?: 'EventYoutube', id?: string | null, blockType?: string | null, url: string, caption?: string | null }
          > | null }> } | null }> } | null };

export type GetStreamerPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetStreamerPageQuery = { __typename?: 'Query', Streamers?: { __typename?: 'Streamers', docs: Array<{ __typename?: 'Streamer', id: number, name: string, realName?: string | null, slug: string, nicknames?: Array<{ __typename?: 'Streamer_Nicknames', id?: string | null, nickname?: string | null }> | null, avatar?: { __typename?: 'Media', url?: string | null } | null, banner?: { __typename?: 'Media', url?: string | null } | null, blocks?: Array<
        | { __typename?: 'Hero', id?: string | null, blockType?: string | null, title?: string | null, subtitle?: string | null }
        | { __typename?: 'Quote', id?: string | null, blockType?: string | null, text?: string | null, author?: string | null }
        | { __typename?: 'YoutubeEmbed', id?: string | null, blockType?: string | null, url?: string | null, caption?: string | null }
      > | null, squads?: { __typename?: 'Streamer_Squads', docs: Array<{ __typename?: 'SquadMember', id: number, role?: SquadMember_Role | null, joinDate?: any | null, leaveDate?: any | null, squad?: { __typename?: 'Squad', id: number, name: string, slug: string, logo?: { __typename?: 'Media', url?: string | null } | null } | null }> } | null, epochs?: { __typename?: 'Streamer_Epochs', docs: Array<{ __typename?: 'EpochParticipant', id: number, roleInEpoch: EpochParticipant_RoleInEpoch, epoch?: { __typename?: 'Epoch', id: number, title: string, dateStart: any, dateEnd?: any | null, squad?: { __typename?: 'Squad', id: number, name: string, slug: string } | null } | null }> } | null }> } | null };

export type GetStreamerStatsQueryVariables = Exact<{
  streamerIdJson?: InputMaybe<Scalars['JSON']['input']>;
  streamerId: Scalars['Int']['input'];
  recentLimit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetStreamerStatsQuery = { __typename?: 'Query', allEvents?: { __typename?: 'Events', totalDocs: number } | null, soloEvents?: { __typename?: 'Events', totalDocs: number } | null, recentEvents?: { __typename?: 'Events', docs: Array<{ __typename?: 'Event', id: number, title: string, date: any }> } | null, gridCounts: { __typename?: 'GridCounts', marathon: number, tournament: number, series: number, collab: number, festival: number } };


export const GetEpochParticipantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEpochParticipants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EpochParticipants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleInEpoch"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"squad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEpochParticipantsQuery, GetEpochParticipantsQueryVariables>;
export const GetEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamersPresent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"-date","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"grid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventYoutube"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventReport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"htmlReport"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventSMC"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"videoSlug"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventsQuery, GetEventsQueryVariables>;
export const GetSquadMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSquadMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SquadMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"-joinDate","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"leaveDate"}},{"kind":"Field","name":{"kind":"Name","value":"streamer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"squad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSquadMembersQuery, GetSquadMembersQueryVariables>;
export const GetSquadsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSquadsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Squads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"name","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalMembers"},"name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"currentMembers"},"name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"leaveDate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"streamer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"epochs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"dateStart","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalEpochs"},"name":{"kind":"Name","value":"Epochs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalStreamers"},"name":{"kind":"Name","value":"Streamers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}}]}}]}}]} as unknown as DocumentNode<GetSquadsPageQuery, GetSquadsPageQueryVariables>;
export const GetSquadEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSquadEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"epochIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"epoch"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"epochIds"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"-date","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"200"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"streamersPresent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSquadEventsQuery, GetSquadEventsQueryVariables>;
export const GetSquadPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSquadPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Squads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"history"}},{"kind":"Field","alias":{"kind":"Name","value":"currentMembers"},"name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"leaveDate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"streamer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pastMembers"},"name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"leaveDate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"leaveDate"}},{"kind":"Field","name":{"kind":"Name","value":"streamer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"epochs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"-dateStart","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSquadPageQuery, GetSquadPageQueryVariables>;
export const GetStreamerGridsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStreamerGrids"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"StreamGrids"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"participants__streamer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamersPresent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"-date","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventYoutube"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventReport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"htmlReport"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventSMC"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"videoSlug"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStreamerGridsQuery, GetStreamerGridsQueryVariables>;
export const GetStreamerPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStreamerPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Streamers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"realName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"nicknames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"YoutubeEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"squads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"leaveDate"}},{"kind":"Field","name":{"kind":"Name","value":"squad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"epochs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleInEpoch"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"squad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStreamerPageQuery, GetStreamerPageQueryVariables>;
export const GetStreamerStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStreamerStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamerIdJson"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recentLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allEvents"},"name":{"kind":"Name","value":"Events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamersPresent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerIdJson"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"soloEvents"},"name":{"kind":"Name","value":"Events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamersPresent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerIdJson"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"grid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"recentEvents"},"name":{"kind":"Name","value":"Events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"streamersPresent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerIdJson"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"-date","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recentLimit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"gridCounts"},"name":{"kind":"Name","value":"GridCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"streamerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marathon"}},{"kind":"Field","name":{"kind":"Name","value":"tournament"}},{"kind":"Field","name":{"kind":"Name","value":"series"}},{"kind":"Field","name":{"kind":"Name","value":"collab"}},{"kind":"Field","name":{"kind":"Name","value":"festival"}}]}}]}}]} as unknown as DocumentNode<GetStreamerStatsQuery, GetStreamerStatsQueryVariables>;