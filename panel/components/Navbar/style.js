import styled from 'styled-components'
import { rgba } from 'polished'

export const Flex = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavWrapper = styled.nav`
  ${Flex};
  flex-direction: column;
  background: ${props => rgba(props.theme.colors.gray, 0.1)};
  padding: 0 ${props => props.theme.size.lg};
  width: 20%;
  min-width: 20%;
  max-width: 30%;
  height: 100vh;
  position: relative;
`
export const NavbarLogo = styled.div`
  ${Flex};
  margin-top: ${props => props.theme.size.md};
`
export const NavbarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const NavLogoTitle = styled.span`
  margin-left: ${props => props.theme.size.sm};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.size.md};
  font-weight: 700;
`

export const NavbarCloseIcon = styled.div`
  position: absolute;
  top: ${props => props.theme.size.sm};
  right: ${props => props.theme.size.sm};
  width: 25px;
  cursor: pointer;

  svg {
    fill: ${props => props.theme.colors.red};

    &:hover {
      fill: ${props => props.theme.colors.white};
    }
  }
`
export const NavbarLinkWrapper = styled.div`
  flex: 1;
`

export const NavbarLink = styled.a`
  ${Flex};
  width: 100%;
  margin-top: ${props => props.theme.size.sm};
  padding: ${props => props.theme.size.sm} 0;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${props => rgba(props.theme.colors.black, 0.7)};
  }
`

export const NavbarText = styled.span`
  margin: 0 ${props => props.theme.size.sm};
`
