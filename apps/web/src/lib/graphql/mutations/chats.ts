import { gql } from "@apollo/client";

export const START_NEW_CHAT = gql`
  mutation startNewChat($object: chats_insert_input!) {
    startNewChat(object: $object) {
      id
      name
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($object: messages_insert_input!) {
  insert_messages_one(object: $object) {
    id
  }
}
`;
