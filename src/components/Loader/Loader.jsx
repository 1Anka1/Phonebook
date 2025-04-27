import PacmanLoader from 'react-spinners/PacmanLoader';
import * as SC from './Loader.styled';
export default function Loader({ isLoading, children }) {
  return isLoading ? (
    <SC.LoaderWrapper>
      <PacmanLoader size={50} color={'var(--primary-color)'} />{' '}
    </SC.LoaderWrapper>
  ) : (
    children
  );
}
