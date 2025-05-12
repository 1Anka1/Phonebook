import PacmanLoader from 'react-spinners/PacmanLoader';
import * as LSC from './Loader.styled';
import { useAuth } from '../../hooks/useAuth';

export default function Loader({ children }) {
  const { loading, refresh } = useAuth();

  return loading || refresh ? (
    <LSC.LoaderWrapper>
      <PacmanLoader size={50} color={'var(--primary-color)'} />
    </LSC.LoaderWrapper>
  ) : (
    children
  );
}
