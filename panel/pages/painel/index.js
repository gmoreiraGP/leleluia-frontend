import { useState } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

const Painel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarToggle = () => setSidebarOpen(old => !old)

  return (
    <div className='flex'>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | Painel</title>
      </Head>
      {sidebarOpen && <Navbar sidebarToggle={sidebarToggle} />}

      <main className='flex flex-col w-full'>
        <Header sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
        <h1>testes</h1>
      </main>
    </div>
  )
}

export default Painel
