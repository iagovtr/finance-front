import * as S from './styles'
import BrandSvg from '../../../../public/brand-icon.svg'
import MenuSvg from '../../../../public/menu-icon.svg'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.ContainerLeft>
          <S.BrandIcon src={BrandSvg} alt="Brand Logo" />
          <S.Title>Finances</S.Title>
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.MenuIcon src={MenuSvg} alt="Menu Logo" />
        </S.ContainerRight>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header