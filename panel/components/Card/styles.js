import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.size.md};

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 50%;
  }
  @media (max-width: ${props => props.theme.screen.xl}) {
    width: 33%;
  }
`
export const CardStyled = styled.div`
  display: flex;
  justify-items: center;
  padding: ${props => props.theme.size.md};
  box-shadow: ${props => props.theme.shadow.sm};
  border-radius: ${props => props.theme.size.md};
  background: ${props => props.theme.color.white};
`
export const CardIcon = styled.div`
  padding: ${props => props.theme.size.sm};
  border-radius: ${props => props.theme.size.md};
`
export const CardInfo = styled.div`
  margin: 0 ${props => props.theme.size.sm};
`

export const CardTitle = styled.h4`
  font-size: ${props => props.theme.size.lg};
  font-weight: 900;
  color: ${props => props.theme.colors.gray};
`
export const CardDescription = styled.p`
  color: ${props => props.theme.colors.gray};
`
