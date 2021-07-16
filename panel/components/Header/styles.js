import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.header`
  position: relative;
  padding: ${props => props.theme.size.sm};
  width: 100%;
  background: ${props => rgba(props.theme.colors.white, 0.9)};
`
export const NavWrapperIcon = styled.div`
  position: absolute;
  top: ${props => props.theme.size.sm};
  left: ${props => props.theme.size.sm};
  width: 25px;
  cursor: pointer;

  svg {
    fill: ${props => props.theme.colors.red};

    &:hover {
      fill: ${props => props.theme.colors.black};
    }
  }
`

export const ProfileAvatar = styled.button`
  display: block;
  float: right;
  height: ${props => props.theme.size.md};
  width: ${props => props.theme.size.md};
  justify-self: end;
  border-radius: ${props => props.theme.size.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow.md};

  &:focus {
    outline: none;
  }
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProfileOptions = styled.div`
  position: absolute;
  top: ${props => props.theme.size.sm};
  right: ${props => props.theme.size.sm / 2};
  margin-top: ${props => props.theme.size.sm / 2};
  width: 80%;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.size.md};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow.md};
  z-index: 10;
`

export const ProfileItem = styled.a`
  display: block;
  padding: ${props => props.theme.size.sm / 2} ${props => props.theme.size.sm};
  background: ${props => props.theme.colors.white};
  color: ${props => rgba(props.theme.colors.red, 0.5)};

  &:hover {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
  }
`
