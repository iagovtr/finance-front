import * as S from './styles'
import CreditCards from '../../../public/credit-card.svg'
import MasterCard from '../../../public/master-card.svg'

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