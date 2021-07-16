import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, AtSymbolIcon, LockClosedIcon } from '@heroicons/react/solid'
import {
  Wrapper,
  Container,
  Header,
  Form,
  WrapperInput,
  BoxInput,
  Input,
  Icon,
  WrapperRememberForgot,
  WrapperCheckbox,
  Checkbox,
  ForgotLink,
  ButtonSubmit
} from './styles'

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false)

  const handlePassword = () => {
    setTogglePassword(old => !old)
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <img src='/truck.svg' alt='Leleluia Transportes' />
          <h2>Entre na sua conta</h2>
        </Header>
        <Form action='#' method='POST'>
          <WrapperInput>
            <BoxInput>
              <Input
                id='email'
                name='email'
                type='email'
                autoComplete='off'
                required
                placeholder='Email'
                first
              />
              <Icon>
                <AtSymbolIcon />
              </Icon>
            </BoxInput>
            <BoxInput>
              <Input
                id='password'
                name='password'
                type={togglePassword ? 'password' : 'text'}
                autoComplete='off'
                required
                placeholder='Senha'
              />
              <Icon onClick={handlePassword}>
                <EyeIcon />
              </Icon>
            </BoxInput>
          </WrapperInput>
          <WrapperRememberForgot>
            <WrapperCheckbox>
              <Checkbox id='remember_me' name='remember_me' type='checkbox' />
              <label htmlFor='remember_me'>Lembrar-me</label>
            </WrapperCheckbox>

            <Link href='#'>
              <ForgotLink>Esqueceu sua senha?</ForgotLink>
            </Link>
          </WrapperRememberForgot>

          <ButtonSubmit type='submit'>
            <LockClosedIcon />
            <span>ENTRAR</span>
          </ButtonSubmit>
        </Form>
      </Container>
    </Wrapper>
  )
}
export default Login
