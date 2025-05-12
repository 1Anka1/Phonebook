import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PublicRoute({ component, redirectTo }) {
  const { loggedIn } = useAuth();
  return loggedIn ? <Navigate to={redirectTo} replace /> : component;
}
