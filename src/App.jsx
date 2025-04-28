import { Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout/Layout';
import { Home, Login, Register, Phonebook } from './pages';
import PrivateRoute from './components/AuthRoutes/PrivateRoute';
import PublicRoute from './components/AuthRoutes/PublicRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="" element={<PrivateRoute />}>
          <Route path="phonebook" element={<Phonebook />} />
        </Route>

        <Route path="" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
