import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  overflow-y: auto;
  backdrop-filter: blur(2px);
  padding: 8px;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  background-color: var(--background-color);
  max-width: 550px;
  width: 100%;
  max-height: 100%;
  border-radius: 35px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  font-size: 35px;
  position: absolute;
  top: 15px;
  right: 20px;
  padding: 0px 10px;
  background-color: var(--accent-red-color);
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  color: var(--light-color);
  transition: color 350ms var(--timing-function), background-color 350ms var(--timing-function);

  &:hover {
    background-color: var(--background-color);
    color: var(--accent-red-color);
  }
`;
