import { gql } from "@apollo/client";

export const getConversations = gql`
  query GetConversations {
    conversations {
      id
      name
      messages {
        id
        text
        sender
      }
    }
  }
`;

export const getMessages = gql`
  query GetMessages($conversationId: ID!) {
    conversation(id: $conversationId) {
      id
      messages {
        id
        text
        sender
      }
    }
  }
`;
