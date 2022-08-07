import "../styles/globals.css";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import type { AppProps } from "next/app";
import store, { RootState } from "../store";
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../lib/apollo-client";
import { loggined } from "../store/user/action";

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
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // a redux action that sends a one-time request to "loggined" on initial page load
    // which sets isLoggedIn when resolved
    if (!isLoggedIn) dispatch(loggined());
  }, []);

  return <Component {...pageProps} />;
};

export default MyAppWrapper;
