import Loader from '../../components/Loader/Loader';
import { Container, Section } from '../../components/shared/Layout/Layout.styled';
import PhonebookForm from '../../components/PhonebookForm/PhonebookForm';
import * as HM from '../Home/Home.styled';
import * as SC from './Phonebook.styled';
export default function Phonebook() {
  return (
    <Section>
      <Container>
        <Loader>
          <HM.Wrapper>
            <HM.Title>Phonebook</HM.Title>
            <HM.Text>A contact can include a name, phone number and an email </HM.Text>
            <HM.Text>
              Click the
              <SC.Span>"Add"</SC.Span>
              button to add a new contact.
            </HM.Text>
            <PhonebookForm />
          </HM.Wrapper>
        </Loader>
      </Container>
    </Section>
  );
}
