import {
    gql,
} from "@apollo/client";

export const GET_VIBES = gql`
query getVibes {
    vibes {
    created_at
    id
    image
    name
  }
}
`;