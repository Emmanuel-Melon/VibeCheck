import { gql } from "@apollo/client";

export const GET_USER_MATCHES = gql`
  query getUserMatches($userId: uuid) {
    matches(where: {user_id: {_eq: $userId}}) {
    created_at
    id
    candidate_id
    user_id
    candidate {
      name
      avatar
      id
    }
  }
  }
`;
