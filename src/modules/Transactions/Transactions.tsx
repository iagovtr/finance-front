import React from 'react'
import * as S from './styles'
import CreditCard from '../../components/CreditCard/CreditCard'
import Select from '../../components/Select/Select'

const Transactions = () => {
  return (
    <S.Transactions>
      <S.Title>Meus cartões</S.Title>
      <S.CardWrapper>
        <CreditCard/>
      </S.CardWrapper>
      <S.ListWrapper>
        <S.ListTitle>Histórico de transações</S.ListTitle>
        <Select/>
      </S.ListWrapper>
    </S.Transactions>
  )
}

export default Transactions