import { gql } from '@apollo/client';
​
export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
​
export const VERIFY_SALESFORCE_EMAIL = gql`
  query VerifySalesforceEmail($email: String!) {
    verifySalesforceEmail(email: $email) {
      success
      email
      designation
      firstName
      lastName
      token
    }
  }
`;
​
export const REQUEST_CREATE_USER = gql`
  query RequestCreateUser($input: RequestCreateUserInput!) {
    requestCreateUser(input: $input) {
      success
    }
  }
`;
​
export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      firstName
      lastName
      email
      image
      designation
      preferredFirstName
      emailVerified
    }
  }
`;
​
export const GET_EVENTS = gql`
  query GetEvents($input: GetEventsInput!) {
    getEvents(input: $input) {
      id
      title
      link
      description
      venueName
      venueLocation {
        address
        city
        state
        zip
      }
      venueWebsite
      startDate
      endDate
      image
      ageRestriction
      type
      registrable
      registrationLink
    }
  }
`;
​
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    getUpcomingEvents {
      id
      title
      link
      description
      venueName
      venueLocation {
        address
        city
        state
        zip
      }
      venueWebsite
      startDate
      endDate
      image
      ageRestriction
      type
      registrable
      registrationLink
    }
  }
`;
​
export const GET_EVENT_BY_ID = gql`
  query GetEventById($eventId: Int!) {
    getEventById(eventId: $eventId) {
      id
      title
      link
      description
      venueName
      venueLocation {
        address
        city
        state
        zip
      }
      venueWebsite
      startDate
      endDate
      image
      ageRestriction
      type
      registrable
      registrationLink
    }
  }
`;
​
export const SEARCH_EVENTS = gql`
  query SearchEvents($query: String!) {
    searchEvents(query: $query) {
      id
      title
      link
      description
      venueName
      venueLocation {
        address
        city
        state
        zip
      }
      venueWebsite
      startDate
      endDate
      image
      ageRestriction
      type
      registrable
      registrationLink
    }
  }
`;
​
export const GET_EVENT_TYPES = gql`
  query GetEventTypes {
    getEventTypes
  }
`;
​
export const GET_NOTIFICATION_BY_ID = gql`
  query GetNotificationById($id: ID!) {
    getNotificationById(id: $id) {
      id
      title
      message
      targetUserIds
    }
  }
`;
​
export const GET_FORUMS = gql`
  query GetForums {
    getForums {
      id
      title
      description
      image
    }
  }
`;
​
export const GET_FORUM = gql`
  query GetForum($id: Int!, $sortBy: String) {
    getForum(id: $id, sortBy: $sortBy) {
      id
      title
      description
      image
      posts {
        id
        title
        content
        user {
          id
          firstName
          lastName
          designation
          image
        }
        commentsCount
        createdAt
        updatedAt
      }
    }
  }
`;
​
export const GET_POST = gql`
  query GetPost($id: Int!) {
    getPost(id: $id) {
      id
      title
      content
      user {
        id
        firstName
        lastName
        designation
        image
      }
      comments {
        id
        text
        user {
          id
          firstName
          lastName
          designation
          image
        }
        replies {
          id
          text
          user {
            id
            firstName
            lastName
            designation
            image
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      commentsCount
      createdAt
      updatedAt
    }
  }
`;
​
export const GET_NEWS = gql`
  query GetNews {
    getNews {
      id
      date
      title
      image
      shortDescription
      longDescription
    }
  }
`;
​
export const GET_NEWS_BY_ID = gql`
  query GetNewsById($newsId: Int!) {
    getNewsById(newsId: $newsId) {
      id
      date
      title
      image
      shortDescription
      longDescription
    }
  }
`;
​
export const GET_VIDEOS = gql`
  query GetVideos($videoType: String!) {
    getVideos(videoType: $videoType) {
      url
      title
      image
      description
      type
      duration
    }
  }
`;
​
export const SEARCH_USERS = gql`
  query SearchUsers($searchTerm: String!) {
    searchUsers(query: $searchTerm) {
      email
      firstName
      id
      image
      lastName
      designation
    }
  }
`;
​
export const GET_USER_BY_ID = gql`
  query GetUserById($userId: Int!) {
    getUserById(userId: $userId) {
      email
      firstName
      id
      image
      lastName
      designation
    }
  }
`;
​
export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    getNotifications {
      id
      message
      read
      title
    }
  }
`;