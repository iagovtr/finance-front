import { useState, ChangeEvent } from 'react'
import * as S from './styles'
import CreditCard from '../../components/CreditCard/CreditCard'
import TransactionItem from '../../components/TransactionItem/TransactionItem'

const Transactions = () => {
  const optionsSelect = ['Hoje', '1 semana', '1 mês'];
  const [value, setValue] = useState<string>('1 mês');

  return (
    <S.Transactions>
      <S.Title>Meus cartões</S.Title>
      <S.CardWrapper>
        <CreditCard/>
      </S.CardWrapper>
      <S.ListWrapper>
        <S.FilterWrapper>
          <S.ListTitle>Histórico de transações</S.ListTitle>
          <S.Select 
            onChange={
              (e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)
            } 
            value={value}
          >
            {
              optionsSelect?.map((option: string, i: number) => (
                <S.Option key={i} value={option}>{option}</S.Option>
              ))
            }
          </S.Select>
        </S.FilterWrapper>
        <S.TransactionItemWrapper>
          <TransactionItem
            name='Lago Park'
            category='vehicle'
            total='5.00'
          />
        </S.TransactionItemWrapper>
      </S.ListWrapper>
    </S.Transactions>
  )
}

export default Transactions