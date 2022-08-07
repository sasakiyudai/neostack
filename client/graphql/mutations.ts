import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($input: NewUser!) {
    auth {
      register(input: $input)
    }
  }
`;
