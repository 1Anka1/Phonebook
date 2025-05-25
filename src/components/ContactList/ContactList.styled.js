import styled from 'styled-components';

export const ContactList = styled.ol`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.15);
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  justify-content: space-around;
  letter-spacing: 2px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primary-color);
  }
`;

export const WrapperContactBtn = styled.div`
  display: flex;
  gap: 30px;
`;
