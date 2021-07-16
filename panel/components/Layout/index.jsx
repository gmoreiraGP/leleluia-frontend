import { useState } from 'react'
import Head from 'next/head'
import { Container, Wrapper } from './styles'
import Navbar from '../Navbar'
import Header from '../Header'

const Layout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarToggle = () => setSidebarOpen(old => !old)

  return (
    <Container>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | {title}</title>
      </Head>
      {sidebarOpen && <Navbar sidebarToggle={sidebarToggle} />}

      <Wrapper>
        <Header sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
        {children}
      </Wrapper>
    </Container>
  )
}

export default Layout
