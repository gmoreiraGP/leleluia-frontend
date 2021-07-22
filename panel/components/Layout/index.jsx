import Head from 'next/head'
import { Container, Wrapper } from './styles'
import Navbar from '../Navbar'
import Header from '../Header'

const Layout = ({ children, title }) => {
  return (
    <Container>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | {title}</title>
      </Head>
      <Navbar />
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </Container>
  )
}

export default Layout
