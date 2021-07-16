import styled, { css } from 'styled-components'
import { rgba } from 'polished'

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  ${Flex};
  min-width: 100%;
  margin-top: ${props => props.theme.size.md};
`

export const FormStyled = styled.form`
  ${Flex};
  flex-direction: column;
  width: 100%;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.size.lg};
  gap: ${props => props.theme.size.md};
  box-shadow: ${props => props.theme.shadow.md};
  overflow: hidden;
`

export const InputGroup = styled.div`
  ${Flex};
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.theme.size.sm};
  gap: ${props => props.theme.size.md};

  ${props =>
    props.flexRow ? 'flex-direction: row;' : 'flex-direction: column;'}
`

export const FormBoxInput = styled.div`
  width: 90%;
  position: relative;
`

export const FormLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.size.sm};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`

export const FormInput = styled.input`
  display: block;
  width: 100%;
  border: ${props => props.theme.size.sm};
  border-radius: ${props => props.theme.size.lg};
  padding: ${props => props.theme.size.sm};
  margin-top: ${props => props.theme.size.sm};
  box-shadow: ${props => props.theme.shadow.sm};
  color: ${props => props.theme.colors.black};

  &:focus {
    outline: none;
  }

  @media (max-width: ${props => props.theme.screens.xl}) {
    font-size: ${props => props.theme.size.sm};
  } ;
`

export const FormIcon = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 20px;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.black};
  }
`

export const ButtonBox = styled.div`
  width: 100%;
  padding: ${props => props.theme.size.md};
  background: ${props => rgba(props.theme.colors.gray, 0.5)};
  text-align: right;
`
export const FormButton = styled.button`
  ${Flex}
  display: inline-flex;
  padding: ${props => props.theme.size.sm} ${props => props.theme.size.md};
  box-shadow: ${props => props.theme.shadow.sm};
  font-size: ${props => props.theme.size.sm};
  font-weight: 500;
  border-radius: ${props => props.theme.size.md};
  color: ${props => props.theme.colors.white};
  background: ${props => rgba(props.theme.colors.red, 0.7)};

  &:hover {
    background: ${props => props.theme.colors.red};
  }

  &:focus {
    outline: none;
  }
`
