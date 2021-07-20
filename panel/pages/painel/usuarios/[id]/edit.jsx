import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'

import { useQuery, useMutation } from '../../../../lib/graphql'
import Layout from '../../../../components/Layout'
import Container from '../../../../components/Container'
import HeaderMain from '../../../../components/HeaderMain'
import Form from '../../../../components/Form'

const Edit = () => {
  const router = useRouter()
  const [togglePassword, setTogglePassword] = useState(false)

  const handlePassword = () => {
    setTogglePassword(old => !old)
  }

  const UPDATE_USER = `
  mutation updateUser($email: String!, $password: String!){
    updateUser(
      input: {
        id: "${router.query.id}"
        email: $email
        password: $password
      }
    ) {
      id
      email
    }
  }
`

  const { data } = useQuery(`
    query {
        getUserById(id: "${router.query.id}") {
          email
          password
        }
    } 
  `)

  const [updatedData, updatedUser] = useMutation(UPDATE_USER)

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      const user = {
        ...values,
        id: router.query.id
      }
      await updatedUser(user)
      router.push('/painel/usuarios')
    }
  })

  useEffect(() => {
    if (data && data.getUserById) {
      form.setFieldValue('email', data.getUserById.email)
      form.setFieldValue('password', data.getUserById.password)
    }
  }, [data])

  return (
    <Layout title='Editar usuário'>
      <Container>
        <HeaderMain>
          <HeaderMain.Title>Editar usuário</HeaderMain.Title>
          <Link href='/painel/usuarios'>
            <HeaderMain.Link>Voltar</HeaderMain.Link>
          </Link>
        </HeaderMain>
        <Form onSubmit={form.handleSubmit}>
          <Form.GroupInput>
            <Form.BoxInput>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Input
                type='text'
                name='email'
                onChange={form.handleChange}
                value={form.values.email}
                id='email'
              />
            </Form.BoxInput>
            <Form.BoxInput htmlFor='password'>
              <Form.Label>Password</Form.Label>
              <Form.Input
                type={togglePassword ? 'text' : 'password'}
                name='password'
                onChange={form.handleChange}
                value={form.values.password}
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

export default Edit
