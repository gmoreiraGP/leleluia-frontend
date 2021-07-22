import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  background: ${props => props.theme.colors.white};
  margin: ${props => props.theme.size.lg} auto;
  padding: ${props => props.theme.size.md};

  ${props =>
    props.error &&
    `
    color: ${props.theme.colors.red};

    h1 {
      text-align: center;
    }

    .icon {
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }
  `}
`
