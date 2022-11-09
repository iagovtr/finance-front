import React from 'react'
import * as S from './styles'
import IslandIcon from '../../assets/icons/notfound.svg'

const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <S.NotFoundImage src={IslandIcon} alt="" />
      <S.Redirect to='/'>Retornar para a Home</S.Redirect>
    </S.NotFoundWrapper>
  )
}

export default NotFound