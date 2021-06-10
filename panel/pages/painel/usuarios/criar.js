import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { useMutation } from '../../../lib/graphql'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Container from '../../../components/Container'

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [data, createUser] = useMutation(CREATE_USER)
  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      await createUser(values)
      router.push('/painel/usuarios')
    }
  })

  const sidebarToggle = () => setSidebarOpen(old => !old)
  return (
    <div className='flex'>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | Criar usuário</title>
      </Head>
      {sidebarOpen && <Navbar sidebarToggle={sidebarToggle} />}

      <main className='flex flex-col w-full'>
        <Header sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
        <Container>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <div className='mb-5'>
            <h1 className='text-5xl font-bold mb-4'>Criar novo usuário</h1>
            <Link href='/painel/usuarios'>
              <a>Voltar</a>
            </Link>
          </div>
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
                        className='p-2 mt-2 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
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
                        type='password'
                        name='password'
                        onChange={form.handleChange}
                        value={form.values.password}
                        id='password'
                        className='p-2 mt-2 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default CreateUser
