import styled from 'styled-components'

export const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 15px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 51px;
  min-height: 46px;
  background: #DCE6E5;
  border-radius: 8px;
`;

export const Icon = styled.img``;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 7px;
`;

export const Name = styled.h5`
  font-size: 12px;
`;

export const Category = styled.p`
  margin-top: 6px;
  font-size: 10px;
  color: #E5E5E5;
`;

export const Total = styled.h4`
  color: #E5E5E5;
`;

