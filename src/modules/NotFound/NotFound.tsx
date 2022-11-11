import * as S from './styles'
import IslandIcon from '../../../public/not-found.svg'

const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <S.NotFoundImage src={IslandIcon} alt="" />
      <S.Redirect to='/'>Retornar para a Home</S.Redirect>
    </S.NotFoundWrapper>
  )
}

export default NotFound