import { Container, Box, Wrapper, ModalButton, ModalBox, ModalIcon, ModalTitle, ModalHeader } from './styles'
const Modal = ({ children }) => {
  return (
    <Container>
      <Box>
        <Wrapper>{children}</Wrapper>
      </Box>
    </Container>
  )
}

Modal.Button = ModalButton
Modal.Box = ModalBox
Modal.Icon = ModalIcon
Modal.Title = ModalTitle
Modal.Header = ModalHeader

export default Modal
