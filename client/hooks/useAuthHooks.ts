import { setIsLoggined } from "./../store/user/action";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../graphql/generated/graphql";
import { RootState } from "../store";
import { tokenStorage } from "../utils/local-storage/token";
import Router from "next/router";

/**
 *  auth関連のhooks
 */
export const useAuthHooks = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [registerMutation] = useRegisterMutation();

  /**
   * ユーザー登録 - tokenをlocalStorageに保存し、isLogginedをtrueにし、Homeに飛ぶ
   */
  const register = useCallback(
    async (email: string, name: string, password: string) => {
      await registerMutation({
        variables: {
          input: {
            email,
            name,
            password,
          },
        },
        onCompleted: (data) => {
          tokenStorage.save(data.auth.register.token);
          dispatch(setIsLoggined(true));
          Router.push("/");
        },
        onError: (error) => {
          console.log(error);
        },
      });
    },
    [dispatch, registerMutation]
  );

  return { register, isLoggedIn };
};
