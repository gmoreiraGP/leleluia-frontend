import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { useQuery, useMutation } from '../../../../lib/graphql'
import Layout from '../../../../components/Layout'
import Container from '../../../../components/Container'
import HeaderMain from '../../../../components/HeaderMain'

const UPDATE_USER = `
mutation updateUser($id: String!, $email: String!, $password: String!){
  updateUser(
    input: {
      id: $id
      email: $email
      password: $password
    }
  ) {
    id
    email
    password
  }
}
`

const Edit = () => {
  const router = useRouter()

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
          <h1 className='text-5xl font-bold mb-4'>Editar usuário</h1>
          <Link href='/painel/usuarios'>
            <HeaderMain.Link>Voltar</HeaderMain.Link>
          </Link>
        </HeaderMain>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form onSubmit={form.handleSubmit}>
            <div className='shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      name='email'
                      onChange={form.handleChange}
                      value={form.values.email}
                      id='email'
                      className='p-2 mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Senha
                    </label>
                    <input
                      type='text'
                      name='password'
                      onChange={form.handleChange}
                      value={form.values.password}
                      id='password'
                      className='p-2 mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default Edit
