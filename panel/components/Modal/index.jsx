import { MdClose } from 'react-icons/md'
import { Container, Box, Close, Wrapper, ModalButton, ModalBox, ModalIcon, ModalTitle, ModalHeader } from './styles'
const Modal = ({ children, close }) => {
  return (
    <Container>
      <Box>
        <Wrapper>
          <Close onClick={close}>
            <MdClose size="25" />
          </Close>
          {children}
          </Wrapper>
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
