import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderMainTitle = styled.h1`
  font-size: ${props => props.theme.size.lg};
  font-weight: 700;
  margin: 0 0 ${props => props.theme.size.sm} 0;
`

export const HeaderMainButton = styled.button``

export const HeaderMainLink = styled.a`
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.size.sm};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.black};
  }
`
