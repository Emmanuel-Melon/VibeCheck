import { gql } from "@apollo/client";

export const GET_MESSAGES_SUBSCRIPTION = gql`
  query GetMessagesSubscription($chat_id: uuid) {
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
