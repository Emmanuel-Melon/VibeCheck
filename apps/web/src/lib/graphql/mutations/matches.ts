import { gql } from "@apollo/client";

export const likeVibeCandidate = gql`
  mutation likeVibeCandidate($object: matches_insert_input!) {
    insert_matches_one(object: $object) {
      created_at
      id
    }
  }
`;

export const skipVibeCandidate = gql`
  mutation likeVibeCandidate($object: matches_insert_input!) {
    insert_matches_one(object: $object) {
      created_at
      id
    }
  }
`;


