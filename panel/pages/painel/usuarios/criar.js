import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'

import { useMutation } from '../../../lib/graphql'
import Container from '../../../components/Container'
import Layout from '../../../components/Layout'
import HeaderMain from '../../../components/HeaderMain'
import Form from '../../../components/Form'

const CREATE_USER = `
    mutation createUser($email: String!, $password: String!) { 
      createUser(input: {
        email: $email,
        password: $password
      }) {
          id
          email
        }
      }
    `

const CreateUser = () => {
  const router = useRouter()

  const [togglePassword, setTogglePassword] = useState(false)

  const handlePassword = () => {
    setTogglePassword(old => !old)
  }

  const [createData, createUser] = useMutation(CREATE_USER)
  const formikForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      await createUser(values)
      router.push('/painel/usuarios')
    }
  })

  return (
    <Layout title='Criar usuário'>
      <Container>
        <HeaderMain>
          <HeaderMain.Title>Criar novo usuário</HeaderMain.Title>
          <Link href='/painel/usuarios'>
            <HeaderMain.Link>Voltar</HeaderMain.Link>
          </Link>
        </HeaderMain>
        <Form onSubmit={formikForm.handleSubmit}>
          <Form.GroupInput>
            <Form.BoxInput>
              <Form.Label htmlFor='email'>Email</Form.Label>

              <Form.Input
                type='text'
                name='email'
                onChange={formikForm.handleChange}
                value={formikForm.values.email}
                id='email'
              />
            </Form.BoxInput>
            <Form.BoxInput>
              <Form.Label htmlFor='password'>Senha</Form.Label>
              <Form.Input
                type={togglePassword ? 'text' : 'password'}
                name='password'
                onChange={formikForm.handleChange}
                value={formikForm.values.password}
                id='password'
              />
              <Form.Icon onClick={handlePassword}>
                {togglePassword ? <EyeOffIcon /> : <EyeIcon />}
              </Form.Icon>
            </Form.BoxInput>
          </Form.GroupInput>
          <Form.ButtonBox>
            <Form.Button type='submit'>Salvar</Form.Button>
          </Form.ButtonBox>
        </Form>
      </Container>
    </Layout>
  )
}

export default CreateUser
