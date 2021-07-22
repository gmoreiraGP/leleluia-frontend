import styled from 'styled-components'

export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: ${props => props.theme.size.sm};
  margin-bottom: 0.3rem;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.gray};

  &:focus {
    outline: none;
  }
`

export const InputIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
