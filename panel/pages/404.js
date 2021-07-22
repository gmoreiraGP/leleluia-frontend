import Container from '../components/Container'
import Layout from '../components/Layout'
import { MdError } from 'react-icons/md'

const Custom404 = () => {
  return (
    <Layout>
      <Container>
        <div className='icon'>
          <MdError size={55} />
        </div>
        <h1>Desculpe, não encontramos o que você procura.</h1>
      </Container>
    </Layout>
  )
}

export default Custom404
