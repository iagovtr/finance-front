import React from 'react'
import * as S from './styles'
import brandSvg from '../../../assets/icons/brand-icon.svg'
import menuSvg from '../../../assets/icons/menu-icon.svg'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.ContainerLeft>
          <S.BrandIcon src={brandSvg} alt="Brand Logo" />
          <S.Title>Finances</S.Title>
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.MenuIcon src={menuSvg} alt="Menu Logo" />
        </S.ContainerRight>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header