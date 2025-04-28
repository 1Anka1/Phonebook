import { Container, Section } from '../../components/shared/Layout/Layout.styled';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
}
