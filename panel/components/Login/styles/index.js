import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.gray};
`

export const Container = styled.div`
  width: 100%;
  max-width: 60%;
  margin: 0 auto;
`

export const Header = styled.div`
  img {
    margin: 0 auto;
    height: ${props => props.theme.size.xl};
    width: auto;
  }
  h2 {
    margin-top: ${props => props.theme.size.sm};
    color: ${props => props.theme.colors.red};
    font-size: ${props => props.theme.size.md};
    font-weight: 800;
    text-align: center;
  }
`

export const Form = styled.form`
  border-radius: ${props => props.theme.size.sm};
  background: ${props => props.theme.colors.white};
  margin: ${props => props.theme.size.sm};
  padding: ${props => props.theme.size.lg};
`
export const WrapperInput = styled.div`
  box-shadow: ${props => props.theme.shadow.sm};
  border-radius: ${props => props.theme.size.sm};
`
export const BoxInput = styled.div`
  position: relative;
`

export const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  padding: ${props => props.theme.size.sm} ${props => props.theme.size.md};
  color: ${props => props.theme.colors.black};
  background-color: ${props => rgba(props.theme.colors.gray, 0.1)};
  border-radius: ${props =>
    props.first
      ? `${props.theme.size.sm} ${props.theme.size.sm} 0 0`
      : `0 0 ${props.theme.size.sm} ${props.theme.size.sm}`};

  border: 1px solid ${props => props.theme.colors.gray};

  ::placeholder {
    color: ${props => props.theme.colors.gray};
  }
`

export const Icon = styled.div`
  position: absolute;
  top: ${props => props.theme.size.sm};
  right: 0;
  margin-right: ${props => props.theme.size.sm};
  width: ${props => props.theme.size.md};
  height: ${props => props.theme.size.md};

  svg {
    fill: ${props => props.theme.colors.gray};

    &:hover {
      fill: ${props => props.theme.colors.red};
    }
  }
`
export const WrapperRememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WrapperCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.size.sm};

  label {
    color: ${props => props.theme.colors.gray};
  }
`
export const Checkbox = styled.input`
  height: ${props => props.theme.size.sm};
  width: ${props => props.theme.size.sm};

  &:not(:checked),
  &:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }

  &:not(:checked) + label,
  &:checked + label {
    position: relative;
    padding-left: 2.3em;
    font-size: 1.05em;
    line-height: 1.7;
    cursor: pointer;
  }

  &:checked + label {
    color: ${props => props.theme.colors.red};
  }

  &:not(:checked) + label:before,
  &:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid ${props => props.theme.colors.gray};
    background: ${props => props.theme.colors.white};
    border-radius: 0.2em;
    box-shadow: inset 0 1px 3px ${props => rgba(props.theme.colors.black, 0.1)},
      0 0 0 0 ${props => rgba(props.theme.colors.red, 0.2)};
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  &:not(:checked) + label:after,
  &:checked + label:after {
    content: '✕';
    position: absolute;
    top: 0.525em;
    left: 0.18em;
    font-size: 1.375em;
    color: ${props => props.theme.colors.red};
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }

  &:disabled:not(:checked) + label:before,
  &:disabled:checked + label:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #e9e9e9;
  }

  &:disabled:checked + label:after {
    color: #777;
  }

  &:disabled + label {
    color: #aaa;
  }
`

export const ForgotLink = styled.a`
  color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.red};
  }
`

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.size.sm};
  width: 100%;
  border: none;
  border-radius: ${props => props.theme.size.md};
  font-weight: 600;
  background: ${props => props.theme.colors.red};
  padding: ${props => props.theme.size.sm} ${props => props.theme.size.md};

  span {
    color: ${props => props.theme.colors.white};
  }

  svg {
    fill: ${props => props.theme.colors.white};
    width: ${props => props.theme.size.md};
  }

  &:hover {
    background: ${props => props.theme.colors.gray};

    span {
      color: ${props => props.theme.colors.red};
    }

    svg {
      fill: ${props => props.theme.colors.red};
    }
  }
`
