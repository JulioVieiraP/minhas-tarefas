import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.label>{legenda}</S.label>
  </S.Card>
)

export default FiltroCard
