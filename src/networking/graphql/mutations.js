// import { gql } from '@apollo/client';
// ​
// export const CREATE_USER = gql`
//   mutation CreateUser($input: CreateUserInput!) {
//     createUser(input: $input) {
//       success
//       message
//       token
//       refreshToken
//       tokenExpires
//     }
//   }
// `;
// ​
// export const SEND_VERIFICATION_CODE = gql`
//   mutation SendVerificationCode {
//     sendVerificationCode {
//       success
//     }
//   }
// `;
// ​
// export const SIGN_OUT = gql`
//   mutation SignOut {
//     signOut {
//       success
//     }
//   }
// `;
// ​
// export const VERIFY_ACCOUNT = gql`
//   mutation VerifyAccount($verificationCode: String!) {
//     verifyAccount(verificationCode: $verificationCode) {
//       success
//     }
//   }
// `;
// ​
// export const SIGN_IN = gql`
//   mutation SignIn($email: String!, $password: String!) {
//     signIn(email: $email, password: $password) {
//       success
//       token
//       refreshToken
//       tokenExpires
//     }
//   }
// `;
// ​
// export const FORGOT_PASSWORD = gql`
//   mutation ForgotPassword($email: String!) {
//     forgotPassword(email: $email) {
//       success
//     }
//   }
// `;
// ​
// export const CHANGE_PASSWORD = gql`
//   mutation ChangePassword($password: String!) {
//     changePassword(password: $password) {
//       success
//     }
//   }
// `;
// ​
// export const UPDATE_USER = gql`
//   mutation UpdateUser($input: UpdateUserInput!) {
//     updateUser(input: $input) {
//       success
//     }
//   }
// `;
// ​
// export const REFRESH_DESIGNATION = gql`
//   mutation RefreshDesignation {
//     refreshDesignation {
//       success
//     }
//   }
// `;
// ​
// export const DELETE_USER = gql`
//   mutation DeleteUser {
//     deleteUser {
//       success
//     }
//   }
// `;
// ​
// export const PURGE_USER = gql`
//   mutation PurgeUser($userId: Int!) {
//     purgeUser(userId: $userId) {
//       success
//     }
//   }
// `;
// ​
// export const REFRESH_TOKEN = gql`
//   mutation RefreshToken($refreshToken: String!) {
//     refreshToken(refreshToken: $refreshToken) {
//       success
//       token
//       refreshToken
//       tokenExpires
//     }
//   }
// `;
// ​
// export const CREATE_POST = gql`
//   mutation CreatePost($forumId: Int!, $title: String, $content: String!) {
//     createPost(forumId: $forumId, title: $title, content: $content) {
//       id
//       title
//       content
//       user {
//         id
//         firstName
//         lastName
//         designation
//         image
//       }
//       comments {
//         id
//         text
//         user {
//           id
//           firstName
//           lastName
//           designation
//           image
//         }
//         replies {
//           id
//           text
//           user {
//             id
//             firstName
//             lastName
//             designation
//             image
//           }
//         }
//       }
//       commentsCount
//       createdAt
//       updatedAt
//     }
//   }
// `;
// ​
// export const EDIT_POST = gql`
//   mutation EditPost($postId: Int!, $title: String, $content: String!) {
//     editPost(postId: $postId, title: $title, content: $content) {
//       id
//       title
//       content
//       user {
//         id
//         firstName
//         lastName
//         designation
//         image
//       }
//       comments {
//         id
//         text
//         user {
//           id
//           firstName
//           lastName
//           designation
//           image
//         }
//         replies {
//           id
//           text
//           user {
//             id
//             firstName
//             lastName
//             designation
//             image
//           }
//         }
//       }
//       commentsCount
//       createdAt
//       updatedAt
//     }
//   }
// `;
// ​
// export const DELETE_POST = gql`
//   mutation DeletePost($postId: Int!) {
//     deletePost(postId: $postId) {
//       success
//     }
//   }
// `;
// ​
// export const REPORT_POST = gql`
//   mutation ReportPost($postId: Int!, $message: String!) {
//     reportPost(postId: $postId, message: $message) {
//       success
//     }
//   }
// `;
// ​
// export const CREATE_COMMENT = gql`
//   mutation CreateComment($postId: Int!, $text: String!) {
//     createComment(postId: $postId, text: $text) {
//       id
//       text
//       user {
//         id
//         firstName
//         lastName
//         designation
//         image
//       }
//       replies {
//         id
//         text
//         user {
//           id
//           firstName
//           lastName
//           designation
//           image
//         }
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// ​
// export const EDIT_COMMENT = gql`
//   mutation EditComment($commentId: Int!, $text: String!) {
//     editComment(commentId: $commentId, text: $text) {
//       id
//       text
//       user {
//         id
//         firstName
//         lastName
//         designation
//         image
//       }
//       replies {
//         id
//         text
//         user {
//           id
//           firstName
//           lastName
//           designation
//           image
//         }
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// ​
// export const DELETE_COMMENT = gql`
//   mutation DeleteComment($commentId: Int!) {
//     deleteComment(commentId: $commentId) {
//       success
//     }
//   }
// `;
// ​
// export const REPORT_COMMENT = gql`
//   mutation ReportComment($commentId: Int!, $message: String!) {
//     reportComment(commentId: $commentId, message: $message) {
//       success
//     }
//   }
// `;
// ​
// export const CREATE_REPLY = gql`
//   mutation CreateReply($commentId: Int!, $text: String!) {
//     createReply(commentId: $commentId, text: $text) {
//       id
//       text
//       user {
//         id
//         firstName
//         lastName
//         designation
//         image
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// ​
// export const EDIT_REPLY = gql`
//   mutation EditReply($replyId: Int!, $text: String!) {
//     editReply(replyId: $replyId, text: $text) {
//       id
//       text
//       user {
//         id
//         firstName
//         lastName
//         designation
//         image
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// ​
// export const DELETE_REPLY = gql`
//   mutation DeleteReply($replyId: Int!) {
//     deleteReply(replyId: $replyId) {
//       success
//     }
//   }
// `;
// ​
// export const REPORT_REPLY = gql`
//   mutation ReportReply($replyId: Int!, $message: String!) {
//     reportReply(replyId: $replyId, message: $message) {
//       success
//     }
//   }
// `;
// ​
// export const CREATE_CHAT_TOKEN = gql`
//   mutation {
//     createChatToken {
//       token
//     }
//   }
// `;