import styled from 'styled-components'

export const Button = styled.button`
  width: 150px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.lightBlack};
  text-transform: uppercase;
  font-weight: 500;
  padding: ${props => props.theme.size.sm};
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${props => props.theme.colors.black};
  }
`
