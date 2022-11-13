import { useState, ChangeEvent, useEffect } from 'react'
import * as S from './styles'
import CreditCard from '../../components/CreditCard/CreditCard'
import TransactionItem from '../../components/TransactionItem/TransactionItem'
import api from '../../configs/api'
import CircularProgress from '@mui/material/CircularProgress'

interface ITransactions {
  category: string;
  createdAt: string;
  payer: string;
  title: string;
  total: number;
  transaction_date: string;
  transaction_id: string;
  updateAt: string;
  userCustomerId: string;
}

const Transactions = () => {
  const optionsSelect = ['Hoje', '1 semana', '1 mês'];
  const [value, setValue] = useState<string>('1 mês');
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getTransactions = () => {
    api.get('/transactions').then(response => {
      setTransactions(response.data.users);
    }).catch(err => {
      throw new Error(err);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <S.Transactions>
      {loading ? 
        <S.LoadingWrapper>
          <CircularProgress color='inherit'/> 
        </S.LoadingWrapper>
        :
        <>
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
              {transactions.map((items: ITransactions) => (
                  <TransactionItem
                    key={items.transaction_id}
                    name={items.title}
                    category={items.category}
                    total={items.total}
                  />
                ))
              }
            </S.TransactionItemWrapper>
          </S.ListWrapper>
        </>
      }
    </S.Transactions>
  )
}

export default Transactions