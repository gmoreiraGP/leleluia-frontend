import tw from 'tailwind-styled-components'

const Container = tw.div`
    w-full
    h-screen
    absolute
    top-0
    left-0
    z-10
    backdrop-filter
    backdrop-blur-sm
`

const Box = tw.div`
    h-screen
    flex
    justify-center
    item-center
`

const Wrapper = tw.div`
    flex
    justify-center
    item-center
    flex-col
    w-1/2
    h-2/4
    m-auto
    bg-gray-100
    rounded-lg
    gap-3
`
const ModalHeader = tw.div`
  flex
  justify-center
  items-center
  gap-3
  h-3/4
`

const ModalTitle = tw.h3`
    text-center
    font-bold
`
const ModalIcon = tw.div`
  mx-auto
  flex-shrink-0
  flex
  items-center
  justify-center
  h-12
  w-12
  rounded-full
  bg-red-100
  sm:mx-0
  sm:h-10
  sm:w-10
`

const ModalButton = tw.button`
    ${props =>
      props.$confirm ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'}
    
    text-base 
    font-medium 
    rounded-lg
    focus:outline-none
    p-3
`

const ModalBox = tw.div`
    flex
    justify-end
    items-center
    p-3
    bg-gray-300
    w-full
    h-1/4
    rounded-lg
    gap-3
`

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
