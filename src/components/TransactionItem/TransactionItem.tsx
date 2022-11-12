import * as S from './styles'

interface ITransaction {
  name?: string;
  category?: string;
  total?: string;
}

const TransactionItem = ({ name, category, total }: ITransaction) => {
  return (
    <S.TransactionItem>
      <S.ContainerLeft>
        <S.IconBackground>
          <S.Icon 
            src={`../../../public/${category}.svg`} 
            alt={category} 
          />
        </S.IconBackground>
        <S.DetailsContainer>
          <S.Name>{name}</S.Name>
          <S.Category>{category}</S.Category>
        </S.DetailsContainer>
      </S.ContainerLeft>
      <S.Total>- {total}</S.Total>
    </S.TransactionItem>
  )
}

export default TransactionItem