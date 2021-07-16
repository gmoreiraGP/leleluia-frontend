import {Wrapper, FormStyled, InputGroup, FormBoxInput, FormLabel, FormInput, FormIcon, ButtonBox, FormButton} from './styles'

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
Form.Icon = FormIcon
Form.ButtonBox = ButtonBox
Form.Button = FormButton

export default Form
