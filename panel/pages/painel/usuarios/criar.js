import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
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
          <h1 className='text-5xl font-bold mb-4'>Criar novo usuário</h1>
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
                type='password'
                name='password'
                onChange={formikForm.handleChange}
                value={formikForm.values.password}
                id='password'
              />
            </Form.BoxInput>
          </Form.GroupInput>
          <Form.ButtonBox>
            <Form.Button type='submit' $submitType={true}>
              Salvar
            </Form.Button>
          </Form.ButtonBox>
        </Form>
      </Container>
    </Layout>
  )
}

export default CreateUser
