import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 6px;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 95%;
  padding: 10px;
  position: absolute;
  top: 50%;
  right: 50%;
  background: #333;
  box-shadow: -1px 1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transform: translate(50%, -50%);
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid;
`;  

export const MainButton = styled.button`
  font-weight: 700;
  font-size: 12px;
  border-radius: 2px;
  min-width: 120px;
  min-height: 35px;
  color: #FFF;
`;

export const CloseModal = styled(MainButton)`
  background: #2E2E2E;
`;

export const BtnSave = styled(MainButton)`
  background: #2D5652;
`;