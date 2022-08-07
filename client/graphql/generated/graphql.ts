import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
};

export type AuthOps = {
  __typename?: 'AuthOps';
  login: Scalars['Any'];
  register: Scalars['Any'];
};


export type AuthOpsLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type AuthOpsRegisterArgs = {
  input: NewUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: AuthOps;
};

export type NewUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  loggined: Scalars['Boolean'];
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LogginedQueryVariables = Exact<{ [key: string]: never; }>;


export type LogginedQuery = { __typename?: 'Query', loggined: boolean };


export const LogginedDocument = gql`
    query loggined {
  loggined
}
    `;

/**
 * __useLogginedQuery__
 *
 * To run a query within a React component, call `useLogginedQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogginedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogginedQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogginedQuery(baseOptions?: Apollo.QueryHookOptions<LogginedQuery, LogginedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogginedQuery, LogginedQueryVariables>(LogginedDocument, options);
      }
export function useLogginedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogginedQuery, LogginedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogginedQuery, LogginedQueryVariables>(LogginedDocument, options);
        }
export type LogginedQueryHookResult = ReturnType<typeof useLogginedQuery>;
export type LogginedLazyQueryHookResult = ReturnType<typeof useLogginedLazyQuery>;
export type LogginedQueryResult = Apollo.QueryResult<LogginedQuery, LogginedQueryVariables>;