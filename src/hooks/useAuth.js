import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLogged,
  selectIsRefreshing,
  selectIsLoading,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const loggedIn = useSelector(selectIsLogged);
  const refresh = useSelector(selectIsRefreshing);
  const loading = useSelector(selectIsLoading);

  return {
    user,
    token,
    loggedIn,
    refresh,
    loading,
  };
};
