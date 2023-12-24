import { gql } from "@apollo/client";

export const startConversation = gql`
  mutation CreateConversation($name: String!) {
    createConversation(name: $name) {
      id
      name
    }
  }
`;

export const sendMessage = gql`
  mutation SendMessage($conversationId: ID!, $text: String!, $sender: String!) {
    sendMessage(conversationId: $conversationId, text: $text, sender: $sender) {
      id
      text
      sender
    }
  }
`;
