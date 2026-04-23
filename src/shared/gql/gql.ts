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
    "mutation UpdateSettingsVideo($categoryId: [String!]!, $input: UpdateVideoInput!, $slug: String!) {\n  updateSettingsVideo(categoryId: $categoryId, input: $input, slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    status\n    thumbnailUrl\n    title\n    slug\n    slug\n    updatedAt\n  }\n}": typeof types.UpdateSettingsVideoDocument,
    "mutation LogoutUser {\n  logoutUser\n}": typeof types.LogoutUserDocument,
    "mutation UpdateAvatarProfile($avatar: Upload!) {\n  updateAvatarProfile(avatar: $avatar) {\n    key\n    updatedAt\n  }\n}": typeof types.UpdateAvatarProfileDocument,
    "mutation DeleteAvatarProfile($key: String!) {\n  deleteAvatarProfile(key: $key)\n}": typeof types.DeleteAvatarProfileDocument,
    "mutation ConfirmVideoUpload($input: ConfirmVideoUploadInput!) {\n  confirmVideoUpload(input: $input) {\n    success\n  }\n}": typeof types.ConfirmVideoUploadDocument,
    "mutation RefreshTokens {\n  refreshTokens {\n    accessToken\n  }\n}": typeof types.RefreshTokensDocument,
    "mutation SendOtp($input: SendOtpInput!) {\n  sendOtp(input: $input) {\n    ok\n  }\n}": typeof types.SendOtpDocument,
    "mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input) {\n    accessToken\n  }\n}": typeof types.VerifyOtpDocument,
    "mutation CreateCategoryVideo($image: Upload!, $input: CreateCategoryInput!) {\n  createCategoryVideo(image: $image, input: $input) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}": typeof types.CreateCategoryVideoDocument,
    "mutation DeleteCategory($slug: String!) {\n  deleteCategory(slug: $slug) {\n    status\n  }\n}": typeof types.DeleteCategoryDocument,
    "mutation UpdateCategory($image: Upload, $input: UpdateCategoryInput!, $slug: String!) {\n  updateCategory(image: $image, input: $input, slug: $slug) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}": typeof types.UpdateCategoryDocument,
    "query GetAllVideosOwner {\n  getAllVideosOwner {\n    access\n    createdAt\n    description\n    durationSeconds\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}": typeof types.GetAllVideosOwnerDocument,
    "query GetCategoriesVideo($targets: [TargetType!]) {\n  getCategories(targets: $targets) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n      description\n    }\n  }\n}": typeof types.GetCategoriesVideoDocument,
    "query GetSettingVideoBySlug($slug: String!) {\n  getSettingVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}": typeof types.GetSettingVideoBySlugDocument,
    "query CheckAvailabilityCategory($slug: String!) {\n  checkAvailabilityCategory(slug: $slug) {\n    isAvailable\n  }\n}": typeof types.CheckAvailabilityCategoryDocument,
    "query GetCategories {\n  getCategories {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n    }\n  }\n}": typeof types.GetCategoriesDocument,
    "query GetCategoryWithTranslations($slug: String!) {\n  getCategoryWithTranslations(slug: $slug) {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n  }\n}": typeof types.GetCategoryWithTranslationsDocument,
    "query GetAccount {\n  GetAccount {\n    userId\n    user {\n      id\n      avatar\n      displayName\n      userName\n      updatedAt\n      createdAt\n    }\n    role\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetAccountDocument,
    "query GetUserSystemMessages($publicKey: String!) {\n  getUserSystemMessages(publicKey: $publicKey) {\n    chatId\n    encryptedChatKey\n    messages {\n      authTag\n      chatId\n      content\n      createdAt\n      id\n      initialVector\n      isDeleted\n      isEdited\n      senderId\n      updatedAt\n    }\n  }\n}": typeof types.GetUserSystemMessagesDocument,
    "query GetVideoUploadTicket($contentType: String!, $fileName: String!) {\n  getVideoUploadTicket(contentType: $contentType, fileName: $fileName) {\n    fileKey\n    uploadUrl\n    videoId\n  }\n}": typeof types.GetVideoUploadTicketDocument,
    "query GetPublicVideoBySlug($slug: String!) {\n  getPublicVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}": typeof types.GetPublicVideoBySlugDocument,
    "subscription SecurityNotification {\n  securityNotification {\n    authTag\n    content\n    iv\n    messageId\n  }\n}": typeof types.SecurityNotificationDocument,
};
const documents: Documents = {
    "mutation UpdateSettingsVideo($categoryId: [String!]!, $input: UpdateVideoInput!, $slug: String!) {\n  updateSettingsVideo(categoryId: $categoryId, input: $input, slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    status\n    thumbnailUrl\n    title\n    slug\n    slug\n    updatedAt\n  }\n}": types.UpdateSettingsVideoDocument,
    "mutation LogoutUser {\n  logoutUser\n}": types.LogoutUserDocument,
    "mutation UpdateAvatarProfile($avatar: Upload!) {\n  updateAvatarProfile(avatar: $avatar) {\n    key\n    updatedAt\n  }\n}": types.UpdateAvatarProfileDocument,
    "mutation DeleteAvatarProfile($key: String!) {\n  deleteAvatarProfile(key: $key)\n}": types.DeleteAvatarProfileDocument,
    "mutation ConfirmVideoUpload($input: ConfirmVideoUploadInput!) {\n  confirmVideoUpload(input: $input) {\n    success\n  }\n}": types.ConfirmVideoUploadDocument,
    "mutation RefreshTokens {\n  refreshTokens {\n    accessToken\n  }\n}": types.RefreshTokensDocument,
    "mutation SendOtp($input: SendOtpInput!) {\n  sendOtp(input: $input) {\n    ok\n  }\n}": types.SendOtpDocument,
    "mutation VerifyOtp($input: VerifyOtpInput!) {\n  verifyOtp(input: $input) {\n    accessToken\n  }\n}": types.VerifyOtpDocument,
    "mutation CreateCategoryVideo($image: Upload!, $input: CreateCategoryInput!) {\n  createCategoryVideo(image: $image, input: $input) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}": types.CreateCategoryVideoDocument,
    "mutation DeleteCategory($slug: String!) {\n  deleteCategory(slug: $slug) {\n    status\n  }\n}": types.DeleteCategoryDocument,
    "mutation UpdateCategory($image: Upload, $input: UpdateCategoryInput!, $slug: String!) {\n  updateCategory(image: $image, input: $input, slug: $slug) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}": types.UpdateCategoryDocument,
    "query GetAllVideosOwner {\n  getAllVideosOwner {\n    access\n    createdAt\n    description\n    durationSeconds\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}": types.GetAllVideosOwnerDocument,
    "query GetCategoriesVideo($targets: [TargetType!]) {\n  getCategories(targets: $targets) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n      description\n    }\n  }\n}": types.GetCategoriesVideoDocument,
    "query GetSettingVideoBySlug($slug: String!) {\n  getSettingVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}": types.GetSettingVideoBySlugDocument,
    "query CheckAvailabilityCategory($slug: String!) {\n  checkAvailabilityCategory(slug: $slug) {\n    isAvailable\n  }\n}": types.CheckAvailabilityCategoryDocument,
    "query GetCategories {\n  getCategories {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n    }\n  }\n}": types.GetCategoriesDocument,
    "query GetCategoryWithTranslations($slug: String!) {\n  getCategoryWithTranslations(slug: $slug) {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n  }\n}": types.GetCategoryWithTranslationsDocument,
    "query GetAccount {\n  GetAccount {\n    userId\n    user {\n      id\n      avatar\n      displayName\n      userName\n      updatedAt\n      createdAt\n    }\n    role\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}": types.GetAccountDocument,
    "query GetUserSystemMessages($publicKey: String!) {\n  getUserSystemMessages(publicKey: $publicKey) {\n    chatId\n    encryptedChatKey\n    messages {\n      authTag\n      chatId\n      content\n      createdAt\n      id\n      initialVector\n      isDeleted\n      isEdited\n      senderId\n      updatedAt\n    }\n  }\n}": types.GetUserSystemMessagesDocument,
    "query GetVideoUploadTicket($contentType: String!, $fileName: String!) {\n  getVideoUploadTicket(contentType: $contentType, fileName: $fileName) {\n    fileKey\n    uploadUrl\n    videoId\n  }\n}": types.GetVideoUploadTicketDocument,
    "query GetPublicVideoBySlug($slug: String!) {\n  getPublicVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}": types.GetPublicVideoBySlugDocument,
    "subscription SecurityNotification {\n  securityNotification {\n    authTag\n    content\n    iv\n    messageId\n  }\n}": types.SecurityNotificationDocument,
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
export function graphql(source: "mutation UpdateSettingsVideo($categoryId: [String!]!, $input: UpdateVideoInput!, $slug: String!) {\n  updateSettingsVideo(categoryId: $categoryId, input: $input, slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    status\n    thumbnailUrl\n    title\n    slug\n    slug\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateSettingsVideo($categoryId: [String!]!, $input: UpdateVideoInput!, $slug: String!) {\n  updateSettingsVideo(categoryId: $categoryId, input: $input, slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    status\n    thumbnailUrl\n    title\n    slug\n    slug\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LogoutUser {\n  logoutUser\n}"): (typeof documents)["mutation LogoutUser {\n  logoutUser\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateAvatarProfile($avatar: Upload!) {\n  updateAvatarProfile(avatar: $avatar) {\n    key\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateAvatarProfile($avatar: Upload!) {\n  updateAvatarProfile(avatar: $avatar) {\n    key\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteAvatarProfile($key: String!) {\n  deleteAvatarProfile(key: $key)\n}"): (typeof documents)["mutation DeleteAvatarProfile($key: String!) {\n  deleteAvatarProfile(key: $key)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ConfirmVideoUpload($input: ConfirmVideoUploadInput!) {\n  confirmVideoUpload(input: $input) {\n    success\n  }\n}"): (typeof documents)["mutation ConfirmVideoUpload($input: ConfirmVideoUploadInput!) {\n  confirmVideoUpload(input: $input) {\n    success\n  }\n}"];
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
export function graphql(source: "mutation CreateCategoryVideo($image: Upload!, $input: CreateCategoryInput!) {\n  createCategoryVideo(image: $image, input: $input) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateCategoryVideo($image: Upload!, $input: CreateCategoryInput!) {\n  createCategoryVideo(image: $image, input: $input) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteCategory($slug: String!) {\n  deleteCategory(slug: $slug) {\n    status\n  }\n}"): (typeof documents)["mutation DeleteCategory($slug: String!) {\n  deleteCategory(slug: $slug) {\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCategory($image: Upload, $input: UpdateCategoryInput!, $slug: String!) {\n  updateCategory(image: $image, input: $input, slug: $slug) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateCategory($image: Upload, $input: UpdateCategoryInput!, $slug: String!) {\n  updateCategory(image: $image, input: $input, slug: $slug) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllVideosOwner {\n  getAllVideosOwner {\n    access\n    createdAt\n    description\n    durationSeconds\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}"): (typeof documents)["query GetAllVideosOwner {\n  getAllVideosOwner {\n    access\n    createdAt\n    description\n    durationSeconds\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategoriesVideo($targets: [TargetType!]) {\n  getCategories(targets: $targets) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n      description\n    }\n  }\n}"): (typeof documents)["query GetCategoriesVideo($targets: [TargetType!]) {\n  getCategories(targets: $targets) {\n    createdAt\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n      description\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSettingVideoBySlug($slug: String!) {\n  getSettingVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}"): (typeof documents)["query GetSettingVideoBySlug($slug: String!) {\n  getSettingVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CheckAvailabilityCategory($slug: String!) {\n  checkAvailabilityCategory(slug: $slug) {\n    isAvailable\n  }\n}"): (typeof documents)["query CheckAvailabilityCategory($slug: String!) {\n  checkAvailabilityCategory(slug: $slug) {\n    isAvailable\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategories {\n  getCategories {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n    }\n  }\n}"): (typeof documents)["query GetCategories {\n  getCategories {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      title\n      language\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategoryWithTranslations($slug: String!) {\n  getCategoryWithTranslations(slug: $slug) {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n  }\n}"): (typeof documents)["query GetCategoryWithTranslations($slug: String!) {\n  getCategoryWithTranslations(slug: $slug) {\n    id\n    slug\n    targets\n    thumbnailUrl\n    translations {\n      description\n      id\n      language\n      title\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAccount {\n  GetAccount {\n    userId\n    user {\n      id\n      avatar\n      displayName\n      userName\n      updatedAt\n      createdAt\n    }\n    role\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetAccount {\n  GetAccount {\n    userId\n    user {\n      id\n      avatar\n      displayName\n      userName\n      updatedAt\n      createdAt\n    }\n    role\n    phone\n    email\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserSystemMessages($publicKey: String!) {\n  getUserSystemMessages(publicKey: $publicKey) {\n    chatId\n    encryptedChatKey\n    messages {\n      authTag\n      chatId\n      content\n      createdAt\n      id\n      initialVector\n      isDeleted\n      isEdited\n      senderId\n      updatedAt\n    }\n  }\n}"): (typeof documents)["query GetUserSystemMessages($publicKey: String!) {\n  getUserSystemMessages(publicKey: $publicKey) {\n    chatId\n    encryptedChatKey\n    messages {\n      authTag\n      chatId\n      content\n      createdAt\n      id\n      initialVector\n      isDeleted\n      isEdited\n      senderId\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetVideoUploadTicket($contentType: String!, $fileName: String!) {\n  getVideoUploadTicket(contentType: $contentType, fileName: $fileName) {\n    fileKey\n    uploadUrl\n    videoId\n  }\n}"): (typeof documents)["query GetVideoUploadTicket($contentType: String!, $fileName: String!) {\n  getVideoUploadTicket(contentType: $contentType, fileName: $fileName) {\n    fileKey\n    uploadUrl\n    videoId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPublicVideoBySlug($slug: String!) {\n  getPublicVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}"): (typeof documents)["query GetPublicVideoBySlug($slug: String!) {\n  getPublicVideoBySlug(slug: $slug) {\n    access\n    categories {\n      id\n    }\n    createdAt\n    description\n    durationSeconds\n    id\n    ownerId\n    path\n    slug\n    status\n    thumbnailUrl\n    title\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription SecurityNotification {\n  securityNotification {\n    authTag\n    content\n    iv\n    messageId\n  }\n}"): (typeof documents)["subscription SecurityNotification {\n  securityNotification {\n    authTag\n    content\n    iv\n    messageId\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;