import Head from 'next/head'
import Login from '../components/Login'

const Index = () => {
  return (
    <div>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | Login</title>
      </Head>
      <Login />
    </div>
  )
}

export default Index
