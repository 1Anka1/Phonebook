import * as SC from './Form.styled';

export default function Form({ children }) {
  return (
    <SC.FormWrapper>
      <SC.Form>
        <SC.FormTitle> {children}</SC.FormTitle>
        <SC.Input placeholder="Email" type="email" name="email" />
        <SC.Input type="text" name="password" placeholder="Password" />
        {children === 'Registration' && (
          <SC.Input type="text" name="passwordConfirm" placeholder="Confirm your password" />
        )}
        <SC.FormButton type="submit">Submit</SC.FormButton>
      </SC.Form>
    </SC.FormWrapper>
  );
}
