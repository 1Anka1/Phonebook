import { Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout/Layout';
import { Home, Login, Register, Phonebook } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="phonebook" element={<Phonebook />} />
      </Route>
    </Routes>
  );
}

export default App;
