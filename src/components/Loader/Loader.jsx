import PacmanLoader from 'react-spinners/PacmanLoader';
import * as SC from './Loader.styled';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../redux/auth/authSelectors';

export default function Loader({ children }) {
  const isLoading = useSelector(selectIsLogged);
  console.log(isLoading);

  return !isLoading ? (
    <SC.LoaderWrapper>
      <PacmanLoader size={50} color={'var(--primary-color)'} />
    </SC.LoaderWrapper>
  ) : (
    children
  );
}
