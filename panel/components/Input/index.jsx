import { Input as InputStyled, InputIcon, WrapperInput } from './styles'

const Input = ({children, label, type}) => {
    return(
        <WrapperInput>
            <InputStyled placeholder={`${label}...`} type={type}/>
           {children}
        </WrapperInput>
    )
}


Input.Icon = InputIcon
export default Input