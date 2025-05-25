import { Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout/Layout';
import { Home, Login, Register, Phonebook } from './pages';
import PrivateRoute from './components/AuthRoutes/PrivateRoute';
import PublicRoute from './components/AuthRoutes/PublicRoute';
import { refreshUser } from './redux/auth/authOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
// import Loader from './components/Loader/Loader';

function App() {
  const { refresh } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return refresh ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="phonebook"
          element={<PrivateRoute redirectTo="/" component={<Phonebook />} />}
        />

        <Route
          path="login"
          element={<PublicRoute redirectTo="/phonebook" component={<Login />} />}
        />
        <Route
          path="register"
          element={<PublicRoute redirectTo="/phonebook" component={<Register />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
