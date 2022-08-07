import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:8080/graphql",
});

export const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
