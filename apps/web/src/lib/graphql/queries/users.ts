import {
    gql,
} from "@apollo/client";

export const GET_USERS = gql`
query getUsers {
  users {
    name
    id
    last_name
    updated_at
    first_name
    avatar
    created_at
    bio
  }
}
`;
