import styled from 'styled-components'
import Variaveis from '../../styles/Variaveis'

type TagProps = {
  prioridade?: string
  status?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'pendente') return Variaveis.amarelo
    if (props.status === 'concluida') return Variaveis.verde
  } else if ('prioridade' in props) {
    if (props.prioridade === 'urgente') return Variaveis.vermelho
    if (props.prioridade === 'importante') return Variaveis.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  color: #fff;
  background-color: #2f3640;
  margin-right: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${Variaveis.verde};
`

export const BotaoRed = styled(Botao)`
  background-color: ${Variaveis.vermelho};
`
