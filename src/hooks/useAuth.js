import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLogged,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const loggedIn = useSelector(selectIsLogged);
  const refresh = useSelector(selectIsRefreshing);

  return {
    user,
    token,
    loggedIn,
    refresh,
  };
};
