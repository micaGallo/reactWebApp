// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/main.cjs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RetryLink } from '@apollo/client/link/retry';
// import { setContext } from '@apollo/client/link/context';
// import { onError } from '@apollo/client/link/error';
// import { makeVar, ApolloLink, fromPromise } from '@apollo/client';
// import { REFRESH_TOKEN } from '../graphql/mutations';
// import { graphqlURL } from '../config';
// ​
// const httpLink = new HttpLink({
//   uri: graphqlURL,
// });
// ​
// // We start with a default value of `false`, and will update this to the actual value
// // when we initialize the Apollo Client
// export const isLoggedInVar = makeVar(false);
// let authToken = '';
// let isRefreshing = false;
// let pendingRequests = [];
// ​
// // Refresh token logic
// // ------------------------------------------
// ​
// const setIsRefreshing = (value) => {
//   isRefreshing = value;
// };
// ​
// const addPendingRequest = (pendingRequest) => {
//   pendingRequests.push(pendingRequest);
// };
// ​
// const resolvePendingRequests = () => {
//   pendingRequests.map((callback) => callback());
//   pendingRequests = [];
// };
// ​
// const getNewToken = async () => {
//   const currentRefreshToken = await AsyncStorage.getItem('refreshToken');
//   const { data } = await client.mutate({
//     mutation: REFRESH_TOKEN,
//     variables: { refreshToken: currentRefreshToken },
//   });
// ​
//   // Save new tokens into AsyncStorage
//   await AsyncStorage.setItem('authToken', data.refreshToken.token);
//   await AsyncStorage.setItem('refreshToken', data.refreshToken.refreshToken);
// };
// ​
// // ------------------------------------------
// ​
// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         isLoggedIn: {
//           read() {
//             return isLoggedInVar();
//           },
//         },
//       },
//     },
//   },
// });
// ​
// const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
//   if (graphQLErrors) {
//     graphQLErrors.forEach(async ({ message, locations, path, extensions }) => {
//       if (__DEV__)
//         console.log(
//           `[GraphQL error] Location: ${JSON.stringify(locations)} | Path: ${path?.join(
//             ','
//           )} | Message: ${message}`
//         );
// ​
//       switch (extensions.code) {
//         case 'UNAUTHENTICATED':
//           if (!isRefreshing) {
//             setIsRefreshing(true);
// ​
//             return fromPromise(
//               getNewToken().catch(async () => {
//                 resolvePendingRequests();
//                 setIsRefreshing(false);
// ​
//                 // Clear storage
//                 await AsyncStorage.removeItem('authToken');
//                 await AsyncStorage.removeItem('refreshToken');
// ​
//                 // Update the Auth Context to trigger event and set user logged out
//                 isLoggedInVar(false);
// ​
//                 // Clear the Apollo Client Store
//                 client.clearStore();
// ​
//                 return forward(operation);
//               })
//             ).flatMap(() => {
//               resolvePendingRequests();
//               setIsRefreshing(false);
// ​
//               return forward(operation);
//             });
//           } else {
//             return fromPromise(
//               new Promise((resolve) => {
//                 addPendingRequest(() => resolve());
//               })
//             ).flatMap(() => {
//               return forward(operation);
//             });
//           }
//       }
//     });
//   } else if (networkError) {
//     if (__DEV__) {
//       console.log(`[Network error]: ${networkError}`, networkError);
//     }
//   }
// });
// ​
// const retryLink = new RetryLink({
//   delay: {
//     initial: 300, // ms to wait before attempting the first time
//     max: 2000, // the maximum number of ms that link should wait for any retry
//     jitter: true,
//   },
//   attempts: {
//     max: 2, // the max number of times to try a single operation before giving up
//     retryIf: (error) => {
//       if (__DEV__) console.log('[RetryLink network error] ', error);
//       return !!error;
//     },
//   },
// });
// ​
// const logHeadersLink = new ApolloLink((operation, forward) => {
//   operation.setContext(({ headers = {} }) => {
//     return { headers };
//   });
// ​
//   return forward(operation);
// });
// ​
// // Fetch the auth token from storage asynchronously and update isLoggedInVar
// const initializeAuthStatus = async () => {
//   try {
//     authToken = await AsyncStorage.getItem('authToken');
//     isLoggedInVar(!!authToken);
//   } catch (e) {
//     console.error("Failed to fetch 'authToken' from storage:", e);
//   }
// };
// ​
// const authLink = setContext(async (_, { headers }) => {
//   authToken = await AsyncStorage.getItem('authToken');
// ​
//   return {
//     headers: {
//       ...headers,
//       authorization: authToken ? `Bearer ${authToken}` : '',
//     },
//   };
// });
// ​
// // Call the function to initialize the auth status
// initializeAuthStatus();
// ​
// // Used once we get the auth token after successfuly login or signup
// export const saveAndReinitializeToken = async (newToken) => {
//   try {
//     isLoggedInVar(!!newToken);
//   } catch (e) {
//     console.error("Failed to fetch 'authToken' from storage:", e);
//   }
// };
// ​
// // Initialize Apollo Client
// export let client = new ApolloClient({
//   link: ApolloLink.from([logHeadersLink, errorLink, retryLink, authLink, httpLink]),
//   cache,
//   defaultOptions: {
//     watchQuery: {
//       errorPolicy: 'all',
//     },
//     query: {
//       errorPolicy: 'all',
//     },
//     mutate: {
//       errorPolicy: 'all',
//     },
//   },
// });