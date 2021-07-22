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
  background: ${props => props.theme.colors.black};
  width: ${props => (props.sidebarOpen ? '320px' : '80px')};
  height: 100vh;
  position: relative;
`
export const NavbarLogo = styled.div`
  ${Flex};
  margin-top: ${props => props.theme.size.md};
`

export const NavLogoTitle = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => (props.title ? '15px' : '24px')};
  margin-left: ${props => props.title && '10px'};
  font-weight: 700;
  width: 50%;
`
export const NavbarTextHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: ${props => props.theme.size.sm};
`

export const NavbarLinkWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .active {
    background-color: ${props => props.theme.colors.white};

    span {
      color: ${props => props.theme.colors.lightBlack};
    }
  }
`

export const NavbarLink = styled.a`
  ${Flex};
  justify-content: start;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.lightBlack};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.black};

    span {
      color: ${props => props.theme.colors.white};
    }
  }

  ${props =>
    props.logout &&
    `
    position: absolute;
    bottom: 0;
    `};
`

export const NavbarIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.arrow ? '40px' : '80px')};
  height: ${props => (props.arrow ? '40px' : '80px')};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.arrow && '20px'};

  ${props =>
    props.arrow &&
    `
    background: ${props.theme.colors.red};
    cursor: pointer;
    
    &:hover{
      background: ${props.theme.colors.lightRed};
    }
  `};
`
export const NavbarText = styled.span`
  margin: 0 ${props => props.theme.size.sm};
  font-weight: 500;
  text-transform: uppercase;
`
