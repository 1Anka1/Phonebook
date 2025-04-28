import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogged } from '../../redux/auth/authSelectors';

export default function PublicRoute() {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Navigate to={'/'} replace /> : <Outlet />;
}
