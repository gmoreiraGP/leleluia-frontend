import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { useMutation } from '../../../../../lib/graphql'
import Layout from '../../../../../components/Layout'
import Container from '../../../../../components/Container'
import HeaderMain from '../../../../../components/HeaderMain'
import Form from '../../../../../components/Form'

const ProfileEdit = () => {
  const router = useRouter()

  const CREATE_PROFILE = `
  mutation createProfile($firstName: String!, $lastName: String!, $bio: String!, $social: String!){
    createProfile(
      input: {
        firstName: $firstName
        lastName: $lastName
        bio: $bio
        social: $social
        userId: "${router.query.id}"
      }
    ) {
      id
    }
  }
`

  const [createProfileData, createProfile] = useMutation(CREATE_PROFILE)

  const form = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      bio: '',
      social: ''
    },
    onSubmit: async values => {
      const user = {
        ...values,
        id: router.query.id
      }
      await createProfile(user)
      router.push(`/painel/usuarios/${router.query.id}`)
    }
  })

  return (
    <Layout>
      <Container>
        <HeaderMain>
          <HeaderMain.Title>Criar perfil</HeaderMain.Title>
          <Link href={`/painel/usuarios/${router.query.id}`}>
            <HeaderMain.Link>Voltar</HeaderMain.Link>
          </Link>
        </HeaderMain>
        <p>{JSON.stringify(router.query.id)}</p>
        <Form onSubmit={form.handleSubmit}>
          <Form.GroupInput>
            <Form.BoxInput>
              <Form.Label htmlFor='firstName'>Primeiro nome</Form.Label>
              <Form.Input
                name='firstName'
                id='firstName'
                type='text'
                onChange={form.handleChange}
                value={form.values.firstName}
              />
            </Form.BoxInput>
            <Form.BoxInput>
              <Form.Label htmlFor='lastName'>Último nome</Form.Label>
              <Form.Input
                name='lastName'
                id='lastName'
                type='text'
                onChange={form.handleChange}
                value={form.values.lastName}
              />
            </Form.BoxInput>
            <Form.BoxInput>
              <Form.Label htmlFor='bio'>Bio</Form.Label>
              <Form.Input
                name='bio'
                id='bio'
                type='text'
                onChange={form.handleChange}
                value={form.values.bio}
              />
            </Form.BoxInput>
            <Form.BoxInput>
              <Form.Label htmlFor='social'>Redes sociais</Form.Label>
              <Form.Input
                name='social'
                id='social'
                type='text'
                onChange={form.handleChange}
                value={form.values.social}
              />
            </Form.BoxInput>
          </Form.GroupInput>
          <Form.ButtonBox>
            <Form.Button type='submit'>Criar</Form.Button>
          </Form.ButtonBox>
        </Form>
      </Container>
    </Layout>
  )
}

export default ProfileEdit
