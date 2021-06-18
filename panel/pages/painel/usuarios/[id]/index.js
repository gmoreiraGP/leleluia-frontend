import { useRouter } from 'next/router'
import { useQuery } from '../../../../lib/graphql'
import Layout from '../../../../components/Layout'
import Container from '../../../../components/Container'
import HeaderMain from '../../../../components/HeaderMain'
import Link from 'next/link'
import Profile from '../../../../components/Profile'

const OneUser = () => {
  const router = useRouter()

  const { data } = useQuery(`
    query {
        getUserById(id: "${router.query.id}") {
          email
          password
        }
        getProfileById(id: "${router.query.id}") {
          firstName
          lastName
          bio
          social
        }
    } 
  `)

  return (
    <Layout>
      <Container>
        <HeaderMain>
          <h1 className='text-5xl font-bold mb-4'>Perfil do usuário</h1>
          <Link href='/painel/usuarios'>
            <HeaderMain.Link>Voltar</HeaderMain.Link>
          </Link>
        </HeaderMain>
        <div>
          {data && data.getUserById && (
            <Profile>
              <Profile.Header>
                <Profile.Label>Email:</Profile.Label>
                <Profile.Text>{data.getUserById.email}</Profile.Text>
              </Profile.Header>
              <Profile.Text>
                Nome: {data.getProfileById?.firstName}{' '}
                {data.getProfileById?.lastName}
              </Profile.Text>
              <Profile.Text>Bio: {data.getProfileById?.bio}</Profile.Text>
              <Profile.Text>Social: {data.getProfileById?.social}</Profile.Text>
            </Profile>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export default OneUser
