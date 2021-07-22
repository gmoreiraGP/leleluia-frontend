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
  background: ${props => rgba(props.theme.colors.black, 0.8)};
  backdrop-filter: blur(10px);
`

export const Box = styled.div`
  height: 100vh;
  ${Flex};
`

export const Wrapper = styled.div`
  position: relative;
  ${Flex};
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  padding: ${props => props.theme.size.sm};
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.sm},
    ${props => props.theme.shadow.lg};
  gap: ${props => props.theme.size.sm};
`
export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;

  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  svg {
    transform: translateX(-0.5px);
  }

  &:hover {
    background: ${props => props.theme.colors.lightRed};
    color: ${props => props.theme.colors.white};
  }
`

export const ModalHeader = styled.div`
  ${Flex};
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 90%;
  gap: ${props => props.theme.size.sm};
`

export const ModalTitle = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
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

export const ModalButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ModalBox = styled.div`
  width: 90%;
  ${Flex};
  flex-direction: column;
`
