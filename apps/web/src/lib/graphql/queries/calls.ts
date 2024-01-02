import { gql } from "@apollo/client";

export const getCallHistory = gql`
  query GetCallHistory {
    calls {
      id
      
    }
  }
`;
