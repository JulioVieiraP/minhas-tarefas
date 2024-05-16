import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Variaveis from '../../styles/Variaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${Variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
