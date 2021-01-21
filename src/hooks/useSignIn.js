import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const signInResult = mutate({ variables: { credentials: { username, password } } });
    try {
      const { data } = await signInResult;
      if (data) {
        await authStorage.setAccessToken(data.authorize.accessToken);        
        apolloClient.resetStore();
      }
    } catch (error) {
      console.log('Error in Auth', error);
    }
    
    return signInResult;
  };

  return [signIn, result];
};

export default useSignIn;