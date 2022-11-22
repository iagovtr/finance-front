import { useState, ChangeEvent, useEffect, useRef, useCallback } from 'react'
import * as S from './styles'
import CreditCard from '../../components/CreditCard/CreditCard'
import TransactionItem from '../../components/TransactionItem/TransactionItem'
import api from '../../configs/api'
import CircularProgress from '@mui/material/CircularProgress'
import Modal, { ModalHandles } from '../../components/Modal/Modal'

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

interface IOptionsSelect {
  label: string;
  value: number;
}

const Transactions = () => {
  const modalRef = useRef<ModalHandles>(null);
  const [value, setValue] = useState<any>(0);
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const optionsSelect: IOptionsSelect[] = [
    {label: 'Hoje', value: 0}, 
    {label: '1 semana', value: 7}, 
    {label: '1 mês', value: 30}
  ];

  const getTransactions = () => {
    setLoading(true);
    api.get('/transactions', {
      params: {
        'interval_date': value
      }
    }).then(response => {
      setTransactions(response.data.transactions);
    }).catch(err => {
      throw new Error(err);
    }).finally(() => {
      setLoading(false);
    })
  }

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  useEffect(() => {
    getTransactions();
  }, [value]);

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
              <S.ListTitle>Histórico de saídas</S.ListTitle>
              <S.Select 
                onChange={
                  (e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)
                } 
                value={value}
              >
                {
                  optionsSelect?.map((option: IOptionsSelect) => (
                    <S.Option key={option.value} value={option.value}>{option.label}</S.Option>
                  ))
                }
              </S.Select>
            </S.FilterWrapper>
            <S.BtwWrapper>
              <S.BtnAdd onClick={handleOpenModal}>Adicionar despesa</S.BtnAdd>
            </S.BtwWrapper>
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
          <Modal ref={modalRef}/>
        </>
      }
    </S.Transactions>
  )
}

export default Transactions