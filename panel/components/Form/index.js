import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    flex
    justify-center
    items-center
    min-w-full
    mt-5
`

const FormStyled = tw.form`
  flex
  flex-col
  justify-between
  w-full
  bg-white
  overflow-hidden
  shadow
  rounded-lg  
  gap-8
`

const InputGroup = tw.div`
  flex
  justify-between
  items-center
  p-6
  gap-3
  ${props => (props.flexRow ? 'flex-row' : 'flex-col')}
  `

const FormBoxInput = tw.div`
  w-full
`

const FormLabel = tw.label`
    block
    text-sm
    font-medium
    text-gray-700
`

const FormInput = tw.input`
    p-2
    mt-2
    focus:ring-red-500
    focus:border-red-500
    focus:outline-none
    focus-visible: tranparent
    block
    w-full
    shadow-sm
    sm:text-sm
    border-2
    border-gray-300
    rounded-lg
`
const ButtonBox = tw.div`
    px-4
    py-3
    bg-gray-50
    text-right
    sm:px-
`
const FormButton = tw.button`
    inline-flex
    justify-center
    py-2
    px-4
    border
    border-transparent
    shadow-sm
    text-sm
    font-medium
    rounded-md
    text-white
    bg-red-600
    hover:bg-red-700
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-red-500
`

const Form = ({ onSubmit, children }) => {
  return (
    <Wrapper>
      <FormStyled onSubmit={onSubmit}>{children}</FormStyled>
    </Wrapper>
  )
}

const GroupInput = ({ children, flexRow }) => {
  return <InputGroup flexRow={flexRow}>{children}</InputGroup>
}

Form.GroupInput = GroupInput
Form.BoxInput = FormBoxInput
Form.Label = FormLabel
Form.Input = FormInput
Form.ButtonBox = ButtonBox
Form.Button = FormButton

export default Form
