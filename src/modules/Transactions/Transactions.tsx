import React from 'react'
import * as S from './styles'
import CreditCard from '../../components/CreditCard/CreditCard'

const Transactions = () => {
  return (
    <S.Transactions>
      <S.Title>Meus cartões</S.Title>
      <S.CardWrapper>
        <CreditCard/>
      </S.CardWrapper>
    </S.Transactions>
  )
}

export default Transactions