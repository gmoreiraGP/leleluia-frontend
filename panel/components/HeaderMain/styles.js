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
  margin-bottom: ${props => props.theme.md};
`

export const HeaderMainButton = styled.button``

export const HeaderMainLink = styled.a`
  background: ${props => rgba(props.theme.colors.gray, 0.2)};
  padding: ${props => props.theme.size.sm};
  color: ${props => rgba(props.theme.colors.white, 0.9)};
  cursor: pointer;

  &:hover {
    background: ${props => rgba(props.theme.colors.black, 0.7)};
    color: ${props => props.theme.colors.gray};
  }
`
