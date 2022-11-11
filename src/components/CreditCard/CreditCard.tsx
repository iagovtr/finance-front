import React from 'react'
import * as S from './styles'
import CreditCards from '../../assets/icons/credit-card.svg'
import MasterCard from '../../assets/icons/master-card.svg'

const CreditCard = () => {
  return (
    <S.CreditCard>
      <S.ImagesContainer>
        <S.CardIcons src={CreditCards} alt="Cartão de crédito" />
        <S.CardIcons src={MasterCard} alt="Bandeira do cartão de crédito" />
      </S.ImagesContainer>
      <S.DetailsContainer>
        <S.CardFlag>Mastercard</S.CardFlag>
        <S.Bank>Banco Inter</S.Bank>
      </S.DetailsContainer>
    </S.CreditCard>
  )
}

export default CreditCard