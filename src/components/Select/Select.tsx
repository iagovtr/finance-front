import React from 'react'
import * as S from './styles'

const Select = () => {
  return (
    <S.SelectWrapper>
      <S.Select name="" id="">
        <S.Option value="">Hoje</S.Option>
        <S.Option value="">1 semana</S.Option>
        <S.Option value="">1 mês</S.Option>
      </S.Select>
    </S.SelectWrapper>
  )
}

export default Select