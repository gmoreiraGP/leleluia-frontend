import styled from 'styled-components'
import { rgba } from 'polished'

const Flex = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
  ${Flex};
  justify-content: space-between;
  flex-direction: row;
`
export const ProfileThumbImage = styled.div`
  position: relative;
  width: ${props => props.theme.size.xl2};
  height: ${props => props.theme.size.xl2};
  border-radius: ${props => props.theme.size.xl2};
  color: ${props => props.theme.colors.white};
  background-color: ${props => rgba(props.theme.colors.gray, 0.5)};

  &:before {
    content: '${props => (props.initials ? props.initialsLetters : '')}';
    display: flex;
    justify-content: center;
    font-family: Roboto;
    font-size: ${props => props.theme.size.lg};
    font-weight: 600;
    line-height: ${props => props.theme.size.xl2};
    color: ${props => props.theme.colors.white};
  }
`
export const ProfileHeader = styled.div`
  ${Flex};
  gap: ${props => props.theme.size.sm};
`

export const ProfileWrapperText = styled.div`
  ${Flex};
  align-items: start;
  flex-direction: column;
`

export const ProfileText = styled.h4`
  font-weight: ${props => (props.title ? 700 : 100)};
  font-size: ${props =>
    props.title ? props.theme.size.md : props.theme.size.sm};
  font-style: ${props => !props.title && 'italic'};
  color: ${props =>
    props.title ? props.theme.colors.white : props.theme.colors.gray};
`

export const ProfileLabel = styled.div`
  padding: ${props => props.theme.size.sm};
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.size.lg};
`
