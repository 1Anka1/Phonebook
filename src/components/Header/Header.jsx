import Navigation from '../Navigation/Navigation';
import * as SC from './Header.styled';
import { Container } from '../shared/Layout/Layout.styled';
export default function Header() {
  return (
    <header>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
