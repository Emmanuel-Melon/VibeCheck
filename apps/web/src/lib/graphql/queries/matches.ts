import { gql } from "@apollo/client";

export const GET_USER_MATCHES = gql`
  query getUserMatches {
    matches {
      created_at
      id
      match {
        id
        name
        avatar
      }
      user {
        id
        name
      }
    }
  }
`;
