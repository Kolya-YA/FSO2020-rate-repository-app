import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAutorizedUser = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER);
  return data?.authorizedUser;
};

export default useAutorizedUser;