import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogged } from '../../redux/auth/authSelectors';

export default function PrivateRoute() {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Outlet /> : <Navigate to={'login'} replace />;
}
