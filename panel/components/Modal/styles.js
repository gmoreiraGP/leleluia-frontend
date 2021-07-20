import styled from 'styled-components'
import { rgba } from 'polished'

const Flex = `
display: flex;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
`

export const Box = styled.div`
  height: 100vh;
  ${Flex};
`

export const Wrapper = styled.div`
  position: relative;
  ${Flex};
  flex-direction: column;
  width: 50%;
  height: 33%;
  margin: 0 auto;
  background: ${props => rgba(props.theme.colors.gray, 0.5)};
  box-shadow: ${props => props.theme.shadow.sm},
    ${props => props.theme.shadow.lg};
  gap: ${props => props.theme.size.sm};
`
export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
`

export const ModalHeader = styled.div`
  ${Flex};
  flex-direction: column;
  height: 33%;
  gap: ${props => props.theme.size.sm};
`

export const ModalTitle = styled.h3`
  text-align: center;
  font-weight: 700;
`
export const ModalIcon = styled.div`
  ${Flex};
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: ${props => props.theme.size.lg};
  background: ${props => props.theme.colors.red};

  svg {
    width: 30px;
  }
`

export const ModalButton = styled.button`
  font-weight: 500;
  padding: ${props => props.theme.size.sm};
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.delete
      ? props.theme.colors.red
      : rgba(props.theme.colors.black, 0.2)};
  &:focus {
    outline: none;
  }
`

export const ModalBox = styled.div`
  width: 100%;
  ${Flex};
  justify-content: space-around;
  padding: ${props => props.theme.size.sm};
  /* background: ${props => rgba(props.theme.colors.black, 0.2)}; */
  gap: ${props => props.theme.size.sm};
`
