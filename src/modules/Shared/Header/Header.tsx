import * as S from './styles'
import BrandSvg from '../../../assets/icons/brand-icon.svg'
import MenuSvg from '../../../assets/icons/menu-icon.svg'

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