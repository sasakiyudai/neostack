import { setIsLoggined } from "./../store/user/action";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogginedQuery } from "../graphql/generated/graphql";
import { RootState } from "../store";

/**
 *  pages/_appで使用されるhooks
 */
export const useAppHooks = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { data: loggined } = useLogginedQuery();

  /**
   * 最初のロード時にログインしているかどうかをチェックする
   */
  const loginOnLoad = useCallback(async () => {
    const isLoggedIn = loggined?.loggined;

    if (isLoggedIn !== undefined) {
      dispatch(setIsLoggined(isLoggedIn));
    }
  }, [dispatch, loggined]);

  return { loginOnLoad, isLoggedIn };
};
