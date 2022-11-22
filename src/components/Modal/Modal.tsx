import { forwardRef, ForwardRefRenderFunction, useCallback, useState, useImperativeHandle } from 'react'
import * as S from './styles'

export interface ModalHandles {
  openModal: () => void;
}

const Modal: ForwardRefRenderFunction<ModalHandles> = ({}, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal,
    }
  });

  const handleCloseModal = () => {
    setVisible(false);
  };

  if(!visible) {
    return null;
  }

  return (
    <S.Modal>
      <S.ModalContent>
        <S.FormWrapper>
          <div>
            <p>Título</p>
            <input type="text" maxLength={50}/>
          </div>
          <div>
            <p>Data</p>
            <input type="date"/>
          </div>
          <div>
            <p>Categoria</p>
            <select>
              <option value="">Veículo</option>
            </select>
          </div>
          <div>
            <p>Total</p>
            <input type="number"/>
          </div>
          <div>
            <p>Responsável</p>
            <input type="text" maxLength={25}/>
          </div>
        </S.FormWrapper>
        <S.ButtonWrapper>
          <S.CloseModal onClick={handleCloseModal}>Cancelar</S.CloseModal>
          <S.BtnSave onClick={() => {}}>Salvar</S.BtnSave>
        </S.ButtonWrapper>
      </S.ModalContent>
    </S.Modal>
  )
}

export default forwardRef(Modal) 