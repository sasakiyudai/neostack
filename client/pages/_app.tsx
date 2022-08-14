import "../styles/globals.css";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import type { AppProps } from "next/app";
import store from "../store";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../lib/apollo-client";
import { setIsLoggined } from "../store/user/action";
import { useLogginedQuery } from "../graphql/generated/graphql";
import { tokenStorage } from "../utils/local-storage/token";
import { CircularProgress } from "@mui/material";

const MyAppWrapper = (props: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <MyApp {...props} />
      </ReduxProvider>
    </ApolloProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  // get user role from redux state
  const { data, loading, error } = useLogginedQuery();
  const dispatch = useDispatch();
  const [isDispatched, setIsDispatched] = useState(false);

  useEffect(() => {
    // a redux action that sends a one-time request to "loggined" on initial page load
    // which sets isLoggedIn when resolved
    if (data) {
      dispatch(setIsLoggined(data.loggined ?? false)); // data.loggined always true
      setIsDispatched(true);
    }
    if (error) {
      setIsDispatched(true);
    }
  }, [data, loading, error]);

  return !loading && isDispatched ? <Component {...pageProps} /> : null;
};

export default MyAppWrapper;
