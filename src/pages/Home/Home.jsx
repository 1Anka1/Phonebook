import { useSelector } from 'react-redux';
import { Container, Section } from '../../components/shared/Layout/Layout.styled';
import { selectIsLogged, selectUser } from '../../redux/auth/authSelectors';
import * as SC from './Home.styled';

export default function Home() {
  const { name } = useSelector(selectUser);
  const isLogged = useSelector(selectIsLogged);

  return (
    <Section>
      <Container>
        {isLogged ? (
          <SC.Wrapper>
            <SC.Title>Welcome, {name}!</SC.Title>
            <SC.Text>Now you can manage your contacts easily and securely.</SC.Text>
          </SC.Wrapper>
        ) : (
          <SC.Wrapper>
            <SC.Title>Welcome to PhoneBook Website!</SC.Title>
            <SC.Text>Please log in or register to access your contacts.</SC.Text>
          </SC.Wrapper>
        )}
      </Container>
    </Section>
  );
}
