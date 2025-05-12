import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ component, redirectTo }) {
  const { loggedIn, token, refresh } = useAuth();
  const shouldRedirect = !refresh && !loggedIn && !token;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
}
