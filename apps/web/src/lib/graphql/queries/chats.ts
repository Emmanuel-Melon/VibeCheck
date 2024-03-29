import { gql } from "@apollo/client";

export const GET_USER_CHATS = gql`
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

export const GET_MESSAGES = gql`
  query GetMessages($chat_id: uuid) {
    messages(where: { chat_id: { _eq: $chat_id } }) {
      id
      chat_id
      sender_id
      content
      type
      reply_to_id
      created_at
      updated_at
      user {
        id
        name
        avatar
      }
    }
  }
`;
