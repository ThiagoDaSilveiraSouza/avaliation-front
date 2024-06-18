import { ReactNode } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  box-sizing: border-box;

  width: 300px;
`;

interface ModalProps {
  children?: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalCard>{children}</ModalCard>
    </ModalContainer>
  );
};
