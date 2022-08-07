import { CircularProgress } from "@mui/material";
import Router from "next/router";
import { NextComponentType } from "next/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const withAuthentication = (WrappedComponent: NextComponentType) => {
  const RequiresAuthentication = (props: any) => {
    // get user is logged in from redux state
    const { isLoggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
      // if a there isn't a logged in user, redirect to the login page
      if (!isLoggedIn) Router.push("/login");
    }, [isLoggedIn]);

    // if there's a loggedInUser, show the wrapped page, otherwise show a loading indicator
    return isLoggedIn ? <WrappedComponent {...props} /> : <CircularProgress />;
  };

  return RequiresAuthentication;
};
