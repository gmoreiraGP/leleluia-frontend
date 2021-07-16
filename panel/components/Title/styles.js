import styled from 'styled-components'
import { rgba } from 'polished'

export const TitleStyled = styled.h3`
  color: ${props => rgba(props.theme.colors.black, 0.5)};
  font-size: ${props => props.theme.size.lg};
  font-weight: 500;
`
