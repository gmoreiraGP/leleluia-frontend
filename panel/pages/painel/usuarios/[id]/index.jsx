import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '../../../../lib/graphql'
import Layout from '../../../../components/Layout'
import Container from '../../../../components/Container'
import HeaderMain from '../../../../components/HeaderMain'
import Profile from '../../../../components/Profile'

const OneUser = () => {
  const router = useRouter()

  const { data } = useQuery(`
    query {
        getUserById(id: "${router.query.id}") {
          email
          password
        }
    } 
  `)
  const { data: dataProfile } = useQuery(`
    query {
        getProfileById(id: "${router.query.id}") {
          firstName
          lastName
          bio
          social
        }
    } 
  `)

  const Letters = () => {
    const firstName = dataProfile?.getProfileById?.firstName
    const lastName = dataProfile?.getProfileById?.lastName

    const firstLetter = firstName?.substr(0, 1)
    const lastLetter = lastName?.substr(0, 1)
    const init = firstLetter + lastLetter
    if (!init) {
      return ''
    }
    return init
  }

  return (
    <Layout>
      <Container>
        <HeaderMain>
          <HeaderMain.Title>Perfil do usuário</HeaderMain.Title>
          <Link href='/painel/usuarios'>
            <HeaderMain.Link>Voltar</HeaderMain.Link>
          </Link>
        </HeaderMain>
        {/* <div>
          {data && data.getUserById && (
            <Profile>
              <Profile.Header>
                <Profile.Label>Email:</Profile.Label>
                <Profile.Text>{data.getUserById.email}</Profile.Text>
              </Profile.Header>
            </Profile>
            
          )}
          {dataProfile ? (
                dataProfile.getProfileById && (
                  <>
                    <Profile.Text>
                      Nome: {dataProfile.getProfileById?.firstName}{' '}
                      {dataProfile.getProfileById?.lastName}
                    </Profile.Text>
                    <Profile.Text>
                      Bio: {dataProfile.getProfileById?.bio}
                    </Profile.Text>
                    <Profile.Text>
                      Social: {dataProfile.getProfileById?.social}
                    </Profile.Text>
                  </>
                )
              ) : (
                <div className='flex justify-center items-end flex-col'>
                  <div>Seu perfil ainda não foi criado.</div>
                  <Link href={`${router.query.id}/profile`}>
                    <a>Criar perfil</a>
                  </Link>
                </div>
              )}
        </div>

      */}
        <Profile>
          <Profile.Header>
            <Profile.Thumb initials initialsLetters={Letters()}>
              {/* <span>{Letters()}</span> */}
            </Profile.Thumb>
            <Profile.WrapperText>
              <Profile.Text title>
                {dataProfile?.getProfileById?.firstName}
                &nbsp;
                {dataProfile?.getProfileById?.lastName}
              </Profile.Text>
              <Profile.Text>{dataProfile?.getProfileById?.bio}</Profile.Text>
            </Profile.WrapperText>
          </Profile.Header>
        </Profile>
      </Container>
    </Layout>
  )
}

export default OneUser
