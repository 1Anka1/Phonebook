import Loader from '../../components/Loader/Loader';
import { Container, Section } from '../../components/shared/Layout/Layout.styled';

export default function Phonebook() {
  return (
    <Section>
      <Container>
        <Loader>
          <div>Phonebook</div>
        </Loader>
      </Container>
    </Section>
  );
}
