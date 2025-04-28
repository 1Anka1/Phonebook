import { Container, Section } from '../../components/shared/Layout/Layout.styled';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Section>
      <Container>
        <LoginForm>Login</LoginForm>
      </Container>
    </Section>
  );
}
